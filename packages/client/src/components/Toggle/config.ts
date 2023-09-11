import { cva } from 'class-variance-authority';

export const toggleConfig = cva(
    [
        'peer grow shrink-0 py-1',
        'rounded-sm border border-border',
        'text-muted-foreground ring-offset-background',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=on]:bg-primary data-[state=on]:text-accent-foreground',
    ],
    {
        variants: {
            variant: {
                default: 'bg-transparent',
                outline:
                    'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
            },
            size: {
                default: 'h-10 px-3',
                sm: 'h-9 px-2.5',
                lg: 'h-11 px-5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);
