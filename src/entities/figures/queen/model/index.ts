import { Cell, Figure, FigureNames } from '#/entities'
import { Colors } from '#/shared'

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? '/assets/black-queen.png' : '/assets/white-queen.png'
    this.name = FigureNames.QUEEN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyVertical(target)) return true
    if (this.cell.isEmptyHorizontal(target)) return true
    return this.cell.isEmptyDiagonal(target)
  }
}
