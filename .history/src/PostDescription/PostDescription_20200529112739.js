import React, { Component } from 'react'
import { getPostDescription } from '../Api/Api'

class PostDescription extends Component {
    state = {
        title: null,
        body: null,
        error: null,
        isLoaded: false
    }

    //requete pour récupérer le post en question 
    async componentDidMount() {

        // on récupére l'id dans l'url pour le passé en paramétre dans le getPostDescription
        const { id } = this.props.match.params;
        const result = await getPostDescription(id);
        if (result === 'error') {
            this.setState({ isLoaded: true, error: result })
        } else {
            this.setState({ isLoaded: true, title: result.title, body: result.body })
        }
    }

    render() {
        const { title, body, error } = this.state

        if (error !== null) {
            return <div>Erreur 500</div>
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
                                <Card style={{ width: 240 }} cover={<img alt="example" src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' key={post.id} />}>
                                    <Meta title={currentPost.title} description={currentPost.body} />
                                    <br />
                                    <Button type="primary" shape="round" size={size}>
                                        <Link to={'/PostDescription/' + currentPost.id}>Accéder à l'article</Link>
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

export default PostDescription;