export function saludar(nombre,genero) {
    const hora = new Date().getHours();
  let saludo;

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  const generoSaludo = genero.toLowerCase() === "m" ? "Señor" : "Señora";
  return `${saludo} ${generoSaludo} ${nombre}`;
  }
