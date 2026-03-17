// Seção 7 - Estrutura Case

export function diaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Dia inválido");
    }
}

// Seção 7.1 - Estrutura Case 2

export function classificacaoIdade(idade) {
    switch (true) {
        case (idade >= 0 && idade <= 12):
            console.log("Criança");
            break;
        case (idade > 12 && idade <= 18):
            console.log("Adolescente");
            break;
        case (idade > 18 && idade <= 60):
            console.log("Adulto");
            break;
        case (idade > 60):
            console.log("Idoso");
            break;
        default:
            console.log("Idade inválida");
    }
}