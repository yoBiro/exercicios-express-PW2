// Seção 4 - Operação Condicional

export function ifComum(mundial) {
    if (mundial == 0) {
        console.log("Seu time é fraco.")
    }
    else {
        console.log("Você não torce para o time errado")
    }
}

// Seção 4.1 - Operação Condicional 2 

export function ifUnitario(roupa, calcado) {
    if (roupa === "Cropped" || calcado === "Chinelo") {
        console.log("Pode não zé")
    }
}

export function ifComposto(destino, dias) {
    if (destino === "Ilhabela" && dias === 3) {
        console.log("Boa viagem!")
    }else if (destino == "Rio de Janeiro" || destino === "Salvador") {
        console.log("Boa sorte...")
    }else{
        ("Melhor ficar em casa")
    }
}

export function ternario(foo) {
    let bananas = foo ? 10 : 20 
    console.log(bananas)
}
