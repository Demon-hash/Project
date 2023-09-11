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

export type AddProductInput = {
    color: Array<ProductColor>;
    count: Scalars['Int']['input'];
    material: Array<ProductMaterial>;
    price: Scalars['Int']['input'];
    size: Array<ProductSize>;
    title: LanguageInput;
};

export type Language = {
    __typename?: 'Language';
    en?: Maybe<Scalars['String']['output']>;
    ru?: Maybe<Scalars['String']['output']>;
};

export type LanguageInput = {
    en?: InputMaybe<Scalars['String']['input']>;
    ru?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    addProduct?: Maybe<Product>;
};

export type MutationAddProductArgs = {
    product: AddProductInput;
};

export type Product = {
    __typename?: 'Product';
    color?: Maybe<Array<ProductColor>>;
    count?: Maybe<Scalars['Int']['output']>;
    material?: Maybe<Array<ProductMaterial>>;
    price?: Maybe<Scalars['Int']['output']>;
    size?: Maybe<Array<ProductSize>>;
    title?: Maybe<Language>;
};

export enum ProductColor {
    Black = 'black',
    Blue = 'blue',
    Gray = 'gray',
    Green = 'green',
    Orange = 'orange',
    Pink = 'pink',
    Purple = 'purple',
    Red = 'red',
    Sky = 'sky',
    Violet = 'violet',
    White = 'white',
    Yellow = 'yellow',
}

export enum ProductMaterial {
    Chiffon = 'chiffon',
    Denim = 'denim',
    Leather = 'leather',
    Linen = 'linen',
    Other = 'other',
    Silk = 'silk',
    Synthetic = 'synthetic',
    Wool = 'wool',
}

export enum ProductSize {
    L = 'l',
    M = 'm',
    S = 's',
    Xl = 'xl',
    Xs = 'xs',
    Xxl = 'xxl',
}

export type Query = {
    __typename?: 'Query';
    products?: Maybe<Array<Maybe<Product>>>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
    __typename?: 'Query';
    products?: Array<{
        __typename?: 'Product';
        price?: number | null;
        size?: Array<ProductSize> | null;
        title?: { __typename?: 'Language'; en?: string | null } | null;
    } | null> | null;
};

export const GetProductsDocument = gql`
    query GetProducts {
        products {
            title {
                en
            }
            price
            size
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
