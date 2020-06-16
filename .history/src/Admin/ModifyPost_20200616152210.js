import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Col, Row, Upload, Select, DatePicker, notification } from 'antd';
import { UploadOutlined, SmileOutlined } from '@ant-design/icons';
import { createClient } from '../Api/Api'


const { Option } = Select

class ModifyPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // on affecte les props passé via la list des post quand on clique sur modifié un article
            title: props.title && props.title,
            description: props.description && props.description,
            slug: props.slug && props.slug,
            content: props.content && props.content,
            date: props.date && props.date
        }

    }

    state = {
        title: null,
        description: null,
        slug: null,
        content: null,
        author: [],
        date: null
    }

    async componentDidMount() {
        const result = await createClient.getAuthor()
        this.setState({ author: result })
    }

    datepicker = (date) => {
        this.setState({ date: date })
    }

    onFinish = values => {
        const date = this.state.date
        // '...value' deconstruit l'objet et en créé un autre avec date compris dedans
        createClient.postArticle({ ...values, date });

        notification.open({
            message: "Votre article à été posté",
            icon: <SmileOutlined style={{ color: "#108ee9" }} />
        });
    }

    onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

    render() {
        const { title, description, slug, content, author, date } = this.state

        return (
            <div>
                <Form name="basic" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={6}>
                            <span>Titre de l'article</span>
                            <br />
                            <Form.Item name="title" value={title} onChange={(value) => this.setState({ title: value })} rules={[{ required: true, message: 'Le titre n\'a pas été entrer', },]}>
                                <Input value={title} />
                            </Form.Item>
                            <span>courte description de l'article</span>
                            <br />
                            <Form.Item name="description" value={description} onChange={(value) => this.setState({ description: value })} rules={[{ required: true, message: 'La description n\'a pas été entrer', },]}>
                                <Input value={description} />
                            </Form.Item>
                            <span>Slug</span>
                            <br />
                            <Form.Item name="slug" value={slug} onChange={(value) => this.setState({ slug: value })} rules={[{ required: true, message: 'Le slug n\'a pas été entrer', },]}>
                                <Input value={slug} />
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <span>Contenue de l'article</span>
                            <br />
                            <Form.Item name='content' value={content} onChange={(value) => this.setState({ content: value })}>
                                <Input.TextArea style={{ height: '250px' }} value={content} />
                            </Form.Item>
                            {/* <Form.Item name="author" label="Auteur" rules={[{ required: true, },]}>
                            {author.map(author => (
                                <Select name="author" value='' placeholder="Selectioner un auteur d'article" onChange={(value) => this.setState({ author: value })} allowClear>
                                    <Option value={author.id}>{author.name}</Option>
                                </Select>
                            ))}
                        </Form.Item> */}
                        </Col>
                        <span>Couverture d'article</span>
                        <br />
                        <br />
                        <Upload>
                            <Button size='large' type="primary">
                                <UploadOutlined /> Télécharger
                        </Button>
                        </Upload>
                        <br />
                        <Form.Item>
                            <Button type="primary" shape="round" size='large' htmlType="submit">
                                Publier
                        </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </div >
        );
    }
}

export default ModifyPost;
