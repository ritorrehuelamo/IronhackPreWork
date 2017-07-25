// Rover Object Goes Here
// ======================

var rover = {
  direccion: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================

function position(rover) {
  console.log("Posición: " + rover.direccion);
}

// TODO: Implementar los comandos de movimiento dentro de la
// funcion roverCommands dentro de un switch y ¿meterlo dentro
// de un do{}while(); para que se haga un bucle hasta la condicion
// de salida?

function roverCommands(command, rover) {

    for (var i = 1; i < command.length; i++) {
        var letra = command.substring([i], ([i]-1));
        console.log("Comando " + letra + "\n");
        switch (letra) {
            case "l":
                turnLeft(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "f":
                moveForward(rover);
                break;
            default:
                console.log("No se reconoce el comando.");
        }
    }

    console.log("Rover Travel Log: ");
    for (var x = 0; x < rover.travelLog.length; x++) {
            console.log(rover.travelLog[x]);
    }

}


// ======================
/*eslint no-console: "error"*/
function turnLeft(rover) {
  switch (rover.direccion) {
    case "N":
      rover.direccion = "W";
      console.log("Girando rover de N a W");
      console.log("Posición: " + rover.direccion);
      break;
    case "W":
      rover.direccion = "S";
      console.log("Girando rover de W a S");
      console.log("Posición: " + rover.direccion);
      break;
    case "S":
      rover.direccion = "E";
      console.log("Girando rover de S a E");
      console.log("Posición: " + rover.direccion);
      break;
    case "E":
      rover.direccion = "N";
      console.log("Girando rover de E a N");
      console.log("Posición: " + rover.direccion);
      break;
    default:
      console.log("Dirección no disponible.");
  }
}

/*eslint no-console: "error"*/
function turnRight(rover) {
  switch (rover.direccion) {
    case "N":
      rover.direccion = "E";
      console.log("Girando rover de N a E");
      console.log("Posición: " + rover.direccion);
      break;
    case "E":
      rover.direccion = "S";
      console.log("Girando rover de E a S");
      console.log("Posición: " + rover.direccion);
      break;
    case "S":
      rover.direccion = "W";
      console.log("Girando rover de S a W");
      console.log("Posición: " + rover.direccion);
      break;
    case "W":
      rover.direccion = "N";
      console.log("Girando rover de W a N");
      console.log("Posición: " + rover.direccion);
      break;
    default:
      console.log("Dirección no disponible.");
  }
}

/*eslint no-console: "error"*/
function moveForward(rover) {
  console.log("Posición: " + rover.x + "," + rover.y + "\nDireccion: " + rover.direccion);
  if (rover.x >= 0 && rover.x <= 10) {
    if (rover.y >= 0 && rover.y <= 10) {
      switch (rover.direccion) {
        case "N":
          rover.y -= 1;
          if (rover.y > -1) {
              rover.travelLog.push([rover.x, rover.y]);
            console.log("Posición: " + rover.x + "," + rover.y);
          } else {
            rover.y = 0;
            rover.travelLog.push([rover.x, rover.y]);
            console.log("No se puede ir hacia el norte, en el límite de la cuadricula 10x10.");
          }
          break;
        case "E":
          rover.x += 1;
          if (rover.x < 11) {
              rover.travelLog.push([rover.x, rover.y]);
              console.log("Posición: " + rover.x + "," + rover.y);
          }else{
              rover.x = 10;
              rover.travelLog.push([rover.x, rover.y]);
              console.log("No se puede ir hacia el Este, en el límite de la cuadricula 10x10.");
          }
          break;
        case "S":
          rover.y += 1;
          if (rover.y < 11) {
              rover.travelLog.push([rover.x, rover.y]);
              console.log("Posición: " + rover.x + "," + rover.y);
          }else{
              rover.y = 10;
              rover.travelLog.push([rover.x, rover.y]);
              console.log("No se puede ir hacia el Sur, en el límite de la cuadricula 10x10.");
          }
          break;
        case "W":
          rover.x -= 1;
          if (rover.x > -1) {
              rover.travelLog.push([rover.x, rover.y]);
            console.log("Posición: " + rover.x + "," + rover.y);
          } else {
            rover.x = 0;
            rover.travelLog.push([rover.x, rover.y]);
            console.log("No se puede ir hacia el Oeste, en el límite de la cuadricula 10x10.");
          }
          break;
        default:
          console.log("Movimiento no permitido.");
      }
    } else {
      console.log("No se puede mover fuera de la cuadricula de 10x10.");
    }
  } else {
    console.log("No se puede mover fuera de la cuadricula de 10x10.");
  }
}
