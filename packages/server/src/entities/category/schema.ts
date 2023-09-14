const CATEGORY_SCHEMA = `#graphql
type Category {
    title: String
    value: String
}

type Query {
    categories(locale: String): [Category]
}
`;

export default CATEGORY_SCHEMA;
