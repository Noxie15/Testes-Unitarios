const { CalculadoraDeDesconto } = require('./script');

test('Sem desconto (entrada: 50)', () => {
	const calculadora = new CalculadoraDeDesconto();
	expect(calculadora.calcular(50, false)).toBe(50);
});

test('Desconto de 10% (entrada: 200)', () => {
	const calculadora = new CalculadoraDeDesconto();
	expect(calculadora.calcular(200, false)).toBe(180);
});

test('Desconto de 20% (entrada: 600)', () => {
	const calculadora = new CalculadoraDeDesconto();
	expect(calculadora.calcular(600, false)).toBe(480);
});

test('Cliente VIP (entrada: 200, VIP)', () => {
	const calculadora = new CalculadoraDeDesconto();
	expect(calculadora.calcular(200, true)).toBe(170);
});

test('Valor negativo (entrada: -100)', () => {
	const calculadora = new CalculadoraDeDesconto();
	expect(() => calculadora.calcular(-100, false)).toThrow("O valor não pode ser negativo.");
});