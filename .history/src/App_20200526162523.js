import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { Layout, Menu, Typography, Card } from 'antd';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

class App extends Component {
    state = {
      error: null,
      isLoaded: false,
      post: []
    }

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({isLoaded: true, post: result});
        
      }
    )
}

  render(){
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
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="" />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>,
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
