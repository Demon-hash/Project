import { cva } from 'class-variance-authority';

export const checkboxConfig = cva('peer w-6 h-6 rounded-full', {
    variants: {
        variant: {
            red: 'bg-red-500 accent-red-500 focus:accent-red-500',
            green: 'bg-green-500 accent-green-500 focus:accent-green-500 text-gray-50',
        },
    },
    defaultVariants: {
        variant: 'red',
    },
});
