import client from './client/client'
export async function getListPost() {
    try {
        const response = client.getEntries({ content_type: 'post' })
        return response
    } catch (err) {
        return 'error'
    }

}

export async function getPostDescription(id) {
    try {
        const response = client.getEntries({ content_type: 'post' })
        return response
    } catch (err) {
        return 'error'
    }

}