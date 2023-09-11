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
    title?: Maybe<Language>;
    value?: Maybe<Scalars['String']['output']>;
};

export type Category = {
    __typename?: 'Category';
    title?: Maybe<Language>;
    value?: Maybe<Scalars['String']['output']>;
};

export type Color = {
    __typename?: 'Color';
    title?: Maybe<Language>;
    value?: Maybe<Scalars['String']['output']>;
};

export type Language = {
    __typename?: 'Language';
    en?: Maybe<Scalars['String']['output']>;
    ru?: Maybe<Scalars['String']['output']>;
};

export type Material = {
    __typename?: 'Material';
    title?: Maybe<Language>;
    value?: Maybe<Scalars['String']['output']>;
};

export type Product = {
    __typename?: 'Product';
    brand?: Maybe<Array<Brand>>;
    category?: Maybe<Array<Category>>;
    color?: Maybe<Array<Color>>;
    id: Scalars['ID']['output'];
    imageUrl: Scalars['String']['output'];
    material?: Maybe<Array<Material>>;
    price: Scalars['Int']['output'];
    size?: Maybe<Array<Size>>;
    stock: Scalars['Int']['output'];
    title: Language;
    type?: Maybe<Array<Type>>;
};

export type Query = {
    __typename?: 'Query';
    products?: Maybe<Array<Maybe<Product>>>;
};

export type Size = {
    __typename?: 'Size';
    title?: Maybe<Language>;
    value?: Maybe<Scalars['String']['output']>;
};

export type Type = {
    __typename?: 'Type';
    title?: Maybe<Language>;
    value?: Maybe<Scalars['String']['output']>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
    __typename?: 'Query';
    products?: Array<{
        __typename?: 'Product';
        id: string;
        imageUrl: string;
        stock: number;
        price: number;
        title: { __typename?: 'Language'; en?: string | null };
    } | null> | null;
};

export const GetProductsDocument = gql`
    query getProducts {
        products {
            id
            imageUrl
            stock
            price
            title {
                en
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
