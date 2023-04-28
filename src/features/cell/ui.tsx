import { memo } from 'react'

import { Cell } from '#/entities'
import { LetterLabel, NumberLabel, useBoardInteraction } from '#/shared'

interface CellProps {
  cell: Cell
  selected: boolean
}

export const CellComponent = memo(({ cell, selected }: CellProps) => {
  const { handleClick, cellAvailable, cellFigure } = useBoardInteraction(cell)

  return (
    <div
      className='cell flex justify-center items-center w-[12.5%] relative'
      style={{
        background: selected ? 'rgba(123,97,255,0.7)' : cell.color
      }}
      onClick={handleClick}
    >
      {cellAvailable && (
        <div className='dot w-[12px] h-[12px] sm:w-[20px] sm:h-[20px] bg-[rgba(123,97,255,0.7)] rounded-full' />
      )}
      {cellFigure && <img src={cellFigure} alt='' className='figure min-w-[75%] max-w-[75%] min-h-[75%] max-h-[75%]' />}
      <NumberLabel cell={cell} />
      <LetterLabel cell={cell} />
    </div>
  )
})

CellComponent.displayName = 'CellComponent'
