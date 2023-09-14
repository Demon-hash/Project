const SIZE_SCHEMA = `#graphql
type Size {
    title: String
    value: String
}

type Query {
    sizes(locale: String): [Size]
}
`;

export default SIZE_SCHEMA;
