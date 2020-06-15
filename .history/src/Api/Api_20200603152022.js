const contentful = require('contentful');

const client = contentful.createClient({
    space: '8oamdugxcf33',
    accessToken: 'QTB5Fba2Hf6nPPr_nexT4yp1HbT9Kh68YMhzN9FMqDQ'
})

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