const LOCALIZATION_SCHEMA = `#graphql
type Localization {
    en: String!
    ru: String
}

input LocalizationInput {
    en: String!
    ru: String
}
`;

export default LOCALIZATION_SCHEMA;
