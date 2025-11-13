class Submarino {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    init(size) {
        this.x = Math.floor(Math.random() * size);
        this.y = Math.floor(Math.random() * size);
    }

    // Para moverse aleatoriamente segun el array de vecinos que se le pasa
    mover(vecinos) {
        const vecino =  vecinos[Math.floor(Math.random() * vecinos.length)];
        this.x = vecino.x;
        this.y = vecino.y;
    }
}

export{Submarino}
 