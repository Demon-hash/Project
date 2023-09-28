const CATEGORY_SCHEMA = `#graphql
type Category {
    title: String
    value: String
    imageUrl: String
}

input CategoryInput {
    title: String
    value: String
    imageUrl: String
}

input CategoriesFilter {
    offset: Int
    limit: Int
}


type Query {
    categories(locale: String, filter: CategoriesFilter): [Category]
}
`;

export default CATEGORY_SCHEMA;
