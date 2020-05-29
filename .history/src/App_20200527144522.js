import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { Route, Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation'

function App(){
  return(
    <div className='App'>
      <Navigation/>
    </div>
  )
}



export default App;
