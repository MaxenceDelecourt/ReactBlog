import React from 'react'

const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

class Post extends Component {
    state = {
      error: null,
      isLoaded: false,
      post: [],
      size: 'large'
    }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        // si il trouve un resultat il set le restult 
        (result) => {
          this.setState({isLoaded: true, post: result});
        },
        // sinon il retourne un message d'erreur
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render(){
    const { error, isLoaded, post, size } = this.state
    if (error) {
      return <div> Erreur : {error.message}</div>
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className="App">
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Accueil</Menu.Item>
              <Menu.Item key="2">Articles</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <div className="site-layout-content">
                <Title level={2}>Mon blog </Title>
                <br/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {post.map(post => (
                    <Col className="gutter-row" span={6}>
                      <Card style={{ width: 240 }} cover={<img alt="example" src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' key={post.id} />}>
                        <Meta title={post.title} description={post.body} />
                        <br/>
                        <Button type="primary" shape="round" size={size}>
                          {/*Routage avec des paramétre typé*/}
                          <Link to={'/Post/' + post.id}>Accéder a l'article</Link>
                        </Button>
                      </Card>
                    </Col>
                ))}
                </Row>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </div>
      );
    }
  }
}


export default Post;