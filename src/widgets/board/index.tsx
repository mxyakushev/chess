import { useEffect } from 'react'

import { boardSelectors, settingsSelectors } from '#/entities'
import { Row } from '#/features'
import { BoardStyle } from '#/shared'

export const GameBoard = () => {
  const selectedCell = boardSelectors.use.selectedCell()
  const board = boardSelectors.use.board()
  const highlight = boardSelectors.use.highlight()
  const boardStyle = settingsSelectors.use.boardStyle()

  useEffect(() => {
    highlight({ selectedCell })
  }, [highlight, selectedCell])

  return (
    <div
      className={`bg-white dark:bg-gray-300 rounded ${
        boardStyle === BoardStyle.OUTSIDE_BOARD ? 'pt-2 pr-2 pl-4 pb-4 sm:pl-7 sm:pb-7' : 'p-2'
      }`}
    >
      <div className='w-[320px] h-[320px] sm:w-[512px] sm:h-[512px] flex flex-wrap'>
        {board.cells.map(row => (
          <Row key={Math.random()} row={row} />
        ))}
      </div>
    </div>
  )
}
