const BRAND_SCHEMA = `#graphql
type Brand {
    title: Language
    value: String
}

type Query {
    brands: [Brand]
}
`;

export default BRAND_SCHEMA;
