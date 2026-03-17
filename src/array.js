// Seção 6 - Arrays
export function array(frutas) {
    frutas.forEach((frutas) => {
        console.log(frutas);
    });
}

// Seção 6.1 - Arrays 2

export function array2(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
    
}

//Seção 6.2 - Arrays 3 (adição)
function array3(carros) {
    //índice 3, não remove nada, adiciona "Bugatti"
    carros.splice(3,0,"Bugatti")
    for (let i=0; i<=3; i++) {
        console.log(carros[i])   
    }
}

//Seção 6.3 - Arrays 4 (remoção)

function array4(nomes) {
    //índice 2, remove 1 item
    nomes.splice(2,1)
    for (let i=0; i<=3; i++) {
        console.log(nomes[i])   
    }
}

export { array3, array4 }
module.exports = { array, array2, array3, array4 }