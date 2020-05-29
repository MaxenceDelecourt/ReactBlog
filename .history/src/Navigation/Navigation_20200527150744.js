import React from 'react'
import { Menu } from 'antd';


function Navigation (){
    return(
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Accueil</Menu.Item>
                <Menu.Item key="2">Articles</Menu.Item>
            </Menu>
        </div>
    );
        
}

export default Navigation;