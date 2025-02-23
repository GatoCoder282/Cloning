import  fizzbuzz  from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("un numero que no es multiplo ni de 3 ni de 5 deberia retornar un string", () => {
    expect(fizzbuzz(1)).toEqual('1');
    expect(fizzbuzz(2)).toEqual('2');
    expect(fizzbuzz(4)).toEqual('4');
  });

  it("un multiplo de 3 deberia retornar Fizz", () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(6)).toEqual('Fizz');
    expect(fizzbuzz(9)).toEqual('Fizz');
  });

  it("un multiplo de 5 deberia retornar Buzz", () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
    expect(fizzbuzz(10)).toEqual('Buzz');
    expect(fizzbuzz(20)).toEqual('Buzz');
  });

  it("un multiplo de 3 y de 5 deberia retornar FizzBuzz", () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
    expect(fizzbuzz(30)).toEqual('FizzBuzz');
    expect(fizzbuzz(45)).toEqual('FizzBuzz');
  });
});
