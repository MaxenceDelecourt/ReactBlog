import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd';
import Navigation from './Navigation/Navigation'
import Accueil from './Accueil/Accueil'
import Post from './Post/Post'
import DescriptionPost from './DescriptionPost/DescriptionPost'


const { Header, Footer, Content } = Layout;

function App(){
  return(
    <div className='App'>
        <Layout className="layout">
          <Router>
            <Header>
                <Navigation/>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Route path='/' exact component={Accueil}/>
              <Route path='/Post' exact component={Post}/>
              <Route path='/DescriptionPost/' exact component={Post}/>
            </Content>
          </Router>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}



export default App;
