import { Cell, Figure, FigureNames, Rook } from '#/entities'
import { Colors } from '#/shared'

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? '/assets/black-king.png' : '/assets/white-king.png'
    this.name = FigureNames.KING
  }

  canMove(target: Cell): boolean {
    const deltaX = Math.abs(target.x - this.cell.x)
    const deltaY = Math.abs(target.y - this.cell.y)
    if ((deltaX === 1 && deltaY === 1) || (deltaX === 1 && deltaY === 0) || (deltaX === 0 && deltaY === 1)) {
      if (!target.figure || target.figure.color !== this.color) {
        return !this.isCellUnderAttack(target)
      }
    }

    if (deltaY === 0 && (deltaX === 2 || deltaX === 3) && !this.hasMoved) {
      return this.canCastle(target)
    }

    return false
  }

  canCastle(target: Cell): boolean {
    const board = this.cell.board
    const y = this.cell.y
    const x = target.x < this.cell.x ? 0 : 7

    const rook = board.getCell(x, y).figure
    if (!rook || rook.name !== FigureNames.ROOK || rook.color !== this.color || rook.hasMoved) {
      return false
    }

    const min = Math.min(this.cell.x, x)
    const max = Math.max(this.cell.x, x)
    for (let i = min + 1; i < max; i++) {
      const cell = board.getCell(i, y)
      if (!cell.isEmpty() || this.isCellUnderAttack(cell)) {
        return false
      }
    }

    return true
  }

  isCellUnderAttack(target: Cell): boolean {
    const board = this.cell.board
    for (const row of board.cells) {
      for (const cell of row) {
        if (cell.figure && cell.figure.color !== this.color) {
          if (cell.figure.canMove(target)) {
            return true
          }
        }
      }
    }
    return false
  }

  moveFigure(target: Cell) {
    if (Math.abs(target.x - this.cell.x) === 2 && !this.hasMoved) {
      const board = this.cell.board
      const y = this.cell.y
      const rookX = target.x < this.cell.x ? 0 : 7

      const rook = board.getCell(rookX, y).figure
      if (rook && rook instanceof Rook) {
        const newRookX = rookX === 0 ? 3 : 5
        const newRookCell = board.getCell(newRookX, y)
        newRookCell.setFigure(rook)
        board.getCell(rookX, y).figure = null
      }
    }

    super.moveFigure(target)
  }
}
