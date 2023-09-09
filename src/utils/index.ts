export const formatNumberAsMoney = (amount: number): string => {
    const instance = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return instance.format(amount);
};
