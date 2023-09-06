import {
    type ComponentPropsWithoutRef,
    type ElementRef,
    forwardRef,
} from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from 'utils';

export const Range = forwardRef<
    ElementRef<typeof SliderPrimitive.Root>,
    ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            'relative flex w-full touch-none select-none items-center',
            className,
        )}
        {...props}
    >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200">
            <SliderPrimitive.Range className="absolute h-full bg-neutral-400" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full shadow-neutral-950 shadow-sm bg-background disabled:pointer-events-none disabled:opacity-50" />
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full shadow-neutral-950 shadow-sm bg-background disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
));
