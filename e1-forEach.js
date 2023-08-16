const letras = [8, 2, 6, 9];
console.log("array com 4 elementos utilizando o laço Foreach")

let soma = 0;
let mediaPassar = 6;

letras.forEach(nota => {
    soma += nota;
});

let media = soma / letras.length;

console.log("Para passar sua nota tem que ser igual ou maior que ", mediaPassar );
if(media >= mediaPassar) {    
    console.log("Sua nota foi ", media, "você está APROVADO");
}
    else if( media < mediaPassar){
        console.log("Sua nota foi ", media, "você está REPROVADO");
    }

