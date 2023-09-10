import * as TogglePrimitive from '@radix-ui/react-toggle';
import {
    type ComponentPropsWithoutRef,
    type ElementRef,
    forwardRef,
} from 'react';
import type { VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { toggleConfig } from './config';

interface Properties
    extends ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
        VariantProps<typeof toggleConfig> {}

export const Toggle = forwardRef<
    ElementRef<typeof TogglePrimitive.Root>,
    Properties
>(({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
        ref={ref}
        className={twMerge(className ?? '', toggleConfig({ variant, size }))}
        {...props}
    />
));
