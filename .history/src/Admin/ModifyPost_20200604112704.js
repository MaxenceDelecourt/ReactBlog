import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Col, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddPost = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form name="basic" initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <span>Titre de l'article</span>
                <br />
                <br />
                <Col className="gutter-row" span={12} offset={6}>
                    <Form.Item name="username" rules={[{ required: true, message: 'Votre pseudo n\'à pas été entré', },]}>
                        <Input/>
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
                        <Input.TextArea style={{height: '250px'}} />
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

export default AddPost;
