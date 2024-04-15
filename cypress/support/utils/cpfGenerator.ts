
export function generateCPF(): string {
    // Gera 9 dígitos aleatórios para o CPF
    const cpf = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

    // Calcula o primeiro dígito verificador
    let sum = cpf.reduce((acc, value, index) => acc + (value * (10 - index)), 0);
    let digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    cpf.push(digit);

    // Calcula o segundo dígito verificador
    sum = cpf.reduce((acc, value, index) => acc + (value * (11 - index)), 0);
    digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    cpf.push(digit);

    // Formata o CPF
    return cpf.join('');
}

// Exemplo de uso
const cpf = generateCPF();
console.log(cpf); // Exibe um CPF válido
