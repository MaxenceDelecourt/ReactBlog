import * as contentful from "contentful-management";

const config = {
  space:'8oamdugxcf33',
  accessToken: "CFPAT-BUJz-C_nFxKdWW5WJHg3oO_XombKLt-7vz6ttoW74gY"
};

const createClient = {
  client: function() {
    return contentful.createClient({
      accessToken: config.accessToken
    });
  },
  getPosts: async function(filter = {}) {
    let client = await this.client().getSpace(config.space);
    let query = {
      content_type: process.env.CTF_PRODUCT_TYPE_ID
    };
    const response = await client.getEntries(
      Object.keys(filter).length === 0 ? query : Object.assign(query, filter)
    );
    if (response.items.length > 0) {
      let posts = [];
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
        posts.push({
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
  getCategories: async function(filter = {}) {
    let client = await this.client().getSpace("bgctb5elpo33");
    let query = {
      content_type: process.env.CTF_CATEGORY_TYPE_ID
    };
    const response = await client.getEntries(
      Object.keys(filter).length === 0 ? query : Object.assign(query, filter)
    );
    if (response.items.length > 0) {
      let category = [];
      response.items.forEach(item => {
        category.push({
          id: item.sys.id,
          title: item.fields.title.fr,
          icon: item.fields.icon.fields.fr,
          categoryDescription: item.fields.categoryDescription.fr
        });
      });
      return category;
    }
  },
  getPostBySlug: function(slug) {
    return this.getPosts({ "fields.slug": slug });
  },
};

export default createClient;