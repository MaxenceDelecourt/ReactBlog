import React, { Component } from 'react'
import { getPostDescription } from '../Api/Api'
import {Space, Spin } from 'antd'

class PostDescription extends Component {
    state = {
        title: null,
        content: null,
        error: null,
        isLoaded: false
    }

    //requete pour récupérer le post en question 
    async componentDidMount() {

        // on récupére le slug dans l'url pour le passé en paramétre dans le getPostDescription
        const { slug } = this.props.match.params;
        const result = await getPostDescription(slug);
        console.log(result.items)
        if (result === 'error') {
            this.setState({ isLoaded: true, error: result.items[0] })
        } else {
            this.setState({ isLoaded: true, title: result.items[0].fields.title, content: result.items.fields.content })
        }
    }

    render() {
        const { title, content, error, isLoaded } = this.state

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
                    <div>{title}</div>
                    <br/>
                    <div>{content}</div>
                </div>
            );
        }
    }
}

export default PostDescription;