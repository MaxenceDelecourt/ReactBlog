import React, {Component} from 'react'
import { Typography, Card, Button, Row, Col, Spin, Space, Pagination } from 'antd';
import { Link } from 'react-router-dom'
import {getPost} from '../Api/Api'


const { Title } = Typography;
const { Meta } = Card;

class Post extends Component {
    state = {
      error: null,
      isLoaded: false,
      post: [],
      size: 'large',
      currentPage: 1,
      postPerPage: 10
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
    const { error, isLoaded, post, size, currentPage, postPerPage } = this.state
    const indexOfLastPage = currentPage * postPerPage
    const indexOfFirstPage = currentPage - postPerPage
    const currentPost = post.slice(indexOfFirstPage, indexOfLastPage)

    console.log(post.slice(indexOfFirstPage))

    if (error !== null) {
      return <div> Erreur 500</div>
    } else if (!isLoaded) {
      return (
        <Space><Spin size="large" /></Space>
      );
    } else {
      return (
        <div className="site-layout-content">
            <Title level={2}>Bienvenue sur la page d'article</Title>
            <br/>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {currentPost.map(currentPost => (
                <Col className="gutter-row" span={6}>
                  <Card style={{ width: 240 }} cover={<img alt="example" src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' key={post.id} />}>
                    <Meta title={currentPost.title} description={currentPost.body} />
                    <br/>
                    <Button type="primary" shape="round" size={size}>
                        <Link to={'/DescriptionPost/'+ currentPost.id}>Accéder à l'article</Link>
                    </Button>
                  </Card>
                </Col>
            ))}
            </Row>
            <Pagination defaultCurrent={1} pageSize={10} total={post.length} />
          </div>
      );
    }
  }
}


export default Post;