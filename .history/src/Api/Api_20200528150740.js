
export async function getPost(){
    try{
        const call = await fetch("https://jsonplaceholder.typicode.com/posts")
        const response = await call.json()
        console.log(response)
        if (response.status >= 200 && response.status < 400) {
            return response
        }
        return 'error'
    }catch (err) {
        return 'error'
    }
}

export function getPostDescription(id){
    fetch("https://jsonplaceholder.typicode.com/posts/"+id)

}