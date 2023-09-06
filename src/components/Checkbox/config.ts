import { cva } from 'class-variance-authority';

export const checkboxConfig = cva('mr-2 rounded w-4 h-4', {
    variants: {
        variant: {
            red: 'bg-red-600',
            orange: 'bg-orange-600',
            yellow: 'bg-yellow-600',
            green: 'bg-green-600',
            sky: 'bg-sky-600',
            blue: 'bg-blue-600',
            violet: 'bg-violet-600',
            purple: 'bg-purple-600',
            pink: 'bg-pink-600',
            white: 'bg-gray-300',
            gray: 'bg-gray-600',
            black: 'bg-neutral-950',
        },
    },
    defaultVariants: {
        variant: 'red',
    },
});
