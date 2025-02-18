import { saludar } from "./saludar.js";

describe("Función saludar", () => {

  test("Debe saludar con 'Hola' cuando no recibe parámetros", () => {
    expect(saludar()).toBe("Hola");
  });

  test("Debe saludar por nombre", () => {
    expect(saludar("Juan")).toBe("Hola Juan");
  });

  test("Debe saludar según la hora del día", () => {
    const horaMañana = new Date();
    horaMañana.setHours(9); // Simula que es de mañana
    jest.useFakeTimers().setSystemTime(horaMañana);

    expect(saludar("Ana")).toContain("Buenos días Ana");
    
    jest.useRealTimers();
  });

  test("Debe saludar con género", () => {
    expect(saludar("Carlos", "m")).toContain("Señor Carlos");
    expect(saludar("Maria", "f")).toContain("Señora Maria");
  });

  test("Debe saludar con tratamiento formal si tiene más de 30 años", () => {
    expect(saludar("Luis", "m", 35)).toContain("Sr. Luis");
    expect(saludar("Sofia", "f", 40)).toContain("Sra. Sofia");
  });

});
