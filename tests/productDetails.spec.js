const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    for (let i = 0; i < productDetails.length; i += 1) {
      expect(typeof productDetails('Alcool gel', 'Máscara')[i]).toBe('object');
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1]).toBe(true);
    // Teste se os dois productIds terminam com 123.
    const obj1 = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const obj2 = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    expect(obj1.endsWith('123') && obj2.endsWith('123')).toBe(true);
  });
});
