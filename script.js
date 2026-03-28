class CalculadoraDeDesconto {
    calcular(valor, isVip) {
        if (valor < 0) {
            throw new Error("O valor não pode ser negativo.");
        }

        let desconto = 0;

        if (valor >= 100 && valor <= 500) {
            desconto = 0.10; // 10% de desconto
        } else if (valor > 500) {
            desconto = 0.20; // 20% de desconto
        }

        if (isVip) {
            desconto += 0.05; // +5% adicional para clientes VIP
        }

        const valorFinal = valor * (1 - desconto);
        return Math.max(valorFinal, 0); // Garante que o valor nunca seja negativo
    }
}
module.exports = { CalculadoraDeDesconto };