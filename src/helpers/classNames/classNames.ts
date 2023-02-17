type ModsType = Record<string, string | boolean>

export const classNames = (cls: string, mods: ModsType, additional: string[]): string => (
    [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
)
