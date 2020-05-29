
componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({isLoaded: true, post: result});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }