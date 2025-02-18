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

});
