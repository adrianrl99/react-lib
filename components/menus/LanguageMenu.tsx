import { FC, useState } from 'react'
import { SiGoogletranslate } from 'react-icons/si'
import { useRecoilState } from 'recoil'

import { Select } from '@/components/Select'
import { languageState } from '@/state/languageState'
import { Language, LANGUAGE_NAME } from '@/utils/constants'

export const LanguageMenu: FC = () => {
  const [language, setLanguage] = useRecoilState(languageState)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleSelect = (value: string) => {
    setLanguage(value)
    handleClose()
  }

  return (
    <Select
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      onSelect={handleSelect}
      value={language}
      options={Object.keys(LANGUAGE_NAME)}
      renderValue={value => LANGUAGE_NAME[value as Language]}
      renderOption={option => LANGUAGE_NAME[option as Language]}
      buttonProps={{
        icon: <SiGoogletranslate />,
      }}
    />
  )
}
