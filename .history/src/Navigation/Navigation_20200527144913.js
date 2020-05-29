import React from 'react'
import { Menu } from 'antd';
import DescriptionPost from './DescriptionPost/DescriptionPost'
import Accueil from './Accueil/Accueil'

const { Header, Footer, Content } = Layout;

function Navigation (){
    return(
        <div className="logo" />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Accueil</Menu.Item>
        <Menu.Item key="2">Articles</Menu.Item>
        </Menu>
    );
        
}

export default Navigation;