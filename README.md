# Submarino

## Problemas que he tenido

En este proyecto al principio me ha costado mucho lo que es integrar la UI con la logica de la aplicacion, aun teniendo la plantilla.
He intentado hacer el rastro pero sinceramente he desistido porque no he sabido aplicar mi logica al codigo, empece pensando en un Array con 4 numeros y intente que cada vez que le diera click a una casilla y fallara buscara donde esta la celda del anterior y le cambiara el text.content, pero se me ha hecho muy tedioso y no lo he logrado.

Otro problema que he tenido que no he logrado conseguir, es implementar una cantidad de casillas, para que la tabla que se crease sea variable, pero no por nada, si no porque lo que me cuesta es implementar cosas en UI para luego utilizarlas en otros sitios, es decir separar el UI del codigo.

Y no se si habia otra forma pero he hecho que cada vez que pulses a una casilla, lo que haga es llamar al metodo shot que dispara, he hecho un foreach para recorrer todas las casillas de la tabla y saber su x e y de la casilla que pulsemos con su dataset, y en Game Submarine, el shot(), lo que tiene
es un if basico de si submarino.x y submarino.y es igual a los parametros que le paso cada vez que se le da a una casilla que ponga que he acertado y si no, que busque la celda en la que estoy, y vea los vecinos que tiene con los valores que sean distintos de null , y se mueva aletoriamente a uno de esos.

En definitiva el programa va, pero sigue costandome implementar la logica separada del UI.
