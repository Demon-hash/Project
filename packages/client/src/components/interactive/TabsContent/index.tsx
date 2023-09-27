import * as TabsPrimitive from '@radix-ui/react-tabs';
import {
    type ComponentPropsWithoutRef,
    type ElementRef,
    forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

const TabsContent = forwardRef<
    ElementRef<typeof TabsPrimitive.Content>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={twMerge(
            'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            className,
        )}
        {...props}
    />
));

export default TabsContent;
