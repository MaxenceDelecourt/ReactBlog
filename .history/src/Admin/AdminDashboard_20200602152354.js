import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Card } from 'antd'
import { UserOutlined, EditOutlined } from '@ant-design/icons';

function AdminDashboard() {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12} offset={6}>
                    Bienvenue sur votre Dashboard
                </Col>
            </Row>
            <br/>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6} offset={6}>
                    <Card hoverable={true} style={{backgroundColor:'#1890ff', width: 300 }}>
                        <EditOutlined style={{ fontSize: '30px'}}/>
                        <p>Modifier vos articles</p>
                    </Card>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Card hoverable={true} style={{backgroundColor:'#389e0d' , width: 300 }}>
                    <UserOutlined style={{ fontSize: '30px'}}/>
                    <p>Gérer vos accés</p>
                    </Card>                
                </Col>
            </Row>
        </div>
    );
}

export default AdminDashboard;
