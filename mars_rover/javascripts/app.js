// Rover Object Goes Here
// ======================

var rover = {
    direccion: "N",
    posX: 0,
    posY: 1
};

// Funcion de posicion del rover
/**
 * function position -> Muestra la posicion y direccion del rover
 * @param  {object} rover Objeto rover
 */
/*eslint no-console: "error"*/
function position(rover) {
    console.log("Dirección actual del rover: "+ rover.direccion);
    console.log("Posición en coordenadas: " + rover.posX + "," + rover.posY);
}

// ======================

// TODO: Girar el rover en todas direcciones hacia la izquierda
/**
 * function turnLeft -> Gira hacia la izquierda el rover
 * @param  {object} rover Objeto rover
 */
/*eslint no-console: "error"*/
function turnLeft(rover) {
    console.log("turnLeft was called!");
    console.log("Direccion actual del rover: " + rover.direccion);
    switch (rover.direccion) {
        case "N":
            rover.direccion = "W";
            break;
        case "W":
            rover.direccion = "S";
            break;
        case "S":
            rover.direccion = "E";
            break;
        case "E":
            rover.direccion = "N";
            break;
        default:
    }
    console.log("Nueva dirección del rover: " + rover.direccion);
}

// TODO: Girar el rover en todas direcciones hacia la derecha
/**
 * function turnRight -> Gira hacia la derecha el rover
 * @param  {object} rover Objeto rover
 */
/*eslint no-console: "error"*/
function turnRight(rover) {
    console.log("turnRight was called!");
    console.log("Direccion actual del rover: " + rover.direccion);
    switch (rover.direccion) {
        case "N":
            rover.direccion = "E";
            break;
        case "E":
            rover.direccion = "S";
            break;
        case "S":
            rover.direccion = "W";
            break;
        case "W":
            rover.direccion = "N";
            break;
        default:
    }
    console.log("Nueva dirección del rover: " + rover.direccion);
}

// TODO: Mover el rover en todas direcciones hacia alante
/**
 * function moveForward -> Mueve hacia delante el rover
 * @param  {object} rover Objeto rover
 */
/*eslint no-console: "error"*/
function moveForward(rover) {
    console.log("moveForward was called");
    switch (rover.direccion) {
        case "N":
            rover.posX+=1;
            break;
        case "E":
            rover.posY+=1;
            break;
        case "S":
            rover.posX+=1;
            break;
        case "W":
            rover.posY-=1;
            break;
        default:
    }
    console.log("Nueva posición: " + rover.posX + "," + rover.posY);
}

/**
 * funcion tracertLog -> Sigue todos los movimientos del rover
 * y hace un registro de éstos
 * @type {object} rover
 */
function tracertLog(rover) {

}


/*
    Codigo de ejemplo -> borrar antes de hacer commit

 if (rover.direccion === "N") {
     rover.direccion = "W";
     if ((rover.posY > 0 && rover.posY < 10)) {
         rover.posX = 0;
         rover.posY-=1;
         console.log("Rover gira hacia: " + rover.direccion + "\nPosición: " + rover.posX +","+ rover.posY);
     }else {
         console.log("El rover no se puede mover hacia el Oeste porque esta en el límite del mapa");
     }
 }
 */
