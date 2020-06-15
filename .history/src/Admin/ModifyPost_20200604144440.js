import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Col, Upload, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography

const ModifyPost = () => {

    const [Title, setCount] = useState('');
    const [count, setCount] = useState('');
    const [count, setCount] = useState('');

    const onFinish = values => console.log('Success:', values);

    const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

    changeHandler = e => {
        this.setState({ [e.target.title]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }

    return (
        <div>
            <Form name="basic" onSubmit={this.submitHandler} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Title>Titre de l'article</Title>
                <br />
                <Col className="gutter-row" span={12} offset={6}>
                    <Form.Item name="title" rules={[{ required: true, message: 'Le titre n\'a pas été entrer', },]}>
                        <Input />
                    </Form.Item>
                    <span>Couverture d'article</span>
                    <br />
                    <br />
                    <Upload>
                        <Button size='large' type="primary">
                            <UploadOutlined /> Télécharger
                        </Button>
                    </Upload>
                    <br />
                    <br />
                    <span>Contenue de l'article</span>
                    <br />
                    <br />
                    <Form.Item name='introduction'>
                        <Input.TextArea style={{ height: '250px' }} />
                    </Form.Item>
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

export default ModifyPost;
