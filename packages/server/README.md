### Code

```ts
import type { Resolvers } from 'generated';
import { products } from 'entities';
import { Filter } from 'filter';

export const resolvers: Resolvers = {
    Query: {
        products(_, { filter }) {
            return new Filter(products, filter)
                .byId('id')
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
