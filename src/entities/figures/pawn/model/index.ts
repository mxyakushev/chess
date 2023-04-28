import { Cell, Figure, FigureNames } from '#/entities'
import { Colors } from '#/shared'

export class Pawn extends Figure {
  isFirstStep = true

  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? '/assets/black-pawn.png' : '/assets/white-pawn.png'
    this.name = FigureNames.PAWN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2

    if (
      (target.y === this.cell.y + direction || (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.getCell(target.x, target.y).isEmpty()
    ) {
      return true
    }

    return (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    )
  }

  moveFigure(target: Cell) {
    super.moveFigure(target)
    this.isFirstStep = false
  }
}
