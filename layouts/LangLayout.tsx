import { FC, useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { languageState } from '@/state/languageState'
import { systemLang } from '@/utils/systemLang'

export const LangLayout: FC = () => {
  const [language, setLanguage] = useRecoilState(languageState)

  useLayoutEffect(() => {
    if (!language) setLanguage(systemLang())
  }, [language, setLanguage])

  return <Outlet />
}
