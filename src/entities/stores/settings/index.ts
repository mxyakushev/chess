import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { BoardStyle } from '#/shared'
import { createSelectorFunctions } from '#/shared/lib/selectors'

type TTheme = 'light' | 'dark'

type TState = {
  theme: TTheme
  boardStyle: BoardStyle
}

type TActions = {
  toggleTheme: () => void
  setStyle: ({ style }: { style: BoardStyle }) => void
}

type TStore = TState & TActions

export const useSettings = create(
  persist<TStore>(
    (set, get) => ({
      theme: 'light',
      boardStyle: BoardStyle.NO_STYLES,
      toggleTheme: () => {
        set({ theme: get().theme === 'dark' ? 'light' : 'dark' })
      },
      setStyle: ({ style }) => {
        set({ boardStyle: style })
      }
    }),
    {
      name: 'theme'
    }
  )
)

export const settingsSelectors = createSelectorFunctions(useSettings)
