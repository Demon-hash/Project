import { forwardRef, type InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { checkboxConfig } from 'components/CheckboxColor/config';
import { cn } from 'utils';

type CheckboxColorProperties = InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof checkboxConfig>;

export const CheckboxColor = forwardRef<
    HTMLInputElement,
    CheckboxColorProperties
>(({ className, variant, ...props }, ref) => (
    <input
        ref={ref}
        type="checkbox"
        className={cn(checkboxConfig({ variant }))}
        {...props}
    />
));
