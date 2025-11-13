import { Tablero } from "./Tablero.js";

export const UI = {
  game: null,
  control: {
    board: null,
    status: null,
    template: null,
    tablero: null,
  },
  init: (domControl, game) => {
    UI.control.board = document.getElementById(domControl.board);
    UI.control.status = document.getElementById(domControl.status);
    UI.control.template = document.getElementById(domControl.template);
    UI.control.tablero = new Tablero();
    UI.game = game;
  },
  setEvent: (domControl) => {
    const tabla = document.getElementById(domControl.board);

    tabla.querySelectorAll(".casilla").forEach((casilla) => {
      casilla.addEventListener("click", () => {
        const fila = parseInt(casilla.dataset.fila);
        const columna = parseInt(casilla.dataset.columna);
        domControl.shot(fila, columna);
      });
    });
  },
  
  start(game) {
    UI.game = game;
    UI.control.status.textContent = "Juego iniciado";
  },
  changeStatus(newStatus) {
    UI.control.status.textContent = newStatus;
  },
  creaGridTemplate4(total, plantilla, tabla, tablero) {
    tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
    Array.from({ length: total * total }, (_, i) => {
      const clon = plantilla.content.cloneNode(true);
      const casilla = clon.querySelector(".casilla");
      casilla.textContent = ` ${i % total}, ${Math.floor(i / total)}`;
      casilla.dataset.fila = Math.floor(i / total);
      casilla.dataset.columna = i % total;

      tabla.appendChild(clon);
    });
  },
};
