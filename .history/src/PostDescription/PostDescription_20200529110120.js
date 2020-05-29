import React, {Component} from 'react'
import {getPostDescription} from '../Api/Api'

class PostDescription extends Component {
    //requete pour récupérer le post en question 
    async componentDidMount(){

        // on récupére l'id dans l'url pour le passé en paramétre dans le getPostDescription
        console.log(this.props.match.params.id)

        const { id } = this.props.match.params.id;
        const result = await getPostDescription(id);
    }

    render(){
        console.log('hello')
        return(
            <div>Hello</div>
        );
    }

}

export default PostDescription;