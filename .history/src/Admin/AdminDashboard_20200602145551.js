import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Card } from 'antd'

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
                <Col className="gutter-row" span={12}>
                    <Card hoverable={true} style={{ width: 300 }}>
                        <p>Modifier vos articles</p>
                    </Card>
                </Col>
                <Col className="gutter-row" span={12}>
                    <Card hoverable={true} style={{ width: 300 }}>
                            <p>Gérer vos accés</p>
                    </Card>                
                </Col>
            </Row>
        </div>
    );
}

export default AdminDashboard;
