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
        const response = client.getEntries({ content_type: 'post', 'fields.slug': slug })
        return response
    } catch (err) {
        return 'error'
    }

}

// Publier un post
export const POST_ARTICLE = async (values) => {
    try {
        const content = await client.getContentType('post')
        content.fields[0] = values.title
        content.fields[1] = values.description 
        content.fields[2] = values.slug
        content.fields[3] = values.content
        content.fields[4] = values.
        content.fields[5] =
        content.fields[6] =
        // .then((contentType) => {
        //     contentType.title = values.title
        //     contentType.update()
        //     .then((updatedContentType) => {
        //         console.log('Update was successful')
            // })
        // })
    } catch (err) {
        return 'error'
    }
}




// import momnModule from monSsrevice


// momnModule.mafonction