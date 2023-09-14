### Code
```tsx
import type { FC, ReactNode } from 'react';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { useShopFiltersForm } from 'hooks/forms/use-shop-filters-form';
import { config } from './config';

const CONSTANT_NAME = 'something';

interface Properties {
    readonly initialValue: number;
    readonly children?: ReactNode;
}

const PageLayout: FC<Properties> = ({ initialValue, children }) => {
    let variableName;
    const [value, setValue] = useState(initialValue);
    
    return <>
        <header></header>>
        <main>{children}</main>>
        <footer></footer>
    </>;
}

export default PageLayout;
```
