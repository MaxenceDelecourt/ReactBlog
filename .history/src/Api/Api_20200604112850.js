import client from '../Service/client'

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