import React, {Component} from 'react'
import {getPostDescription} from '../Api/Api'

class PostDescription extends Component {
    state = {
        title: null,
        body: null,
        error: null,
        isLoaded: false
    }

    //requete pour récupérer le post en question 
    async componentDidMount(){

        // on récupére l'id dans l'url pour le passé en paramétre dans le getPostDescription
        const { id } = this.props.match.params;
        const result = await getPostDescription(id);
        if (result === 'error'){
            this.setState({isLoaded: true,error: result})
        }else {
            this.setState({ title: result.title, body: result.body})
        }
    }

    render(){
        const {title, body, error} = this.state
        return(
            <div>{title}</div>
        );
    }

}

export default PostDescription;