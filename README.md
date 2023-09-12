![market](https://github.com/Demon-hash/Project/assets/61636183/32583c3d-5223-4b78-8f30-3604b4e87fcb)

# Web Shop
The website was made using the [React library](https://react.dev/). The goal of the project is to gain experience working with different and current web technologies in 2023

Backend made using [GraphQL](https://graphql.org/) to optimize returned data

In addition, it is planned in advance that there is the possibility of changing the theme and language

There is a separate README for the client and server parts, which shows the convention for naming files / directories as well as code style

### Architecture
___
```
project/
└── packages/
    ├── client/
    │   ├── public
    │   └── src/
    │       ├── assets
    │       ├── components
    │       ├── constants
    │       ├── graphql/
    │       │   ├── queries/
    │       │   │   └── get-products.graphql
    │       │   ├── mutations/
    │       │   │   └── update-products.graphql
    │       │   └── generated.ts
    │       ├── hooks/
    │       │   └── forms/
    │       │       └── use-shop-filters.ts
    │       ├── locale
    │       ├── shared
    │       ├── utils
    │       └── zod-schemas
    └── server/
        └── src/
            ├── entities/
            │   ├── brand/
            │   │   ├── index.ts
            │   │   └── schema.ts
            │   ├── color/
            │   │   ├── index.ts
            │   │   └── schema.ts
            │   ├── index.ts
            │   └── schema.ts
            ├── graphql/
            │   └── index.ts
            └── resolvers/
                └── index.ts
```
