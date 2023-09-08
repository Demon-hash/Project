import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {
    type ComponentPropsWithoutRef,
    type ElementRef,
    forwardRef,
} from 'react';

import type { VariantProps } from 'class-variance-authority';

import { cn } from 'utils';

import { checkboxConfig } from './config';

interface CheckboxProperties
    extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
        VariantProps<typeof checkboxConfig> {
    readonly title: string;
}

export const Checkbox = forwardRef<
    ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProperties
>(({ className, title, variant, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            'peer grow shrink-0 py-1 rounded-sm border border-border text-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-accent-foreground',
            className ?? '',
        )}
        {...props}
    >
        <div className="relative flex items-center justify-center">
            {variant?.length && (
                <span className={cn(checkboxConfig({ variant }))}></span>
            )}
            <span>{title}</span>
        </div>
    </CheckboxPrimitive.Root>
));
