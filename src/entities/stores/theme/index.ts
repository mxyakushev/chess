import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createSelectorFunctions } from '#/shared/lib/selectors'

type TTheme = 'light' | 'dark'

type TState = {
  theme: TTheme
}

type TActions = {
  toggleTheme: () => void
}

type TStore = TState & TActions

export const useTheme = create(
  persist<TStore>(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => {
        set({ theme: get().theme === 'dark' ? 'light' : 'dark' })
      }
    }),
    {
      name: 'theme'
    }
  )
)

export const themeSelectors = createSelectorFunctions(useTheme)
