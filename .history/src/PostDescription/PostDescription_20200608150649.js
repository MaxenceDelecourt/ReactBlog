import React, { Component } from 'react'
import { getPostBySlug } from '../Api/Api'
import { Space, Spin, Typography, Avatar, Card, Row, Col } from 'antd'

const { Title } = Typography;

class PostDescription extends Component {
    state = {
        title: null,
        content: null,
        author: null,
        avatar: null,
        date: null,
        error: null,
        isLoaded: false
    }

    //requete pour récupérer le post en question 
    async componentDidMount() {

        // on récupére le slug dans l'url pour le passé en paramétre dans le getPostDescription
        const { slug } = this.props.match.params;
        const result = await getPostDescription(slug);
        console.log(result)
        if (result === 'error') {
            this.setState({ isLoaded: true, error: result.items[0] })
        } else {
            this.setState({
                isLoaded: true,
                title: result.items[0].fields.title,
                content: result.items[0].fields.content,
                author: result.items[0].fields.author.fields.fullName,
                avatar: result.items[0].fields.author.fields.avatar.fields.file.url,
                date: result.items[0].fields.publishDate
            })
        }
    }

    render() {
        const { title, content, author, avatar, date, error, isLoaded } = this.state

        if (error) {
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
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={8}>
                            <Avatar size='large' src={avatar} />{author} {date}
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <Title>{title}</Title>
                        </Col>
                    </Row>
                    <br />
                    <Card style={{ borderRadius: '20px' }}>{content}</Card>
                    <br />
                </div>
            );
        }
    }
}

export default PostDescription;