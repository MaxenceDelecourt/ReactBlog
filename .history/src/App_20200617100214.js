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
import ModifyPost from './Admin/ModifyPost'
import AdminDashboard from './Admin/AdminDashboard'


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout className="layout">
        <Router>
          <Header style={{ position: 'fixed', width: '100%', zIndex: '999' }}>
            <Navigation />
          </Header>
          <Route path='/' exact component={Accueil} />
          <Content style={{ padding: '0 50px', width: '100%', height: 600, marginTop: 100}}>
            <Route path='/Post' exact component={Post} />
            <Route path='/PostDescription/:slug' exact component={PostDescription} />
            <Route path='/MaxAdmin' exact component={Admin} />
            <Route path='/Dashboard' exact component={AdminDashboard} />
            <Route path='/AddPost' exact component={ModifyPost} />
          </Content>
        </Router>
        <Footer style={{position: 'absolute', textAlign: 'center', bottom: 0, width: '100%' }}>Created by Maxence Delecourt ©2020 </Footer>
      </Layout>
    </div>
  );
}

export default App;
