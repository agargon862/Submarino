import { Tablero } from "./Tablero.js";

export const UI = {
  game: null,
  control: {
    board: null,
    status: null,
    template: null,
    tablero: null,
  },
  // Inicializar todas las variables
  init: (domControl, game) => {
    UI.control.board = document.getElementById(domControl.board);
    UI.control.status = document.getElementById(domControl.status);
    UI.control.template = document.getElementById(domControl.template);
    UI.control.tablero = new Tablero();
    UI.game = game;
  },
  // Aqui la logica de disparar cuando le des a una casilla especifica
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
  // Para cambiar el texto
  changeStatus(newStatus) {
    UI.control.status.textContent = newStatus;
  },
  // Esto crea lo que vamos a tener en el UI, la tabla con sus casillas
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
