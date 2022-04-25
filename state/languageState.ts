import { atom } from 'recoil'

import { localStorageEffect } from '@/utils/stateEffects'

export const languageState = atom<string>({
  key: 'languageState',
  default: '',
  effects: [localStorageEffect('language')],
})
