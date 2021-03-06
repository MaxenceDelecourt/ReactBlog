
export async function getPost(){
    try{
        const call = await fetch("https://jsonplaceholder.typicode.com/posts/")
        if (call.status >= 200 && call.status < 400) {
            const response = await call.json()
            return response
        }
        return 'error'
    }catch (err) {
        return 'error'
    }
}

export async function getPostDescription(id){
    try{
        const call = await fetch("https://jsonplaceholder.typicode.com/posts/"+id)
        if (call.status >= 200 && call.status < 400) {
            const response = await call.json()
            return response
        }
        return 'error'
    }catch (err) {
        return 'error'
    }

}

export async function getPostInsta()