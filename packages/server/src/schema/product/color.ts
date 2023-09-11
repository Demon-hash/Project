const COLOR_SCHEMA = `#graphql
type Color {
    title: Language
    value: String
}

type Query {
    colors: [Color]
}
`;

export default COLOR_SCHEMA;
