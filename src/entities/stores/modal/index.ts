import { create } from 'zustand'

import { createSelectorFunctions } from '#/shared/lib/selectors'

type TState = {
  modal: boolean
}

type TActions = {
  toggleModal: (visible?: boolean) => void
}

type TStore = TState & TActions

const toggleModal = (key: keyof TState, value?: boolean) => (state: TState) => ({
  ...state,
  [key]: value === undefined ? !state[key] : value
})

export const useModal = create<TStore>(set => ({
  modal: false,
  toggleModal: visible => set(toggleModal('modal', visible))
}))

export const modalSelectors = createSelectorFunctions(useModal)
