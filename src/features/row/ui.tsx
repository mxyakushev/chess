import { memo } from 'react'

import { boardSelectors, Cell } from '#/entities'
import { CellComponent } from '#/features'

type RowProps = {
  row: Cell[]
}
export const RowComponent = memo(({ row }: RowProps) => {
  const selectedCell = boardSelectors.use.selectedCell()
  return (
    <div className='min-w-full h-[40px] sm:h-[64px] flex flex-wrap'>
      {row.map(cell => (
        <CellComponent key={cell.id} cell={cell} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} />
      ))}
    </div>
  )
})

RowComponent.displayName = 'Row'
