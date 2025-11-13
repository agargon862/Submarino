import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";

// Inicializa la interfaz de usuario
UI.init({
    board: 'gameBoard',
    status: 'gameStatus',
    template: 'casilla-template2', 
});

// Para hacer un juego
const gameInstance = new GameSubmarine(UI,8);

// Para crear la tabla en la pantalla
UI.creaGridTemplate4(8, UI.control.template, UI.control.board, UI.control.tablero);


// Para saber que hace cuando le das a cada casilla

UI.setEvent({
    board: 'gameBoard',
    shot: (fila, columna) => gameInstance.shot(fila, columna)
});


// Aqui la logica de reiniciar el juego
document.getElementById('resetButton').addEventListener('click', () => {
    UI.control.board.innerHTML = '';
    
    const newGame = new GameSubmarine(UI, 8);
    
    UI.creaGridTemplate4(8, UI.control.template, UI.control.board, UI.control.tablero);
    
    UI.setEvent({
        board: 'gameBoard',
        shot: (fila, columna) => newGame.shot(fila, columna)
    });
});



