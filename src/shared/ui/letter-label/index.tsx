import { boardSelectors, Cell } from '#/entities'
import { BoardStyle } from '#/shared'

interface LetterLabelProps {
  cell: Cell
}

export const LetterLabel = ({ cell }: LetterLabelProps) => {
  const boardStyle = boardSelectors.use.boardStyle()
  const chessAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const isLetterLabelVisible = cell.y === 7 && boardStyle !== BoardStyle.NO_STYLES
  const letterLabelPosition =
    boardStyle === BoardStyle.INSIDE_BOARD
      ? 'top-[26px] sm:top-[44px] left-[32px] sm:left-[52px]'
      : 'top-[40px] sm:top-[68px] left-[18px] sm:left-[26px]'

  if (!isLetterLabelVisible) return null

  return (
    <div className={`letter-label absolute text-[10px] sm:text-sm font-bold text-gray-600 ${letterLabelPosition}`}>
      {chessAlphabet[cell.x]}
    </div>
  )
}
