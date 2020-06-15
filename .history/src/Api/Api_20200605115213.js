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
        var entry = new Entry<dynamic>();
        entry.SystemProperties = new SystemProperties();
        entry.SystemProperties.Id = "Accessories";
        
        entry.Fields = new
        {
            Title = new Dictionary<string, string>()
            {
                { "en-US", "Accessories" },
                { "sv-SE", "Tillbehör"}
            },
            Icon = new Dictionary<string, string>()
            {
                { "en-US", "Icon" }
            },
            Description = new Dictionary<string, int>()
            {
                { "en-US", "Small items to make you life or home complete." },
                { "sv-SE", "Små saker för att göra ditt liv eller hem komplett." }
            }
        };
        
        var newEntry = await _client.CreateOrUpdateEntry(entry, contentTypeId: "<category_content_type_id>");

    } catch (err) {
        return 'error'
    }
}




// import momnModule from monSsrevice


// momnModule.mafonction