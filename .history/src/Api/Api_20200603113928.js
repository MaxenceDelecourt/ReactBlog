const contentful = require('contentful')

const client = contentful.createClient()({
    space: '8oamdugxcf33',
    accessToken: 'QTB5Fba2Hf6nPPr_nexT4yp1HbT9Kh68YMhzN9FMqDQ'
})

export async function getPost() {
    try {
        const call = client.getEntries({ content_type: 'post' })
        if (call.status >= 200 && call.status < 400) {
            const response = await call.json()
            return response
        } return 'error'
    } catch (err) {
        return 'error'
    }

}

export async function getPostDescription(id) {
    try {
        const call = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        if (call.status >= 200 && call.status < 400) {
            const response = await call.json()
            return response
        }
        return 'error'
    } catch (err) {
        return 'error'
    }

}