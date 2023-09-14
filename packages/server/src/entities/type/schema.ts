const TYPE_SCHEMA = `#graphql
type Type {
    title: String
    value: String
}

type Query {
    types(locale: String): [Type]
}
`;

export default TYPE_SCHEMA;
