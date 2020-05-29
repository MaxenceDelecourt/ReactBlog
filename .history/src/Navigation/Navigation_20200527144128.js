import React from 'react'
import { Layout, Menu, Typography, Card, Button, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;
function Navigation (){
    return(
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Accueil</Menu.Item>
          <Menu.Item key="2">Articles</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>    
    )
        
}

export default Navigation;