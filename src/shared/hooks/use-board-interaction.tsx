import { boardSelectors, Cell, playerSelectors } from '#/entities'

export const useBoardInteraction = (cell: Cell) => {
  const selectedCell = boardSelectors.use.selectedCell()
  const setSelectedCell = boardSelectors.use.setSelectedCell()
  const currentPlayer = playerSelectors.use.player()
  const swapPlayer = playerSelectors.use.swapPlayer()

  const handleClick = () => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell({ cell: null })
    } else {
      if (cell.figure?.color === currentPlayer) {
        setSelectedCell({ cell })
      }
    }
  }

  const cellAvailable = cell.available && !cell.figure
  const cellFigure = cell.figure?.logo

  return { handleClick, cellAvailable, cellFigure }
}
