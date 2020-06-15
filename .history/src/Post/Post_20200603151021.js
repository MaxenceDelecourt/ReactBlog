import React, { Component } from 'react'
import { Typography, Card, Button, Row, Col, Spin, Space, Pagination, Result } from 'antd';
import { Link } from 'react-router-dom'
import { getListPost } from '../Api/Api'

const { Title } = Typography;
const { Meta } = Card;

class Post extends Component {
  state = {
    error: null,
    isLoaded: false,
    post: [],
    size: 'large',
    currentPage: 1,
    postPerPage: 8
  }

  // requete de récupération des post
  async componentDidMount() {
    const result = await getListPost();
    if (result.items === 'error') {
      this.setState({ isLoaded: true, error: result.items });
    } else {
      this.setState({ isLoaded: true, post: result.items});
    }
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { error, isLoaded, post, size, currentPage, postPerPage } = this.state
    // on met en place la pagination
    const indexOfLastPage = currentPage * postPerPage
    const indexOfFirstPage = indexOfLastPage - postPerPage
    const currentPost = post.slice(indexOfFirstPage, indexOfLastPage)

    //changer la page 
    const paginate = page => this.setState({ currentPage: page })

    if (error !== null) {
      return <Result status="500" title="500" subTitle="Désolé, nous n'avons pas réussi à chager la liste d'article." 
        extra={
          <Button type="primary"><Link to={'/'}>Retour à l'accueil</Link></Button>
        }/>
    } else if (!isLoaded) {
      return (
        <div>
          <br />
          <Space><Spin size="large" /></Space>
        </div>
      );
    } else {
      return (
        <div className="site-layout-content">
          <Title level={2}>Bienvenue sur la page d'article</Title>
          <br />
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {currentPost.map(currentPost => (
              <Col className="gutter-row" span={6}>
                <Card style={{ width: 240 }} cover={<img alt="example" src='' key={currentPost.sys.id} />}>
                  <Meta title={currentPost.fields.title} description={currentPost.fields.content} />
                  <br />
                  <Button type="primary" shape="round" size={size}>
                    <Link to={'/PostDescription/' + currentPost.sys.id}>Accéder à l'article</Link>
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
          <br />
          <Pagination defaultCurrent={1} pageSize={postPerPage} total={post.length} onChange={paginate} />
        </div>
      );
    }
  }
}


export default Post;