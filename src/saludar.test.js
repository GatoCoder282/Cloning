import { saludar } from "./saludar.js";

describe("Función saludar", () => {
  test("Debe saludar con 'Hola' cuando no recibe parámetros", () => {
    expect(saludar()).toBe("Hola");
  });

});
