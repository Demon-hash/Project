import { GraphQLResolveInfo } from 'graphql';

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

export type Category = {
    __typename?: 'Category';
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs,
> {
    subscribe: SubscriptionSubscribeFn<
        { [key in TKey]: TResult },
        TParent,
        TContext,
        TArgs
    >;
    resolve?: SubscriptionResolveFn<
        TResult,
        { [key in TKey]: TResult },
        TContext,
        TArgs
    >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs,
> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
    TResult,
    TKey extends string,
    TParent = {},
    TContext = {},
    TArgs = {},
> =
    | ((
          ...args: any[]
      ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
    TResult = {},
    TParent = {},
    TContext = {},
    TArgs = {},
> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    Brand: ResolverTypeWrapper<Brand>;
    Category: ResolverTypeWrapper<Category>;
    Color: ResolverTypeWrapper<Color>;
    ColorsFilter: ColorsFilter;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    InputProductsFilter: InputProductsFilter;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Material: ResolverTypeWrapper<Material>;
    Product: ResolverTypeWrapper<Product>;
    Query: ResolverTypeWrapper<{}>;
    Size: ResolverTypeWrapper<Size>;
    Sort: ResolverTypeWrapper<Sort>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    Type: ResolverTypeWrapper<Type>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Boolean: Scalars['Boolean']['output'];
    Brand: Brand;
    Category: Category;
    Color: Color;
    ColorsFilter: ColorsFilter;
    ID: Scalars['ID']['output'];
    InputProductsFilter: InputProductsFilter;
    Int: Scalars['Int']['output'];
    Material: Material;
    Product: Product;
    Query: {};
    Size: Size;
    Sort: Sort;
    String: Scalars['String']['output'];
    Type: Type;
};

export type BrandResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Brand'] = ResolversParentTypes['Brand'],
> = {
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Category'] = ResolversParentTypes['Category'],
> = {
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Color'] = ResolversParentTypes['Color'],
> = {
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MaterialResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Material'] = ResolversParentTypes['Material'],
> = {
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Product'] = ResolversParentTypes['Product'],
> = {
    brand?: Resolver<
        Maybe<Array<ResolversTypes['Brand']>>,
        ParentType,
        ContextType
    >;
    category?: Resolver<
        Maybe<Array<ResolversTypes['Category']>>,
        ParentType,
        ContextType
    >;
    color?: Resolver<
        Maybe<Array<ResolversTypes['Color']>>,
        ParentType,
        ContextType
    >;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    material?: Resolver<
        Maybe<Array<ResolversTypes['Material']>>,
        ParentType,
        ContextType
    >;
    price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    size?: Resolver<
        Maybe<Array<ResolversTypes['Size']>>,
        ParentType,
        ContextType
    >;
    stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<
        Maybe<Array<ResolversTypes['Type']>>,
        ParentType,
        ContextType
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
    brands?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Brand']>>>,
        ParentType,
        ContextType,
        Partial<QueryBrandsArgs>
    >;
    categories?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Category']>>>,
        ParentType,
        ContextType,
        Partial<QueryCategoriesArgs>
    >;
    colors?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Color']>>>,
        ParentType,
        ContextType,
        Partial<QueryColorsArgs>
    >;
    materials?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Material']>>>,
        ParentType,
        ContextType,
        Partial<QueryMaterialsArgs>
    >;
    products?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Product']>>>,
        ParentType,
        ContextType,
        Partial<QueryProductsArgs>
    >;
    sizes?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Size']>>>,
        ParentType,
        ContextType,
        Partial<QuerySizesArgs>
    >;
    sort?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Sort']>>>,
        ParentType,
        ContextType,
        Partial<QuerySortArgs>
    >;
    types?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Type']>>>,
        ParentType,
        ContextType,
        Partial<QueryTypesArgs>
    >;
};

export type SizeResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Size'] = ResolversParentTypes['Size'],
> = {
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SortResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Sort'] = ResolversParentTypes['Sort'],
> = {
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Type'] = ResolversParentTypes['Type'],
> = {
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    Brand?: BrandResolvers<ContextType>;
    Category?: CategoryResolvers<ContextType>;
    Color?: ColorResolvers<ContextType>;
    Material?: MaterialResolvers<ContextType>;
    Product?: ProductResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Size?: SizeResolvers<ContextType>;
    Sort?: SortResolvers<ContextType>;
    Type?: TypeResolvers<ContextType>;
};
