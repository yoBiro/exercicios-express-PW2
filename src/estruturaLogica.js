export function estruturaLogica(req, res) {
    
    function idade() {
        const maiorIdade = true;
        const menorIdade = false;
        
        console.log(maiorIdade && menorIdade);
        console.log(maiorIdade || menorIdade);
        console.log(!maiorIdade)

        res.send({
            maiorIdade: maiorIdade && menorIdade,
            menorIdade: maiorIdade || menorIdade,
            negacao: !maiorIdade
        });
    }
    idade();
}  