const soma = require('./soma')

describe('Soma', () => {
  it('deve somar dois números inteiros', () => {
    expect(soma(2,2)).toBe(4)
  })
})