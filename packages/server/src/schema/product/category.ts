const CATEGORY_SCHEMA = `#graphql
type Category {
    title: Language
    value: String
}

type Query {
    categories: [Category]
}
`;

export default CATEGORY_SCHEMA;
