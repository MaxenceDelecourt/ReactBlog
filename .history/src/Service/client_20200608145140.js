import {createClient} from 'contentful-management'

const client = createClient({
    accessToken: 'CFPAT-1fRlt1rTn6tCfwTItz5il3MzPEsKVv5FB35cMNzlLIg'
})

import * as contentful from "contentful-management";

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: "1fRlt1rTn6tCfwTItz5il3MzPEsKVv5FB35cMNzlLIg"
};

export default client