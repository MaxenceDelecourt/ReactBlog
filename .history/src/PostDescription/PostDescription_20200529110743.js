import React, {Component} from 'react'
import {getPostDescription} from '../Api/Api'

class PostDescription extends Component {
    state = {
        title: null,
        body: null
    }

    //requete pour récupérer le post en question 
    async componentDidMount(){

        // on récupére l'id dans l'url pour le passé en paramétre dans le getPostDescription
        const { id } = this.props.match.params.id;
        console.log(id)
        const result = await getPostDescription({id});
        this.setState({ title: result.title, body: result.body})

    }

    render(){
        const {title} = this.state
        return(
            <div>Hello {title}</div>
        );
    }

}

export default PostDescription;