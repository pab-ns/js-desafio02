const repetition = prompt("Ingresa el número de veces que quieres jugar");
const repetitionTimes = parseInt(repetition);

document.write(`Se jugará ${repetitionTimes} vez / (veces) <hr>`);

for (var i = 0; i < repetitionTimes; i++) {
  //console.log("El juego se repetirá estas veces")

  //Elegir opcion
  const jugadaUsuario = prompt("Elige tu opción: Piedra / Papel / Tijera");
  document.write(`<br> <br> El usuario jugó: ${jugadaUsuario}`);

  //Math Random | Piedra 1 - Papel 2 - Tijera 3
  const opcionRandomIndex = Math.floor(Math.random() * (3 - 1) + 1);

  let opcionRandomText = "";

  if (opcionRandomIndex === 1) {
    opcionRandomText = "Piedra";
  } else if (opcionRandomIndex === 2) {
    opcionRandomText = "Papel";
  } else if (opcionRandomIndex === 3) {
    opcionRandomText = "Tijera";
  }

  document.write(`<br> El computador jugó: ${opcionRandomText}`);
  //console.log(opcionRandomText);

  // Definir Resultado | Computador, Usuario, Empate
  let ganador = "";
  let empate = "Ninguno. Ha sido un empate.";

  if (opcionRandomText === "Piedra" && jugadaUsuario === "Piedra") {
    ganador = empate;
  } else if (opcionRandomText === "Piedra" && jugadaUsuario === "Papel") {
    ganador = "Usuario";
  } else if (opcionRandomText === "Piedra" && jugadaUsuario === "Tijera") {
    ganador = "Computador";
  }

  if (opcionRandomText === "Papel" && jugadaUsuario === "Piedra") {
    ganador = "Computador";
  } else if (opcionRandomText === "Papel" && jugadaUsuario === "Papel") {
    ganador = empate;
  } else if (opcionRandomText === "Papel" && jugadaUsuario === "Tijera") {
    ganador = "Usuario";
  }

  if (opcionRandomText === "Tijera" && jugadaUsuario === "Piedra") {
    ganador = "Usuario";
  } else if (opcionRandomText === "Tijera" && jugadaUsuario === "Papel") {
    ganador = "Computador";
  } else if (opcionRandomText === "Tijera" && jugadaUsuario === "Tijera") {
    ganador = empate;
  }

  document.write(`<br><b>El ganador es: ${ganador}</b>`);

  //
} //end for
