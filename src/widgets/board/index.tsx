import { useEffect } from 'react'

import { boardSelectors } from '#/entities'
import { RowComponent } from '#/features'
import { BoardStyle } from '#/shared'

export const BoardComponent = () => {
  const selectedCell = boardSelectors.use.selectedCell()
  const board = boardSelectors.use.board()
  const highlight = boardSelectors.use.highlight()
  const boardStyle = boardSelectors.use.boardStyle()

  useEffect(() => {
    highlight({ selectedCell })
  }, [highlight, selectedCell])

  return (
    <div
      className={`bg-white rounded ${
        boardStyle === BoardStyle.OUTSIDE_BOARD ? 'pt-2 pr-2 pl-4 pb-4 sm:pl-7 sm:pb-7' : 'p-2'
      }`}
    >
      <div className='w-[320px] h-[320px] sm:w-[512px] sm:h-[512px] flex flex-wrap'>
        {board.cells.map(row => (
          <RowComponent key={Math.random()} row={row} />
        ))}
      </div>
    </div>
  )
}
