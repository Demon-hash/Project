### Code

```ts
import type { Resolvers } from 'generated';
import * as mocked from 'entities';
import Filter from 'filter';

export const resolvers: Resolvers = {
    Query: {
        products(_, { filter, locale }) {
            return new Filter(mocked.products, filter, locale)
                .byId('id')
                .byLocale('title')
                .byRange('price')
                .byCount('stock')
                .byField('color')
                .byField('size')
                .byField('type')
                .byField('material')
                .byField('category')
                .byField('brand')
                .withPagination()
                .get();
        }
    },
};
```

Initially, all entities have an object for several translations, but the return value must always be a string

Look at the return type after using ```.getByLocale('title')``` the result will be normalized to the locale that will come from the frontend

```graphql
query getProducts($locale: String, $filter: InputProductsFilter) {
  products(locale: $locale, filter: $filter) {
    id
    imageUrl
    stock
    price
    title # Will be returned as normalized translated field
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
