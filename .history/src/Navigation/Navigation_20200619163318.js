import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { FileTextOutlined, HomeOutlined } from '@ant-design/icons';


const Navigation = () =>{
    return(
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1"><HomeOutlined /><Link to='/'>Accueil</Link></Menu.Item>
                <Menu.Item key="2"><FileTextOutlined /><Link to='/Post'>Articles</Link></Menu.Item>
            </Menu>
        </div>
    );
        
}

export default Navigation;