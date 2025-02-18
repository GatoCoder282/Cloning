import { saludar } from "./saludar.js";

describe("Función saludar", () => {
  test("Debe saludar con 'Hola' cuando no recibe parámetros", () => {
    expect(saludar()).toBe("Hola");
  });
  test("Debe saludar por nombre", () => {
    expect(saludar("Juan")).toBe("Hola Juan");
  });

});
