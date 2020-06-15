import React, { Component } from 'react'
import { Typography, Card, Button, Row, Col, Spin, Space, Pagination, Result, Modal } from 'antd';
import { FormOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { createClient } from '../Api/Api'

const { Title } = Typography;
const { Meta } = Card;

class Post extends Component {
  state = {
    error: null,
    isLoaded: false,
    post: [],
    size: 'large',
    currentPage: 1,
    postPerPage: 8,
    ModalText: 'êtes vous sur de vouloir suprimer cette article',
    visible: false,
    confirmLoading: false,
  }

  // requete de récupération des post
  async componentDidMount() {
    const result = await createClient.getPosts()
    if (result === 'error') {
      this.setState({ isLoaded: true, error: result });
    } else {
      this.setState({ isLoaded: true, post: result });
    }
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

   async handleOk(id) {
    this.setState({
      ModalText: 'Votre articles est en train d\'etre suprimé',
      confirmLoading: true,
    });
    createClient.deletePost(id)
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { error, isLoaded, post, size, currentPage, postPerPage, visible, confirmLoading, ModalText } = this.state

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
        } />
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
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} offset={4}>
              <Title level={2}>Bienvenue sur la gestion de vos articles</Title>
            </Col>
            <Col className="gutter-row" span={8}>
              <Button type="primary" sucess shape="round" size={size}>
                <Link to={'/AddPost'}><FormOutlined /> Créer un nouvel article</Link>
              </Button>
            </Col>
          </Row>
          <br />
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {currentPost.map(currentPost => (
              <Col className="gutter-row" span={6}>
                <Card style={{ width: 240 }} cover={<img key={currentPost.id} />}>
                  <Meta title={currentPost.title} description={currentPost.description} />
                  <br />
                  <Button type="primary" shape="round" size={size}>
                    <Link to={'/PostDescription/' + currentPost.slug}>Accéder à l'article</Link>
                  </Button>
                  <br />
                  <br />
                  <div>
                    <Button type="primary" shape="round" size={size} danger onClick={this.showModal}>
                      suprimer l'article
                    </Button>
                    <Modal visible={visible}  onOk={() => this.handleOk(currentPost.id)} confirmLoading={confirmLoading} cancelText='annuler' onCancel={this.handleCancel}>
                    <ExclamationCircleOutlined size={size} danger/>
                    <p>{ModalText}</p>
                    </Modal>
                  </div>
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