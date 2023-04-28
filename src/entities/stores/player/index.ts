import { create } from 'zustand'

import { Colors } from '#/shared'
import { createSelectorFunctions } from '#/shared/lib/selectors'

type TState = {
  player: Colors
}

type TActions = {
  setPlayer: (color: Colors) => void
  swapPlayer: () => void
}

type TStore = TState & TActions

export const usePlayer = create<TStore>((set, get) => ({
  player: Colors.WHITE,
  setPlayer: color => set({ player: color }),
  swapPlayer: () => {
    set({ player: get().player === Colors.WHITE ? Colors.BLACK : Colors.WHITE })
  }
}))

export const playerSelectors = createSelectorFunctions(usePlayer)
