### Code

```ts
import type { Resolvers } from 'generated';
import * as mutation from 'mutations';
import * as query from 'queries';

export const resolvers: Resolvers = {
    Query: {
        products: (_, { filter, locale }) => query.products(filter, locale),
        categories: (_, { filter, locale }) => query.categories(filter, locale),
        brands: (_, { locale }) => query.brands(undefined, locale),
        colors: (_, { locale }) => query.colors(undefined, locale),
        sizes: (_, { locale }) => query.sizes(undefined, locale),
        materials: (_, { locale }) => query.materials(undefined, locale),
        types: (_, { locale }) => query.types(undefined, locale),
        sort: (_, { locale }) => query.sort(undefined, locale),
        carts: (_, { filter, locale }) => query.carts(filter, locale),
    },
    Mutation: {
        addCartProducts: (_, { id, products }) =>
            mutation.addCartProducts(id, products),
    },
};
```

Initially, all entities have an object for several translations, but the return value must always be a string

Look at the return type after using ```.getByLocale('title')``` the result will be normalized to the locale that will come from the frontend

```graphql
query GetProducts($locale: String, $filter: InputProductsFilter) {
  products(locale: $locale, filter: $filter) {
    id
    imageUrl
    stock
    price
    title                       # Will be returned as normalized translated field (SHALLOW NESTING)
    material {
      value
    }
    size {
      value
    }
    color {
      value
    }
    category {
      value
    }
    type {
      value
    }
  }
}
```
Where variables are:

```json
{
  "locale": "en",
  "filter": {
    "price": [300, 1000],
    "size": ["xl"]
  }
}
```
