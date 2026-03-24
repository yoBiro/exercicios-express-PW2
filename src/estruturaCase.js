// Seção 7 - Estrutura Case

export function diaSemana(req, res, dia) {
    switch (dia) {
        case 1:
            console.log("Domingo");
            res.send("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            res.send("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            res.send("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            res.send("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            res.send("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            res.send("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            res.send("Sábado");
            break;
        default:
            res.send("Dia inválido");
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