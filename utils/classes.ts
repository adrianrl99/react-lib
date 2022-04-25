export type ClassOptions = Record<string, boolean | undefined>
export type Classes = (...args: (string | ClassOptions | undefined)[]) => string

export const classes: Classes = (...args) =>
  args
    .map(value =>
      !value || typeof value === 'string'
        ? value
        : Object.entries(value)
            .filter(([_, value]) => value)
            .map(([key]) => key),
    )
    .flat()
    .join(' ')
