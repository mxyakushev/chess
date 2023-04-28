import { create } from 'zustand'

import { Board, Cell } from '#/entities'
import { BoardStyle } from '#/shared'
import { createSelectorFunctions } from '#/shared/lib/selectors'

type TStore = {
  board: Board
  boardStyle: BoardStyle
  selectedCell: Cell | null
  setSelectedCell: ({ cell }: { cell: Cell | null }) => void
  setStyle: ({ style }: { style: BoardStyle }) => void
  setBoard: ({ board }: { board: Board }) => void
  restart: () => void
  highlight: ({ selectedCell }: { selectedCell: Cell | null }) => void
}

export const useBoard = create<TStore>((set, get) => ({
  board: new Board(),
  boardStyle: BoardStyle.NO_STYLES,
  selectedCell: null,
  setSelectedCell: ({ cell }) => {
    set({ selectedCell: cell })
  },
  setStyle: ({ style }) => {
    set({ boardStyle: style })
  },
  setBoard: ({ board }) => {
    set({ board })
  },
  restart: () => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    set({ board: newBoard })
  },
  highlight: ({ selectedCell }) => {
    const newBoard = get().board.getCopyBoard()
    newBoard.highlightCells(selectedCell)
    set({ board: newBoard })
  }
}))

export const boardSelectors = createSelectorFunctions(useBoard)
