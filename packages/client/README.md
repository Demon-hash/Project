### Code

```tsx
import type { FC, ReactNode } from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Container from 'components/layout/Container';

const CONSTANT_NAME = 'something';

interface Properties {
    readonly initialValue: number;
    readonly children?: ReactNode;
}

const PageLayout: FC<Properties> = ({ initialValue }) => {
    let variableName;
    const [value, setValue] = useState(initialValue);

    return <>
        <Header />
        <Container>
            {value}
        </Container>
        <Footer />
    </>;
}

export default PageLayout;
```
