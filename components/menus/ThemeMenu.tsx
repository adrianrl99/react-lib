import { FC, useState } from 'react'
import { useRecoilState } from 'recoil'

import { Dot } from '@/components/Dot'
import { Select } from '@/components/Select'
import { ThemeMode, themeMode, themeState } from '@/components/Theme'

export const ThemeMenu: FC = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleSelect = (value: string) => {
    setTheme(value as ThemeMode)
    handleClose()
  }

  const renderThemeSelectedIcon = (theme_: string) =>
    theme === theme_ ? <Dot color="secondary" /> : <Dot color="transparent" />

  return (
    <Select
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      onSelect={handleSelect}
      value={'Theme'}
      options={themeMode}
      renderOptionIcon={renderThemeSelectedIcon}
    />
  )
}
