import BRAND_SCHEMA from './brand/schema';
import CATEGORY_SCHEMA from './category/schema';
import COLOR_SCHEMA from './color/schema';
import MATERIAL_SCHEMA from './material/schema';
import PRODUCT_SCHEMA from './product/schema';
import SIZE_SCHEMA from './size/schema';
import SORT_SCHEMA from './sort/schema';
import TYPE_SCHEMA from './type/schema';

const files = [
    COLOR_SCHEMA,
    CATEGORY_SCHEMA,
    MATERIAL_SCHEMA,
    SIZE_SCHEMA,
    BRAND_SCHEMA,
    TYPE_SCHEMA,
    SORT_SCHEMA,
    PRODUCT_SCHEMA,
];

export const schema = files.join(' ');
