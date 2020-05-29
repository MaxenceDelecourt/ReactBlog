import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { Layout } from 'antd'

const { Header, Footer, Content}

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
