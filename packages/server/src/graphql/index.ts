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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
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

export type BrandInput = {
    title?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};

export type Cart = {
    __typename?: 'Cart';
    id: Scalars['ID']['output'];
    products?: Maybe<Array<Maybe<CartItem>>>;
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
    id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
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
    addCartProducts?: Maybe<Scalars['ID']['output']>;
};

export type MutationAddCartProductsArgs = {
    id: Scalars['ID']['input'];
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
    BrandInput: BrandInput;
    Cart: ResolverTypeWrapper<Cart>;
    CartItem: ResolverTypeWrapper<CartItem>;
    CategoriesFilter: CategoriesFilter;
    Category: ResolverTypeWrapper<Category>;
    CategoryInput: CategoryInput;
    Color: ResolverTypeWrapper<Color>;
    ColorInput: ColorInput;
    ColorsFilter: ColorsFilter;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    InputAddCartProduct: InputAddCartProduct;
    InputCartsFilter: InputCartsFilter;
    InputProductsFilter: InputProductsFilter;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Localization: ResolverTypeWrapper<Localization>;
    LocalizationInput: LocalizationInput;
    Material: ResolverTypeWrapper<Material>;
    MaterialInput: MaterialInput;
    Mutation: ResolverTypeWrapper<{}>;
    Product: ResolverTypeWrapper<Product>;
    Query: ResolverTypeWrapper<{}>;
    Size: ResolverTypeWrapper<Size>;
    SizeInput: SizeInput;
    Sort: ResolverTypeWrapper<Sort>;
    SortInput: SortInput;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    Type: ResolverTypeWrapper<Type>;
    TypeInput: TypeInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Boolean: Scalars['Boolean']['output'];
    Brand: Brand;
    BrandInput: BrandInput;
    Cart: Cart;
    CartItem: CartItem;
    CategoriesFilter: CategoriesFilter;
    Category: Category;
    CategoryInput: CategoryInput;
    Color: Color;
    ColorInput: ColorInput;
    ColorsFilter: ColorsFilter;
    ID: Scalars['ID']['output'];
    InputAddCartProduct: InputAddCartProduct;
    InputCartsFilter: InputCartsFilter;
    InputProductsFilter: InputProductsFilter;
    Int: Scalars['Int']['output'];
    Localization: Localization;
    LocalizationInput: LocalizationInput;
    Material: Material;
    MaterialInput: MaterialInput;
    Mutation: {};
    Product: Product;
    Query: {};
    Size: Size;
    SizeInput: SizeInput;
    Sort: Sort;
    SortInput: SortInput;
    String: Scalars['String']['output'];
    Type: Type;
    TypeInput: TypeInput;
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

export type CartResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Cart'] = ResolversParentTypes['Cart'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    products?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['CartItem']>>>,
        ParentType,
        ContextType
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem'],
> = {
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Category'] = ResolversParentTypes['Category'],
> = {
    imageUrl?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
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

export type LocalizationResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Localization'] = ResolversParentTypes['Localization'],
> = {
    en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    ru?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type MutationResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
    addCartProducts?: Resolver<
        Maybe<ResolversTypes['ID']>,
        ParentType,
        ContextType,
        RequireFields<MutationAddCartProductsArgs, 'id' | 'products'>
    >;
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
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
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
    carts?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['Cart']>>>,
        ParentType,
        ContextType,
        Partial<QueryCartsArgs>
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
    Cart?: CartResolvers<ContextType>;
    CartItem?: CartItemResolvers<ContextType>;
    Category?: CategoryResolvers<ContextType>;
    Color?: ColorResolvers<ContextType>;
    Localization?: LocalizationResolvers<ContextType>;
    Material?: MaterialResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Product?: ProductResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Size?: SizeResolvers<ContextType>;
    Sort?: SortResolvers<ContextType>;
    Type?: TypeResolvers<ContextType>;
};
