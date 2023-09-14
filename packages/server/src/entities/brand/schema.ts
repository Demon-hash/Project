const BRAND_SCHEMA = `#graphql
type Brand {
    title: String
    value: String
}

type Query {
    brands(locale: String): [Brand]
}
`;

export default BRAND_SCHEMA;
