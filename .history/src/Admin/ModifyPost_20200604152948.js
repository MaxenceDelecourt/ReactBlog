import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Col, Upload, Typography, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography
const { Option } = Select

const ModifyPost = () => {

    const [form] = Form.useForm();

    // state 
    const [title, setTitle] = useState('Mon Titre');
    const [content, setContent] = useState('Mon contenue');

    const onFinish = values => console.log('Success:', values);

    const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

    const onGenderChange = value => {
        switch (value) {
          case 'male':
            form.setFieldsValue({
              note: 'Hi, man!',
            });
            return;
        }
      };

    const submitHandler = e => {
        e.preventDefault()
        console.log()
    }

    return (
        <div>
            <Form name="basic" onSubmit={() => submitHandler} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Title>Titre de l'article</Title>
                <br />
                <Col className="gutter-row" span={12} offset={6}>
                    <Form.Item name="title" value={title} onChange={value => setTitle(value)} rules={[{ required: true, message: 'Le titre n\'a pas été entrer', },]}>
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
                    <Form.Item name='content' value={content} onChange={value => setContent(value)}>
                        <Input.TextArea style={{ height: '250px' }} />
                    </Form.Item>
                    <Form.Item name="author" label="Auteur" rules={[{required: true,},]}>
                        <Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
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
