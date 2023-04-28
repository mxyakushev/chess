import { Cell, FigureNames } from '#/entities'
import { Figure } from '#/entities/figures/figure'
import { Colors } from '#/shared'

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? '/assets/black-bishop.png' : '/assets/white-bishop.png'
    this.name = FigureNames.BISHOP
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    return this.cell.isEmptyDiagonal(target)
  }
}
