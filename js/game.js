import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";


UI.init({
    board: 'gameBoard',
    status: 'gameStatus',
    template: 'casilla-template2'
});


const gameInstance = new GameSubmarine(UI,8 );


UI.creaGridTemplate4(8, UI.control.template, UI.control.board, UI.control.tablero);


UI.setEvent({
    board: 'gameBoard',
    shot: (fila, columna) => gameInstance.shot(fila, columna)
});


