### Code
```ts
import type { FC, ReactNode } from 'react';
import type { Variant } from 'shared/types';
import Sweater from 'assets/sweater.png';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { useFiltersForm } from 'hooks/forms/use-filters-form';
import { ROUTE } from 'constants/routers';
import { config } from './config';

const CONSTANT_NAME = "something";

interface Properties {
    readonly propertyOne: number;
    readonly propertyTwo?: string;
}

export const ComponentName: FC<Properties> = ({ propertyOne, propertyTwo }) => {
    let variableName;
    const [state, setState] = useState(0);
}
```
### Files / Directories
```
file-name-here.ext
ComponentName
```

### Stack
* Vite
* React 18
* React Router v6
* i18next
* shadcn/ui (Radix UI)
* Tailwind
* React Hook Form
* Zod
* Typescript
* ESLint
* Prettier
* Prettier Plugin Sort Imports
* Husky
* GraphQL
