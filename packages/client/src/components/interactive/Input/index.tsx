import { type InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            className={twMerge(
                'flex h-10 w-full rounded-md bg-background',
                'px-3 py-2 text-sm ring-offset-background',
                'file:border-0 file:bg-transparent file:text-sm file:font-medium',
                'placeholder:text-muted-foreground',
                'focus-visible:outline-none',
                'disabled:cursor-not-allowed disabled:opacity-50',
                className ?? '',
            )}
            {...props}
        />
    );
});

export default Input;
