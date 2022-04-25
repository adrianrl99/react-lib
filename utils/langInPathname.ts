import { LANGUAGES } from './constants'

export type LangInPathname = (pathname: string) => string | undefined
export const langInPathname: LangInPathname = pathname =>
  LANGUAGES.map(l => pathname.match(`/${l}`))
    .filter(Boolean)?.[0]?.[0]
    .replace('/', '')
