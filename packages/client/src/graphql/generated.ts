import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never;
      };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
};

export type Brand = {
    __typename?: 'Brand';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type BrandInput = {
    title?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type Cart = {
    __typename?: 'Cart';
    id: Scalars['ID']['output'];
    items?: Maybe<Array<Maybe<CartItem>>>;
};

export type CartItem = {
    __typename?: 'CartItem';
    count: Scalars['Int']['output'];
    product: Product;
};

export type CategoriesFilter = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
    __typename?: 'Category';
    imageUrl?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type CategoryInput = {
    imageUrl?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type Color = {
    __typename?: 'Color';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type ColorInput = {
    title?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type ColorsFilter = {
    locale: Scalars['String']['input'];
};

export type InputAddCartProduct = {
    count: Scalars['Int']['input'];
    id: Scalars['ID']['input'];
};

export type InputCartsFilter = {
    id?: InputMaybe<Scalars['ID']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};

export type InputProductsFilter = {
    brand?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    category?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    color?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    id?: InputMaybe<Scalars['ID']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    material?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    price?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    stock?: InputMaybe<Scalars['Int']['input']>;
    type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Localization = {
    __typename?: 'Localization';
    en: Scalars['String']['output'];
    ru?: Maybe<Scalars['String']['output']>;
};

export type LocalizationInput = {
    en: Scalars['String']['input'];
    ru?: InputMaybe<Scalars['String']['input']>;
};

export type Material = {
    __typename?: 'Material';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type MaterialInput = {
    title?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    addProductsInCart?: Maybe<Cart>;
};

export type MutationAddProductsInCartArgs = {
    id?: InputMaybe<Scalars['ID']['input']>;
    products: Array<InputMaybe<InputAddCartProduct>>;
};

export type Product = {
    __typename?: 'Product';
    brand?: Maybe<Array<Brand>>;
    category?: Maybe<Array<Category>>;
    color?: Maybe<Array<Color>>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    imageUrl: Scalars['String']['output'];
    material?: Maybe<Array<Material>>;
    price: Scalars['Int']['output'];
    size?: Maybe<Array<Size>>;
    stock: Scalars['Int']['output'];
    title?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Array<Type>>;
};

export type Query = {
    __typename?: 'Query';
    brands?: Maybe<Array<Maybe<Brand>>>;
    carts?: Maybe<Array<Maybe<Cart>>>;
    categories?: Maybe<Array<Maybe<Category>>>;
    colors?: Maybe<Array<Maybe<Color>>>;
    materials?: Maybe<Array<Maybe<Material>>>;
    products?: Maybe<Array<Maybe<Product>>>;
    sizes?: Maybe<Array<Maybe<Size>>>;
    sort?: Maybe<Array<Maybe<Sort>>>;
    types?: Maybe<Array<Maybe<Type>>>;
};

export type QueryBrandsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCartsArgs = {
    filter?: InputMaybe<InputCartsFilter>;
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCategoriesArgs = {
    filter?: InputMaybe<CategoriesFilter>;
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type QueryColorsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type QueryMaterialsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type QueryProductsArgs = {
    filter?: InputMaybe<InputProductsFilter>;
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySizesArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySortArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTypesArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type Size = {
    __typename?: 'Size';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type SizeInput = {
    title?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type Sort = {
    __typename?: 'Sort';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type SortInput = {
    title?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type Type = {
    __typename?: 'Type';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type TypeInput = {
    title?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type AddItemInCartMutationVariables = Exact<{
    id?: InputMaybe<Scalars['ID']['input']>;
    products:
        | Array<InputMaybe<InputAddCartProduct>>
        | InputMaybe<InputAddCartProduct>;
}>;

export type AddItemInCartMutation = {
    __typename?: 'Mutation';
    addProductsInCart?: { __typename?: 'Cart'; id: string } | null;
};

export type GetCartProductsCountQueryVariables = Exact<{
    locale?: InputMaybe<Scalars['String']['input']>;
    filter?: InputMaybe<InputCartsFilter>;
}>;

export type GetCartProductsCountQuery = {
    __typename?: 'Query';
    carts?: Array<{
        __typename?: 'Cart';
        items?: Array<{ __typename?: 'CartItem'; count: number } | null> | null;
    } | null> | null;
};

export type GetCartQueryVariables = Exact<{
    locale?: InputMaybe<Scalars['String']['input']>;
    filter?: InputMaybe<InputCartsFilter>;
}>;

export type GetCartQuery = {
    __typename?: 'Query';
    carts?: Array<{
        __typename?: 'Cart';
        id: string;
        items?: Array<{
            __typename?: 'CartItem';
            count: number;
            product: {
                __typename?: 'Product';
                id: string;
                title?: string | null;
                description?: string | null;
                stock: number;
                price: number;
                imageUrl: string;
                brand?: Array<{
                    __typename?: 'Brand';
                    title?: string | null;
                }> | null;
                size?: Array<{
                    __typename?: 'Size';
                    value?: string | null;
                }> | null;
                type?: Array<{
                    __typename?: 'Type';
                    value?: string | null;
                }> | null;
                color?: Array<{
                    __typename?: 'Color';
                    title?: string | null;
                }> | null;
                category?: Array<{
                    __typename?: 'Category';
                    title?: string | null;
                }> | null;
                material?: Array<{
                    __typename?: 'Material';
                    title?: string | null;
                }> | null;
            };
        } | null> | null;
    } | null> | null;
};

export type GetHomepageDataQueryVariables = Exact<{
    locale?: InputMaybe<Scalars['String']['input']>;
    categories?: InputMaybe<CategoriesFilter>;
    products?: InputMaybe<InputProductsFilter>;
}>;

export type GetHomepageDataQuery = {
    __typename?: 'Query';
    categories?: Array<{
        __typename?: 'Category';
        title?: string | null;
        imageUrl?: string | null;
        value?: string | null;
    } | null> | null;
    products?: Array<{
        __typename?: 'Product';
        id: string;
        title?: string | null;
        description?: string | null;
        imageUrl: string;
        color?: Array<{
            __typename?: 'Color';
            title?: string | null;
            value?: string | null;
        }> | null;
        size?: Array<{
            __typename?: 'Size';
            title?: string | null;
            value?: string | null;
        }> | null;
    } | null> | null;
};

export type GetProductDataQueryVariables = Exact<{
    locale?: InputMaybe<Scalars['String']['input']>;
    products?: InputMaybe<InputProductsFilter>;
}>;

export type GetProductDataQuery = {
    __typename?: 'Query';
    products?: Array<{
        __typename?: 'Product';
        id: string;
        title?: string | null;
        description?: string | null;
        imageUrl: string;
        price: number;
        stock: number;
        color?: Array<{
            __typename?: 'Color';
            title?: string | null;
            value?: string | null;
        }> | null;
        size?: Array<{
            __typename?: 'Size';
            title?: string | null;
            value?: string | null;
        }> | null;
        material?: Array<{
            __typename?: 'Material';
            title?: string | null;
            value?: string | null;
        }> | null;
        brand?: Array<{
            __typename?: 'Brand';
            title?: string | null;
            value?: string | null;
        }> | null;
        type?: Array<{
            __typename?: 'Type';
            title?: string | null;
            value?: string | null;
        }> | null;
    } | null> | null;
};

export type GetProductsQueryVariables = Exact<{
    locale?: InputMaybe<Scalars['String']['input']>;
    filter?: InputMaybe<InputProductsFilter>;
}>;

export type GetProductsQuery = {
    __typename?: 'Query';
    products?: Array<{
        __typename?: 'Product';
        id: string;
        imageUrl: string;
        stock: number;
        price: number;
        title?: string | null;
        description?: string | null;
        color?: Array<{ __typename?: 'Color'; value?: string | null }> | null;
    } | null> | null;
};

export type GetShopFiltersQueryVariables = Exact<{
    locale?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetShopFiltersQuery = {
    __typename?: 'Query';
    brands?: Array<{
        __typename?: 'Brand';
        title?: string | null;
        value?: string | null;
    } | null> | null;
    categories?: Array<{
        __typename?: 'Category';
        title?: string | null;
        value?: string | null;
    } | null> | null;
    colors?: Array<{
        __typename?: 'Color';
        title?: string | null;
        value?: string | null;
    } | null> | null;
    materials?: Array<{
        __typename?: 'Material';
        title?: string | null;
        value?: string | null;
    } | null> | null;
    sizes?: Array<{
        __typename?: 'Size';
        title?: string | null;
        value?: string | null;
    } | null> | null;
    types?: Array<{
        __typename?: 'Type';
        title?: string | null;
        value?: string | null;
    } | null> | null;
    sort?: Array<{
        __typename?: 'Sort';
        title?: string | null;
        value?: string | null;
    } | null> | null;
};

export const AddItemInCartDocument = gql`
    mutation AddItemInCart($id: ID, $products: [InputAddCartProduct]!) {
        addProductsInCart(id: $id, products: $products) {
            id
        }
    }
`;
export type AddItemInCartMutationFn = Apollo.MutationFunction<
    AddItemInCartMutation,
    AddItemInCartMutationVariables
>;

/**
 * __useAddItemInCartMutation__
 *
 * To run a mutation, you first call `useAddItemInCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemInCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemInCartMutation, { data, loading, error }] = useAddItemInCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *      products: // value for 'products'
 *   },
 * });
 */
export function useAddItemInCartMutation(
    baseOptions?: Apollo.MutationHookOptions<
        AddItemInCartMutation,
        AddItemInCartMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        AddItemInCartMutation,
        AddItemInCartMutationVariables
    >(AddItemInCartDocument, options);
}
export type AddItemInCartMutationHookResult = ReturnType<
    typeof useAddItemInCartMutation
>;
export type AddItemInCartMutationResult =
    Apollo.MutationResult<AddItemInCartMutation>;
export type AddItemInCartMutationOptions = Apollo.BaseMutationOptions<
    AddItemInCartMutation,
    AddItemInCartMutationVariables
>;
export const GetCartProductsCountDocument = gql`
    query GetCartProductsCount($locale: String, $filter: InputCartsFilter) {
        carts(locale: $locale, filter: $filter) {
            items {
                count
            }
        }
    }
`;

/**
 * __useGetCartProductsCountQuery__
 *
 * To run a query within a React component, call `useGetCartProductsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartProductsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartProductsCountQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCartProductsCountQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetCartProductsCountQuery,
        GetCartProductsCountQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        GetCartProductsCountQuery,
        GetCartProductsCountQueryVariables
    >(GetCartProductsCountDocument, options);
}
export function useGetCartProductsCountLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetCartProductsCountQuery,
        GetCartProductsCountQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetCartProductsCountQuery,
        GetCartProductsCountQueryVariables
    >(GetCartProductsCountDocument, options);
}
export type GetCartProductsCountQueryHookResult = ReturnType<
    typeof useGetCartProductsCountQuery
>;
export type GetCartProductsCountLazyQueryHookResult = ReturnType<
    typeof useGetCartProductsCountLazyQuery
>;
export type GetCartProductsCountQueryResult = Apollo.QueryResult<
    GetCartProductsCountQuery,
    GetCartProductsCountQueryVariables
>;
export function refetchGetCartProductsCountQuery(
    variables?: GetCartProductsCountQueryVariables,
) {
    return { query: GetCartProductsCountDocument, variables: variables };
}
export const GetCartDocument = gql`
    query GetCart($locale: String, $filter: InputCartsFilter) {
        carts(locale: $locale, filter: $filter) {
            id
            items {
                product {
                    id
                    title
                    description
                    stock
                    price
                    imageUrl
                    brand {
                        title
                    }
                    size {
                        value
                    }
                    type {
                        value
                    }
                    color {
                        title
                    }
                    category {
                        title
                    }
                    material {
                        title
                    }
                }
                count
            }
        }
    }
`;

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCartQuery(
    baseOptions?: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(
        GetCartDocument,
        options,
    );
}
export function useGetCartLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetCartQuery,
        GetCartQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(
        GetCartDocument,
        options,
    );
}
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export type GetCartQueryResult = Apollo.QueryResult<
    GetCartQuery,
    GetCartQueryVariables
>;
export function refetchGetCartQuery(variables?: GetCartQueryVariables) {
    return { query: GetCartDocument, variables: variables };
}
export const GetHomepageDataDocument = gql`
    query getHomepageData(
        $locale: String
        $categories: CategoriesFilter
        $products: InputProductsFilter
    ) {
        categories(locale: $locale, filter: $categories) {
            title
            imageUrl
            value
        }
        products(locale: $locale, filter: $products) {
            id
            title
            description
            imageUrl
            color {
                title
                value
            }
            size {
                title
                value
            }
        }
    }
`;

/**
 * __useGetHomepageDataQuery__
 *
 * To run a query within a React component, call `useGetHomepageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomepageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomepageDataQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      categories: // value for 'categories'
 *      products: // value for 'products'
 *   },
 * });
 */
export function useGetHomepageDataQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetHomepageDataQuery,
        GetHomepageDataQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetHomepageDataQuery, GetHomepageDataQueryVariables>(
        GetHomepageDataDocument,
        options,
    );
}
export function useGetHomepageDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetHomepageDataQuery,
        GetHomepageDataQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetHomepageDataQuery,
        GetHomepageDataQueryVariables
    >(GetHomepageDataDocument, options);
}
export type GetHomepageDataQueryHookResult = ReturnType<
    typeof useGetHomepageDataQuery
>;
export type GetHomepageDataLazyQueryHookResult = ReturnType<
    typeof useGetHomepageDataLazyQuery
>;
export type GetHomepageDataQueryResult = Apollo.QueryResult<
    GetHomepageDataQuery,
    GetHomepageDataQueryVariables
>;
export function refetchGetHomepageDataQuery(
    variables?: GetHomepageDataQueryVariables,
) {
    return { query: GetHomepageDataDocument, variables: variables };
}
export const GetProductDataDocument = gql`
    query GetProductData($locale: String, $products: InputProductsFilter) {
        products(locale: $locale, filter: $products) {
            id
            title
            description
            imageUrl
            price
            stock
            color {
                title
                value
            }
            size {
                title
                value
            }
            material {
                title
                value
            }
            brand {
                title
                value
            }
            type {
                title
                value
            }
        }
    }
`;

/**
 * __useGetProductDataQuery__
 *
 * To run a query within a React component, call `useGetProductDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDataQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      products: // value for 'products'
 *   },
 * });
 */
export function useGetProductDataQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetProductDataQuery,
        GetProductDataQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProductDataQuery, GetProductDataQueryVariables>(
        GetProductDataDocument,
        options,
    );
}
export function useGetProductDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetProductDataQuery,
        GetProductDataQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetProductDataQuery,
        GetProductDataQueryVariables
    >(GetProductDataDocument, options);
}
export type GetProductDataQueryHookResult = ReturnType<
    typeof useGetProductDataQuery
>;
export type GetProductDataLazyQueryHookResult = ReturnType<
    typeof useGetProductDataLazyQuery
>;
export type GetProductDataQueryResult = Apollo.QueryResult<
    GetProductDataQuery,
    GetProductDataQueryVariables
>;
export function refetchGetProductDataQuery(
    variables?: GetProductDataQueryVariables,
) {
    return { query: GetProductDataDocument, variables: variables };
}
export const GetProductsDocument = gql`
    query getProducts($locale: String, $filter: InputProductsFilter) {
        products(locale: $locale, filter: $filter) {
            id
            imageUrl
            stock
            price
            title
            description
            color {
                value
            }
        }
    }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetProductsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetProductsQuery,
        GetProductsQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(
        GetProductsDocument,
        options,
    );
}
export function useGetProductsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetProductsQuery,
        GetProductsQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
        GetProductsDocument,
        options,
    );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
    typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
    GetProductsQuery,
    GetProductsQueryVariables
>;
export function refetchGetProductsQuery(variables?: GetProductsQueryVariables) {
    return { query: GetProductsDocument, variables: variables };
}
export const GetShopFiltersDocument = gql`
    query getShopFilters($locale: String) {
        brands(locale: $locale) {
            title
            value
        }
        categories(locale: $locale) {
            title
            value
        }
        colors(locale: $locale) {
            title
            value
        }
        materials(locale: $locale) {
            title
            value
        }
        sizes(locale: $locale) {
            title
            value
        }
        types(locale: $locale) {
            title
            value
        }
        sort(locale: $locale) {
            title
            value
        }
    }
`;

/**
 * __useGetShopFiltersQuery__
 *
 * To run a query within a React component, call `useGetShopFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopFiltersQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetShopFiltersQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetShopFiltersQuery,
        GetShopFiltersQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetShopFiltersQuery, GetShopFiltersQueryVariables>(
        GetShopFiltersDocument,
        options,
    );
}
export function useGetShopFiltersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetShopFiltersQuery,
        GetShopFiltersQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetShopFiltersQuery,
        GetShopFiltersQueryVariables
    >(GetShopFiltersDocument, options);
}
export type GetShopFiltersQueryHookResult = ReturnType<
    typeof useGetShopFiltersQuery
>;
export type GetShopFiltersLazyQueryHookResult = ReturnType<
    typeof useGetShopFiltersLazyQuery
>;
export type GetShopFiltersQueryResult = Apollo.QueryResult<
    GetShopFiltersQuery,
    GetShopFiltersQueryVariables
>;
export function refetchGetShopFiltersQuery(
    variables?: GetShopFiltersQueryVariables,
) {
    return { query: GetShopFiltersDocument, variables: variables };
}
