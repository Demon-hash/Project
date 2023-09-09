import { type ChangeEvent, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from 'components/Button';
import { Input } from 'components/Input';

interface Properties {
    readonly amount?: number;
    readonly className?: string;
    readonly min?: number;
    readonly max?: number;
}

export const Counter = forwardRef<HTMLDivElement, Properties>(
    ({ className, amount, min, max }, ref) => {
        const [count, setCount] = useState(amount ?? 1);

        const increment = () => {
            setCount(prev => Math.min(prev + 1, max ?? Infinity));
        };

        const decrement = () => {
            setCount(prev => Math.max(prev - 1, min ?? -Infinity));
        };

        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            const number = parseInt(event.target.value, 10);

            if (isNaN(number)) {
                setCount(min ?? 1);
                return;
            }

            setCount(
                Math.min(Math.max(min ?? -Infinity, number), max ?? Infinity),
            );
        };

        return (
            <div
                className={twMerge(
                    'flex items-center justify-center',
                    className ?? '',
                )}
                ref={ref}
            >
                <Button type="button" onClick={decrement}>
                    -
                </Button>
                <Input
                    type="text"
                    className="text-center"
                    value={count}
                    onChange={onChange}
                />
                <Button type="button" onClick={increment}>
                    +
                </Button>
            </div>
        );
    },
);
