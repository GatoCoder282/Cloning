export function saludar(nombre,genero, edad) {
    const hora = new Date().getHours();
  let saludo;

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  let tratamiento = "";
  if (edad > 30) {
    tratamiento = genero.toLowerCase() === "m" ? "Sr." : "Sra.";
  }

  return `${saludo} ${tratamiento} ${nombre}`;
  }
