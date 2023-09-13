const SORT_SCHEMA = `#graphql
type Sort {
    title: Language
    value: String
}

type Query {
    sort: [Sort]
}
`;

export default SORT_SCHEMA;
