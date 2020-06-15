import * as contentful from "contentful-management";

const config = {
  space:'8oamdugxcf33',
  accessToken: "CFPAT-BUJz-C_nFxKdWW5WJHg3oO_XombKLt-7vz6ttoW74gY"
};

export const createClient = {
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
        posts.push({
          id: item.sys.id,
          title: item.fields.productName.fr,
          slug: item.fields.slug.fr,
          description: item.fields.productDescription.fr,
          image: images,
        });
      });
      return posts;
    }
  },
  getPostBySlug: function(slug) {
    return this.getPosts({ "fields.slug": slug });
  },
};