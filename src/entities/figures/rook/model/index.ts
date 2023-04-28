import { Cell, Figure, FigureNames } from '#/entities'
import { Colors } from '#/shared'

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? '/assets/black-rook.png' : '/assets/white-rook.png'
    this.name = FigureNames.ROOK
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyVertical(target)) return true
    return this.cell.isEmptyHorizontal(target)
  }
}
