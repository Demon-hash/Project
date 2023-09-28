const MATERIAL_SCHEMA = `#graphql
type Material {
    title: String
    value: String
}

input MaterialInput {
    title: String
    value: String
}

type Query {
    materials(locale: String): [Material]
}
`;

export default MATERIAL_SCHEMA;
