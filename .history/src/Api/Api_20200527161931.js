
export function getPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(
    // si il trouve un resultat il set le restult 
    (result) => {
        return result;
    },
    // sinon il retourne un message d'erreur
    (error) => {
        this.setState({
        isLoaded: true,
        error
        });
    }
    )
}

export function getPostDescription(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(
    // si il trouve un resultat il set le restult 
    (result) => {
        this.setState({isLoaded: true, post: result});
    },
    // sinon il retourne un message d'erreur
    (error) => {
        this.setState({
        isLoaded: true,
        error
        });
    }
    )
}