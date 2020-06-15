import client from '../Service/client'

// Récupérer la liste des post
export async function getListPost() {
    try {
        const cli = await client.getSpace('8oamdugxcf33')
            const response = cli.getEntries({ content_type: 'post' })
        return response
    } catch (err) {
        console.log(err)
        return 'error'
    }

}

// Récupérer les infos du post selectionné
export async function getPostDescription(slug) {
    try {
        const response = client.getEntries({ content_type: 'post', 'fields.slug': slug })
        return response
    } catch (err) {
        return 'error'
    }

}

// Publier un post
export const POST_ARTICLE = async (values) => {
    try {
        const content = await client.getEntry
        console.log(content)

        client.PublishEntry('')

    } catch (err) {
        return 'error'
    }
}




// import momnModule from monSsrevice


// momnModule.mafonction