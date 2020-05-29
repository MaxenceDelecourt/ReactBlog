import React, {Component} from 'react'
import { Typography, Card, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom'


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
        <div className="site-layout-content">
            <Title level={2}>Bienvenue sur la page d'article</Title>
            <br/>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {post.map(post => (
                <Col className="gutter-row" span={6}>
                  <Card style={{ width: 240 }} cover={<img alt="example" src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' key={post.id} />}>
                    <Meta title={post.title} description={post.body} />
                    <br/>
                    <Button type="primary" shape="round" size={size}>
                        <Link to={'/DescriptionPost/'+ post.id}>Accéder à l'article</Link>
                    </Button>
                  </Card>
                </Col>
            ))}
            </Row>
          </div>
      );
    }
  }
}


export default Post;