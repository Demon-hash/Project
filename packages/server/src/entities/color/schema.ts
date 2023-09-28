const COLOR_SCHEMA = `#graphql
type Color {
    title: String
    value: String
}

input ColorInput {
    title: String
    value: String
}

input ColorsFilter {
    locale: String!
}

type Query {
    colors(locale: String): [Color]
}
`;

export default COLOR_SCHEMA;
