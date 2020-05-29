import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { Layout, Menu, Typography } from 'antd';
import Card from '../Card/Card.js'

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Title level={2}>Mon titre </Title>
            <Card>
            </Card>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
