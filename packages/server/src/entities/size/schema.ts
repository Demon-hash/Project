const SIZE_SCHEMA = `#graphql
type Size {
    title: Language
    value: String
}

type Query {
    sizes: [Size]
}
`;

export default SIZE_SCHEMA;
