import * as TabsPrimitive from '@radix-ui/react-tabs';
import {
    type ComponentPropsWithoutRef,
    type ElementRef,
    forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

const TabsList = forwardRef<
    ElementRef<typeof TabsPrimitive.List>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={twMerge(
            'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
            className,
        )}
        {...props}
    />
));

export default TabsList;
