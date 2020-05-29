import React, {Component} from 'react'
import {getPostDescription} from '../Api/Api'

class PostDescription extends component {
    //requete pour récupérer le post en question 
    async componentDidMount(){

        // on récupére l'id dans l'url pour le passé en paramétre dans le getPostDescription
        const { id } = this.props.match.params.id
        const result = await getPostDescription(id);
    }

    render(){
        return(
            <div>Hello {result.title}</div>
        );
    }

}

export default PostDescription;