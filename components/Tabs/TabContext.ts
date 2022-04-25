import { createContext } from 'react'

export type TabContextState = {
  active: number
  setActive: (value: number) => void
}

export const tabContextInitialState: TabContextState = {
  active: 0,
  setActive: () => null,
}

export const TabContext = createContext<TabContextState>(tabContextInitialState)
