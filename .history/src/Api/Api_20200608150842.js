import config from '../Service/client'

const createClient = {
    client: function () {
        return createClient({
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
            let products = [];
            response.items.forEach(item => {
                let images = [];
                item.fields.image.fr.forEach(img => {
                    images.push(img.fields);
                });
                let categories = [];
                item.fields.categories.fr.forEach(async categ => {
                    let category = await client.getEntry(categ.sys.id);
                    category.fields.id = categ.sys.id;
                    categories.push(category.fields);
                });
                products.push({
                    id: item.sys.id,
                    productName: item.fields.productName.fr,
                    slug: item.fields.slug.fr,
                    productDescription: item.fields.productDescription.fr,
                    image: images,
                    tags: item.fields.tags.fr,
                    categories: categories,
                    price: item.fields.price.fr,
                    sku: item.fields.sku.fr,
                    level: item.fields.level.fr,
                    session: item.fields.session.fr,
                    numberOfParticipants: item.fields.numberOfParticipants.fr
                });
            });
            return products;
        }
    },
    getProductBySlug: function (slug) {
        return this.getProducts({ "fields.slug": slug });
    },
    getProductByCategoryId: function (categoriesId) {
        let query = { "fields.categories.sys.id": categoriesId };
        return this.getProducts(query);
    },
    getProductById: function (productId) {
        let query = { "sys.id": productId };
        return this.getProducts(query);
    },
    getCategoryById: function (categoryId) {
        let query = { "sys.id": categoryId };
        return this.getCategories(query);
    }
};
export default createClient;