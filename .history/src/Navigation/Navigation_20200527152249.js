import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'


function Navigation (){
    return(
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Link to='/'>
                    <Menu.Item key="1">Accueil</Menu.Item>
                </Link>
                <Link to='/Post'>
                    <Menu.Item key="2">Articles</Menu.Item>
                </Link>
            </Menu>
        </div>
    );
        
}

export default Navigation;