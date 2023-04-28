import { boardSelectors, Cell } from '#/entities'
import { BoardStyle } from '#/shared'

interface NumberLabelProps {
  cell: Cell
}

export const NumberLabel = ({ cell }: NumberLabelProps) => {
  const boardStyle = boardSelectors.use.boardStyle()
  const isNumberLabelVisible = cell.x === 0 && boardStyle !== BoardStyle.NO_STYLES
  const numberLabelPosition =
    boardStyle === BoardStyle.INSIDE_BOARD ? 'top-0.5 left-1' : 'top-3 sm:top-5 -left-3 sm:-left-4'

  if (!isNumberLabelVisible) return null

  return (
    <div className={`number-label absolute text-[10px] sm:text-sm font-bold text-gray-600 ${numberLabelPosition}`}>
      {cell.y}
    </div>
  )
}
