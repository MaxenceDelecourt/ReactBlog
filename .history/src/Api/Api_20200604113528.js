import client from '../Service/client'

// Récupérer la liste des post
export async function getListPost() {
    try {
        const response = client.getEntries({ content_type: 'post' })
        return response
    } catch (err) {
        return 'error'
    }

}

// Récupérer les infos du post selectionné
export async function getPostDescription(slug) {
    try {
        const response = client.getEntries({ content_type: 'post', 'fields.slug': slug})
        return response
    } catch (err) {
        return 'error'
    }

}

// Publier un post
export async function PostArticle(){
    try{
        const result = client.post()
    }catch(err){
        return 'error'
    }
}