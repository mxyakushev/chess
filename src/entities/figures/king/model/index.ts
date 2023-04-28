import { Cell, Figure, FigureNames } from '#/entities'
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
        return true
      }
    }

    return false
  }
}
