### Code

```ts
import type { Resolvers } from 'generated';
import * as mutation from 'mutations';
import * as query from 'queries';

export const resolvers: Resolvers = {
    Query: {
        products: (_, { filter, locale }) => query.products(filter, locale),
        categories: (_, { filter, locale }) => query.categories(filter, locale),
        carts: (_, { filter, locale }) => query.carts(filter, locale),
        brands: (_, { locale }) => query.brands(undefined, locale),
        colors: (_, { locale }) => query.colors(undefined, locale),
        sizes: (_, { locale }) => query.sizes(undefined, locale),
        materials: (_, { locale }) => query.materials(undefined, locale),
        types: (_, { locale }) => query.types(undefined, locale),
        sort: (_, { locale }) => query.sort(undefined, locale),
    },
    Mutation: {
        addCartProducts: (_, { id, products }) =>
            mutation.addCartProducts(id, products),
    },
};
```
