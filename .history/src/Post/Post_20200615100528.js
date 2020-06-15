import React, { Component } from 'react'
import { Typography, Card, Button, Row, Col, Spin, Space, Pagination, Result, Modal } from 'antd';
import { FormOutlined, ExclamationCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
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
    visible2: false,
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

  showModal = (id) => {
    if (id === '1') {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible2: true,
      });
    }

  };

  async handleOk(id) {
    this.setState({
      ModalText: 'Votre articles est en train d\'etre suprimé',
      confirmLoading: true,
    });
    await createClient.deletePost(id)
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
    const result = await createClient.getPosts()
    if (result === 'error') {
      this.setState({ isLoaded: true, error: result });
    } else {
      this.setState({ isLoaded: true, post: result });
    }
  };

  handleCancel = (id) => {
    if (id === '1') {
      this.setState({
        visible: false,
      });
    } else {
      this.setState({
        visible2: false,
      });
    }

  };

  render() {
    const { error, isLoaded, post, size, currentPage, postPerPage, visible, visible2, confirmLoading, ModalText } = this.state

    // on met en place la pagination
    const indexOfLastPage = currentPage * postPerPage
    const indexOfFirstPage = indexOfLastPage - postPerPage

    if (post) {
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
                    <Col span={12}>
                      <Button type="primary" shape="round" size={size} danger onClick={() => this.showModal('1')}>
                        <DeleteOutlined />
                      </Button>
                      <Modal visible={visible} onOk={() => this.handleOk(currentPost.id)} confirmLoading={confirmLoading} cancelText='annuler' onCancel={() => this.handleCancel('1')}>
                        <ExclamationCircleOutlined size={size} />
                        <p>{ModalText}</p>
                      </Modal>
                    </Col>
                    <Col span={12}>

                    <Button style={{ backgroundColor: '#52c41a', color: 'white' }} shape="round" size={size} onClick={() => this.showModal('2')}>
                      <EditOutlined />
                    </Button>
                    <Modal visible={visible2} onOk={() => this.handleOk(currentPost.id)} confirmLoading={confirmLoading} cancelText='annuler' onCancel={() => this.handleCancel('2')}>
                      <p>Formulaire</p>
                    </Modal>
                  </Card>
                </Col>
              ))}
            </Row>
            <br />
            <Pagination defaultCurrent={1} pageSize={postPerPage} total={post.length} onChange={paginate} />
          </div>
        );
      }
    } else {
      return (
        <div>
          hello il n'y a pas d'article ici
          <br />
          <br />
          <Button type="primary" sucess shape="round" size={size}>
            <Link to={'/AddPost'}><FormOutlined /> Créer un article</Link>
          </Button>
        </div>
      )
    }
  }
}


export default Post;