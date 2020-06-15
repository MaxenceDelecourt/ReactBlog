import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Col, Upload, Typography, Select, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createClient } from '../Api/Api'
import { render } from '@testing-library/react';

const { Title } = Typography
const { Option } = Select

class ModifyPost extends Component {
    state = {
        title: null,
        description: null,
        slug: null,
        content: null,
        author: null,
        date: null
    }

    async componentDidMount() {
        const authors = await createClient.getAuthor()
    }

    datepicker = (date) => {
        setDate(date)
    }

    onFinish = values => {
        console.log('Success:', values);
        // '...value' deconstruit l'objet et en créé un autre avec date compris dedans
        createClient.postArticle({ ...values, date })
    }

    onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

    render() {
        const {}

        return (title, description, content, author}
            <div>
                <Form name="basic" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Col className="gutter-row" span={12} offset={6}>
                        <span>Titre de l'article</span>
                        <br />
                        <Form.Item name="title" value={title} onChange={(value) => this.setState({ title: value })} rules={[{ required: true, message: 'Le titre n\'a pas été entrer', },]}>
                            <Input />
                        </Form.Item>
                        <span>courte description de l'article</span>
                        <br />
                        <Form.Item name="description" value={description} onChange={value => setDescription(value)} rules={[{ required: true, message: 'La description n\'a pas été entrer', },]}>
                            <Input />
                        </Form.Item>
                        <span>Slug</span>
                        <br />
                        <Form.Item name="slug" value={slug} onChange={value => setSlug(value)} rules={[{ required: true, message: 'Le slug n\'a pas été entrer', },]}>
                            <Input />
                        </Form.Item>
                        <span>Contenue de l'article</span>
                        <br />
                        <br />
                        <Form.Item name='content' value={content} onChange={value => setContent(value)}>
                            <Input.TextArea style={{ height: '250px' }} />
                        </Form.Item>
                        <Form.Item name="author" label="Auteur" rules={[{ required: true, },]}>
                            <Select name="author" value={author} placeholder="Selectioner un auteur d'article" onChange={value => setAuthor(value)} allowClear>
                                <Option value="Maxence">Maxence</Option>
                            </Select>
                        </Form.Item>
                        <br />
                        <span>Date de publication : </span><DatePicker name="date" value={date} onChange={datepicker} />
                        <br />
                        <br />
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
                    </Col>
                </Form>
            </div>
        );
    }
}

export default ModifyPost;
