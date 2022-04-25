import { FC, useCallback, useLayoutEffect } from 'react'
import { useRecoilState } from 'recoil'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { themeState } from './state'
import styles from './Theme.module.css'

export type ThemeMode = 'dark' | 'light' | 'system'

export const themeMode: ThemeMode[] = ['dark', 'light', 'system']

export const Theme: FC = ({ children }) => {
  const [theme] = useRecoilState(themeState)

  const match = useMediaQuery('(prefers-color-scheme: dark)')

  const changeTheme = useCallback((theme: boolean) => {
    const html = document.querySelector('html')

    theme ? html?.classList.add('dark') : html?.classList.remove('dark')
  }, [])

  useLayoutEffect(() => {
    theme === 'system' ? changeTheme(match) : changeTheme(theme === 'dark')
  }, [theme, changeTheme, match])

  return <div className={styles.Theme}>{children}</div>
}
