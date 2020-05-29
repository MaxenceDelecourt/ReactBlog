import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd';
import Navigation from './Navigation/Navigation'

const { Header, Footer, Content } = Layout;

function App(){
  return(
    <div className='App'>
        <Layout className="layout">
          <Header>
              <Navigation/>
          </Header>
          <Content style={{ padding: '0 50px' }}>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}



export default App;
