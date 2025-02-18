export function saludar(nombre, genero, edad, idioma = "es") {
    const hora = new Date().getHours();
    let saludo, tratamiento = "";
  
    if (idioma === "es") {
      if (hora < 12) {
        saludo = "Buenos días";
      } else if (hora < 18) {
        saludo = "Buenas tardes";
      } else {
        saludo = "Buenas noches";
      }
  
      if (edad > 30) {
        tratamiento = genero.toLowerCase() === "m" ? "Sr." : "Sra.";
      }
  
      return `${saludo} ${tratamiento} ${nombre}`;
    } else if (idioma === "en") {
      if (hora < 12) {
        saludo = "Good morning";
      } else if (hora < 18) {
        saludo = "Good afternoon";
      } else {
        saludo = "Good evening";
      }
  
      if (edad > 30) {
        tratamiento = genero.toLowerCase() === "m" ? "Mr." : "Mrs.";
      }
  
      return `${saludo} ${tratamiento} ${nombre}`;
    }
  }
  