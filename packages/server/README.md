### Code
```ts
import type { Color } from 'generated';
import { schema } from 'schema';
import { resolvers } from 'resolvers';

export const colors: Color[] = [
    COLOR('Red', 'red'),
    COLOR('Orange', 'orange'),
    COLOR('Yellow', 'yellow'),
    COLOR('Green', 'green'),
    COLOR('Sky', 'sky'),
    COLOR('Blue', 'blue'),
    COLOR('Violet', 'violet'),
    COLOR('Purple', 'purple'),
    COLOR('Pink', 'pink'),
    COLOR('White', 'white'),
    COLOR('Gray', 'gray'),
    COLOR('Black', 'black'),
];
```

It is assumed that the user can add more than one language, so: 
* The first argument is the title in English *(fallback language)*
* And the second is the actual value that will be passed to the filter for searching

The types are generated automatically through the code gen, so there is no need to write them manually

Also client side will generate all the types and hooks that come from the backend schema after start up

