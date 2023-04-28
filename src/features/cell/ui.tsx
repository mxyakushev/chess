import { memo, useCallback } from 'react'

import { Cell, themeSelectors } from '#/entities'
import { LetterLabel, NumberLabel, useBoardInteraction } from '#/shared'

interface CellProps {
  cell: Cell
  selected: boolean
}

export const CellComponent = memo(({ cell, selected }: CellProps) => {
  const { handleClick, cellAvailable, cellFigure } = useBoardInteraction(cell)
  const theme = themeSelectors.use.theme()

  const setCellColor = useCallback(() => {
    const colorMap = {
      black: {
        dark: '#7e869c',
        light: '#B7C0D8'
      },
      white: {
        dark: '#bfc9e0',
        light: '#E8EDF9'
      }
    }

    return colorMap[cell.color]?.[theme] || '#E8EDF9'
  }, [cell.color, theme])

  return (
    <div
      className='flex justify-center items-center w-[12.5%] relative'
      style={{
        background: selected ? 'rgba(123,97,255,1)' : setCellColor()
      }}
      onClick={handleClick}
    >
      {cellAvailable && (
        <div className='w-[12px] h-[12px] sm:w-[20px] sm:h-[20px] bg-[rgba(123,97,255,1)] rounded-full' />
      )}
      {cellFigure && <img src={cellFigure} alt='' className='figure min-w-[75%] max-w-[75%] min-h-[75%] max-h-[75%]' />}
      <NumberLabel cell={cell} />
      <LetterLabel cell={cell} />
    </div>
  )
})

CellComponent.displayName = 'CellComponent'
