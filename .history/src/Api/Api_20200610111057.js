import * as contentful from "contentful-management";

const config = {
    space: '8oamdugxcf33',
    accessToken: "CFPAT-BUJz-C_nFxKdWW5WJHg3oO_XombKLt-7vz6ttoW74gY"
};

export const createClient = {
    client: function () {
        return contentful.createClient({
            accessToken: config.accessToken
        });
    },
    getPosts: async function (filter = {}) {
        let client = await this.client().getSpace(config.space);
        let query = {
            content_type: 'post'
        };
        const response = await client.getEntries(
            Object.keys(filter).length === 0 ? query : Object.assign(query, filter)
        );
        if (response.items.length > 0) {
            let posts = [];
            response.items.forEach(item => {
                console.log(item.fields)
                posts.push({
                    id: item.sys.id,
                    // author: item.fields.author.sys,
                    title: item.fields.title['en-US'],
                    description: item.fields.description['en-US'],
                    slug: item.fields.slug['en-US'],
                    content: item.fields.content['en-US'],
                    date: item.fields.publishDate['en-US']
                });
            });
            return posts;
        }
    },
    //récupération des infos d'un post via le slug
    getPostBySlug: function (slug) {
        return this.getPosts({ "fields.slug": slug });
    },
    //Récupération des autheur
    getAuthor: async function (filter = {}) {
        let client = await this.client().getSpace(config.space);
        let query = {
            content_type: 'author'
        };
        const response = await client.getEntries(
            Object.keys(filter).length === 0 ? query : Object.assign(query, filter)
        )
        if (response.items.length > 0) {
            let author = [];
            response.items.forEach(item => {
                author.push({
                    name: item.fields.fullName['en-US']
                });
            });
            return author;
        }
    },
    getAuthor: function ('2o7mU5i1RKxWl6ISkIrYKF')

    //poster un nouvel article
    postArticle: function (values) {
        // Create entry
        this.client().getSpace(config.space)
            .then((space) => space.createEntry('post', {
                fields: {
                    title: {
                        'en-US': values.title
                    },
                    slug: {
                        'en-US': values.slug
                    },
                    description: {
                        'en-US': values.description
                    },
                    content: {
                        'en-US': values.content
                    },
                    author: {
                        'en-US': values.author
                    },
                    publishDate: {
                        'en-US': values.date
                    }

                }
            }))
            .then((entry) => console.log(entry))
            .catch(console.error)
    }
};