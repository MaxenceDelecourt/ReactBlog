import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd';
import Navigation from './Navigation/Navigation'
import Accueil from './Accueil/Accueil'
import Post from './Post/Post'
import PostDescription from './PostDescription/PostDescription'
import Admin from './Admin/Admin'


const { Header, Footer, Content } = Layout;

function App(){
  return(
    <div className='App'>
        <Layout className="layout">
          <Router>
            <Header style={{position: 'fixed', width: '100%', zIndex:'999'}}>
                <Navigation/>
            </Header>
            <Route path='/' exact component={Accueil}/>
            <Content style={{ padding: '0 50px' width: '100%'}}>
              <br/>
              <Route path='/Post' exact component={Post}/>
              <Route path='/PostDescription/:id' exact component={PostDescription}/>
              <Route path='/MaxAdmin' exact component={Admin}/>
            </Content>
          </Router>
          <Footer style={{ textAlign: 'center', bottom: 0, width: '100%'}}>Created by Maxence Delecourt ©2020 </Footer>
      </Layout>
    </div>
  );
}

export default App;
