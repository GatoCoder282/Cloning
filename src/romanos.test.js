import convertir_a_romano from "./romanos";

describe("Convierte a numero romano", () => {
    it("cualquier numero introducido deberia convertirlo a numero romano", () => {
      expect(convertir_a_romano(91)).toEqual('XCI');
      expect(convertir_a_romano(270)).toEqual('CCLXX');
      expect(convertir_a_romano(730)).toEqual('DCCXXX');
      expect(convertir_a_romano(111)).toEqual('CXI');
    });
  
  });