import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

const { Meta } = Card;

const Card = ({}) => {
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="" />}
    >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
}

export default Card