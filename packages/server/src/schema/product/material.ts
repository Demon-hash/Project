const MATERIAL_SCHEMA = `#graphql
type Material {
    title: Language
    value: String
}

type Query {
    materials: [Material]
}
`;

export default MATERIAL_SCHEMA;
