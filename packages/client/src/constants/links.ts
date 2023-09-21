export const PARAMS = {
    categories: ':category',
    product: ':productId',
} as const;

export const LINKS = {
    HOME: '/',
    CART: '/cart',
    CATEGORIES: `/categories/${PARAMS.categories}`,
    PRODUCT: `/product/${PARAMS.product}`,
    AUTH: '/auth',
    LOGIN: '/auth/login',
} as const;
