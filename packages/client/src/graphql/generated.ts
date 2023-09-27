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

export type Color = {
    __typename?: 'Color';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type ColorsFilter = {
    locale: Scalars['String']['input'];
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

export type Material = {
    __typename?: 'Material';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
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

export type Sort = {
    __typename?: 'Sort';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};

export type Type = {
    __typename?: 'Type';
    title?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
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
