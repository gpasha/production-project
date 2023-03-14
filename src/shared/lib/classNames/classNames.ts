type ModsType = Record<string, string | boolean>

export const classNames = (cls: string, mods: ModsType = {}, additional: string[] = []): string => (
    [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
)
