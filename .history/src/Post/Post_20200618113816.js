import React, { Component } from 'react'
import { Typography, Card, Button, Row, Col, Spin, Space, Pagination, Result, Modal, AutoComplete, Input, Empty, Alert, Table } from 'antd';
import { FormOutlined, ExclamationCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { createClient } from '../Api/Api'
import ModifyPost from '../Admin/ModifyPost'

const { Column, ColumnGroup } = Table;
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
    options: []
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

  // Modal de supression d'article et de modification
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

  // recherche d'article via le champs de recherche
  getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }

  handleSearch = value => {
    this.setState({ options: value } ? this.searchResult(value) : []);
  };

  onSelect = value => {
    console.log('onSelect', value);
  };

  searchResult = query =>
    new Array(this.getRandomInt(5))
      .join('.')
      .split('.')
      .map((item, idx) => {
        const category = `${query}${idx}`;
        return {
          value: category,
          label: (
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
              <span>
                Found {query} on{' '}
                <a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
                  {category}
                </a>
              </span>
              <span>{this.getRandomInt(200, 100)} results</span>
            </div>
          ),
        };
      });

  render() {
    const { error, isLoaded, post, size, currentPage, postPerPage, visible, visible2, confirmLoading, ModalText, options } = this.state

    // on met en place la pagination
    const indexOfLastPage = currentPage * postPerPage
    const indexOfFirstPage = indexOfLastPage - postPerPage

    if (post) {
      const currentPost = post.slice(indexOfFirstPage, indexOfLastPage)

      //changer la page 
      const paginate = page => this.setState({ currentPage: page })

      // si il y'a une erreur coté serveur on affiche une 500
      if (error !== null) {
        return <Result status="500" title="500" subTitle="Désolé, nous n'avons pas réussi à chager la liste d'article."
          extra={
            <Button type="primary"><Link to={'/'}>Retour à l'accueil</Link></Button>
          } />
        // loadcircle le temps de chargement de la liste d'article
      } else if (!isLoaded) {
        return (
          <div>
            <br />
            <Space><Spin size="large" /></Space>
          </div>
        );
        // On affiche la liste d'article quand il y a du contenue  
      } else {
        // on définis les columns du tableau avec sa data
        const dataSource = currentPost

        const columns = [
          {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Accéder a l\'article',
            dataIndex: '',
            key: 'x',
            render: (record) => {
              return <Button type="primary" shape="round" size={size}>
                <Link to={'/PostDescription/' + record.slug}>Accéder à l'article</Link>
              </Button>
            }

          },
          {
            title: 'date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (record) =>
              <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Button type="primary" shape="round" size={size} danger onClick={() => this.showModal('1')}>
                  <DeleteOutlined />
                </Button>
                <Modal visible={visible} onOk={() => this.handleOk(record.id)} confirmLoading={confirmLoading} cancelText='annuler' onCancel={() => this.handleCancel('1')}>
                  <ExclamationCircleOutlined size={size} />
                  <p>{ModalText}</p>
                </Modal>
                <Col span={12}>
                <Button style={{ backgroundColor: '#52c41a', color: 'white' }} shape="round" size={size} onClick={() => this.showModal('2')}>
                  <EditOutlined />
                </Button>
                <Modal visible={visible2} onOk={() => this.handleOk(record.id)} confirmLoading={confirmLoading} cancelText='annuler' onCancel={() => this.handleCancel('2')}>
                  <ModifyPost title={record.title} description={record.description} slug={record.slug} content={record.content} date={record.date} />
                </Modal>
                </Col>
                </Row>
              </div>
          },
        ]
        return (
          <div className="site-layout-content">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                <Title level={2}>Bienvenue sur la gestion de vos articles</Title>
              </Col>
              <Col className="gutter-row" span={4}>
                <AutoComplete dropdownMatchSelectWidth={252} style={{ width: 300, }} options={options} onSelect={this.onSelect} onSearch={this.handleSearch}>
                  <Input.Search size="large" placeholder="input here" enterButton />
                </AutoComplete>
              </Col>
              <Col className="gutter-row" span={8}>
                <Button type="primary" sucess shape="round" size={size}>
                  <Link to={'/AddPost'}><FormOutlined /> Créer un nouvel article</Link>
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Table dataSource={dataSource} columns={columns} pagination={false} />
            <br />
            <br />
            <Pagination defaultCurrent={1} pageSize={postPerPage} total={post.length} onChange={paginate} />
          </div>

        );
      }
      // On affiche un message comme quoi il n'y a pas d'article et on met le bouton de création d'article
    } else {
      return (
        <div>
          <Alert message="Hello" description="il n'y a pas d'artilce ici." type="info" />
          <br />
          <br />
          <Empty description='' />
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