import React, { Component } from 'react'
import getPostDescription from '../Api/Api'


class PostDescription extends component {
    componentDidMount(){
        const { id } = this.props.match.params
        await getPost();
        
    }
    render(){

    }

}

export default PostDescription;