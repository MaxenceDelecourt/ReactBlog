import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';


function Navigation (){
    return(
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to='/'>Accueil</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/Post'>Articles</Link><FileTextOutlined /></Menu.Item>
            </Menu>
        </div>
    );
        
}

export default Navigation;