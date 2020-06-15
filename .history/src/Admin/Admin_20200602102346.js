import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Avatar, clol } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Admin = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Avatar size="large" icon={<UserOutlined />} />
            <br />
            <br />
            <Form name="basic" initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <span>Pseudo</span>
                <br />
                <br />
                <Col className="gutter-row" span={6}>
                    <Form.Item name="username" rules={[{ required: true, message: 'Votre pseudo n\'à pas été entré', },]}>
                        <Input/>
                    </Form.Item>
                    <span>Mot de passe</span>
                    <br />
                    <br />
                    <Form.Item name="password" rules={[{ required: true, message: 'Votre mot de passe n\'à pas été entré', },]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" shape="round" size='large' htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Form>
        </div>
    );
}

export default Admin;
