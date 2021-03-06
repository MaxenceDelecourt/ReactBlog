import React, {Component} from 'react'
import {getPostDescription} from '../Api/Api'

class PostDescription extends Component {
    //requete pour récupérer le post en question 
    async componentDidMount(){

        // on récupére l'id dans l'url pour le passé en paramétre dans le getPostDescription
        const { id } = this.props.match.params.id;
        console.log(id)
        const result = await getPostDescription(id);
        console.log(result)
    }

    render(){
        return(
            <div>Hello {this.result.title}</div>
        );
    }

}

export default PostDescription;