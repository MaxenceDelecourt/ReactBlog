import React, { Component } from 'react'
import { getPostDescription } from '../Api/Api'
import {Space, Spin } from 'antd'

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
        const { title, body, error, isLoaded } = this.state

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
                    
                </div>
            );
        }
    }
}

export default PostDescription;