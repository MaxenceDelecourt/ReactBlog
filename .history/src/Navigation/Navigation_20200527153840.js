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

                    <Menu.Item key="1"><Link to='/Post'>Accueil                </Link></Menu.Item>

            </Menu>
        </div>
    );
        
}

export default Navigation;