import { atom } from 'recoil'

import { localStorageEffect } from '@/utils/stateEffects'

import { ThemeMode } from './Theme'

export const themeState = atom<ThemeMode>({
  key: 'themeState',
  default: 'system',
  effects: [localStorageEffect('theme')],
})
