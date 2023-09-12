const TYPE_SCHEMA = `#graphql
type Type {
    title: Language
    value: String
}

type Query {
    types: [Type]
}
`;

export default TYPE_SCHEMA;
