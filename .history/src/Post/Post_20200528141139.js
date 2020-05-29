import React, {Component} from 'react'
import { Typography, Card, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import {getPost} from '../Api/Api'


const { Title } = Typography;
const { Meta } = Card;

class Post extends Component {
    state = {
      error: null,
      isLoaded: false,
      post: [],
      size: 'large'
    }
    
async componentDidMount() {
    const result = await getPost();
    if (result === 'error'){
      this.setState({isLoaded: true, error: result});
    }else {
      this.setState({isLoaded: true, post: result});
    }
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render(){
    const { error, isLoaded, post, size } = this.state
    console.log(error)
    console.log(post)
    if (error !== null) {
      return <div> Il eu une erreur lors du chargment</div>
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else if(post.length == 0) {
      return (
        <div></div>
      );
    }
  }
}


export default Post;