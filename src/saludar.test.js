import { saludar } from "./saludar.js";

describe("Función saludar", () => {

  test("Debe saludar según la hora del día", () => {
    const horaMañana = new Date();
    horaMañana.setHours(9); // Simula que es de mañana
    jest.useFakeTimers().setSystemTime(horaMañana);

    expect(saludar("Ana")).toContain("Buenos días Ana");
    
    jest.useRealTimers();
  });


  test("Debe saludar con tratamiento formal si tiene más de 30 años", () => {

    const horaMañana = new Date();
    horaMañana.setHours(9); // Simula que es de mañana
    jest.useFakeTimers().setSystemTime(horaMañana); 


    expect(saludar("Luis", "m", 35)).toContain("Buenos días Sr. Luis");
    expect(saludar("Sofia", "f", 40)).toContain("Buenos días Sra. Sofia");

    jest.useRealTimers();
  });

  test("Debe saludar en inglés", () => {
    const horaMañana = new Date();
    horaMañana.setHours(9); // Simula que es de mañana
    jest.useFakeTimers().setSystemTime(horaMañana); 

    expect(saludar("John", "m", 25, "en")).toContain("Good morning John");
    expect(saludar("Emma", "f", 40, "en")).toContain("Good morning Mrs. Emma");

    jest.useRealTimers();
  });

});
