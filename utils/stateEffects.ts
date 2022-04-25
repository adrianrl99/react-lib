import { AtomEffect } from 'recoil'

export type LocalStorageEffect = <T>(key: string) => AtomEffect<T>

export const localStorageEffect: LocalStorageEffect =
  key =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }
