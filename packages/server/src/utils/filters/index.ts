export const id = <E extends string, F extends string | string[]>(
    entity: E,
    filter: F,
) => {
    if (Array.isArray(filter)) {
        const ids: string[] = filter.filter(
            id => typeof id === 'string' && id.trim().length,
        );

        return ids.length === 1 ? entity === ids[0] : ids.includes(entity);
    }

    if (typeof filter === 'string') {
        return filter === String(entity);
    }

    return true;
};

export const text = <E extends string, F extends string>(
    entity: E,
    filter: F,
) => {
    if (typeof filter !== 'string') {
        return true;
    }

    return entity.trim().toLowerCase().includes(filter.trim().toLowerCase());
};

export const locale = <E extends { value: string }[], F extends string[]>(
    entity: E,
    filter: F,
) => {
    if (!Array.isArray(filter) || filter.length < 1) {
        return true;
    }

    return !!entity.some(e => filter.includes(e.value));
};

export const range = <E extends number, F extends number>(
    entity: E,
    filter: F,
) => {
    if (Array.isArray(filter)) {
        const digits: number[] = filter.filter(Number.isFinite);

        if (digits.length === 1) {
            return entity >= digits[0];
        }

        if (filter.length === 2) {
            const normalized = digits.sort((a, b) => a - b);
            return entity >= normalized[0] && entity <= normalized[1];
        }

        return true;
    }

    if (typeof filter === 'number') {
        return entity >= filter;
    }

    return true;
};
