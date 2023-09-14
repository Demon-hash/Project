const SORT_SCHEMA = `#graphql
type Sort {
    title: String
    value: String
}

type Query {
    sort(locale: String): [Sort]
}
`;

export default SORT_SCHEMA;
