import LANGUAGE_SCHEMA from './language';
import PRODUCT_SCHEMA from './product';
import MATERIAL_SCHEMA from './product/material';
import SIZE_SCHEMA from './product/size';
import BRAND_SCHEMA from './product/brand';
import COLOR_SCHEMA from './product/color';
import CATEGORY_SCHEMA from './product/category';
import TYPE_SCHEMA from './product/type';

const files = [
    COLOR_SCHEMA,
    CATEGORY_SCHEMA,
    MATERIAL_SCHEMA,
    SIZE_SCHEMA,
    BRAND_SCHEMA,
    TYPE_SCHEMA,
    LANGUAGE_SCHEMA,
    PRODUCT_SCHEMA,
];

export const schema = files.join(' ');
