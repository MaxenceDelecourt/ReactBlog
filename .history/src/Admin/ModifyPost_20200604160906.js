import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Col, Upload, Typography, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography
const { Option } = Select

const ModifyPost = () => {

    // state 
    const [title, setTitle] = useState('Mon Titre');
    const [content, setContent] = useState('Mon contenue');
    const [author, setAuthor] = useState('auteur');

    const onFinish = success => console.log('Success:', success);

    const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

    const submitHandler = e => {
       
        console.log(title, content, author)
    }

    return (
        <div>
           
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
                    <Form.Item name="author" label="Auteur" rules={[{ required: true, },]}>
                        <Select name="author" value={author} placeholder="Selectioner un auteur d'article" onChange={value => setAuthor(value)} allowClear>
                            <Option value="Maxence">Maxence</Option>
                        </Select>
                    </Form.Item>
                    <br/>
                    <Form.Item>
                        <Button type="primary" shape="round" onClick={(e) => submitHandler(e)} size='large' htmlType="submit">
                            Publier
                        </Button>
                    </Form.Item>
                </Col>
        
        </div>
    );
}

export default ModifyPost;
