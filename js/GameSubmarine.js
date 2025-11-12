import { Submarino } from "./Submarino.js";
import { Tablero } from "./Tablero.js";

export class GameSubmarine {
  constructor(UIControl, size) {
    this.UIControl = UIControl;
    this.UIControl.start(this);

    this.submarino = new Submarino();
    this.submarino.init(size);

    this.tablero = new Tablero();
    this.tablero.init(size);
  }

  shot(fila, columna) {
    if (this.submarino.x === fila && this.submarino.y === columna) {
      this.UIControl.changeStatus(`Has hundido el submarino en`);
    } else {
      this.UIControl.changeStatus(
        `Fallaste estaba en ` + this.submarino.y + " " + this.submarino.x
      );

      let celda = this.tablero.tablero.find(
        (item) => item.x === this.submarino.x && item.y === this.submarino.y
      );

      this.submarino.mover(celda.vecinos.filter((item) => item != null));
    }

    console.log(this);
  }
}
