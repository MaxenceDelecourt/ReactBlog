import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd'

function AdminDashboard(){
    return(
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12} offset={6}>
                    Bienvenue sur votre Dashboard
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    Accéder aux articles
                </Col>
            </Row>
        </div>
    );
}

export default AdminDashboard;
