const LANGUAGE_SCHEMA = `#graphql
    input LanguageInput {
        en: String
        ru: String
    }

    type Language {
        en: String
        ru: String
    }
`;

export default LANGUAGE_SCHEMA;
