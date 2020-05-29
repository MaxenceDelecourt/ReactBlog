
export async function getPost(){
    try{
        const call = await fetch("https://jsonplaceholder.typicode.com/posts")
        const response = await call.json()
        console.log()
        if (call.status >= 200 && call.status < 400) {
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