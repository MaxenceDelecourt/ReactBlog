import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

const { Meta } = Card;

const Card = ({card}) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="" />}
    >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
)

export default Card