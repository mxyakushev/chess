import { Cell, King } from '#/entities'
import { Colors } from '#/shared'

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон'
}

export class Figure {
  color: Colors
  logo: string | null
  cell: Cell
  name: FigureNames
  id: number
  hasMoved: boolean

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()
    this.hasMoved = false
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false
    return target.figure?.name !== FigureNames.KING
  }
  moveFigure(target: Cell) {
    console.log(target)
    this.hasMoved = true
  }
  getKingInstance(): King | null {
    const board = this.cell.board
    for (const row of board.cells) {
      for (const cell of row) {
        if (cell.figure && cell.figure.color === this.color && cell.figure instanceof King) {
          return cell.figure as King
        }
      }
    }
    return null
  }
}
