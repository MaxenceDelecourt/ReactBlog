import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Avatar } from 'antd';
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
            <Avatar size="Large" icon={<UserOutlined />} />
            <br/>
            <br/>
            <Form name="basic" initialValues={{ remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item label="Username" name="username" rules={[{required: true,message: 'Please input your username!',},]}>
                <Input />
            </Form.Item>
                <Form.Item label="Password" name="password" rules={[{required: true,message: 'Please input your password!',},]}>
            <Input.Password />
            </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Admin;
