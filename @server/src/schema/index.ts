import LANGUAGE_SCHEMA from './language';
import PRODUCT_SCHEMA from './product';

const files = [
    LANGUAGE_SCHEMA,
    PRODUCT_SCHEMA,
];

export const schema = files.join(' ');
