const n = [10, 15.5, 20, 18.5, 22];

console.log("Operações matemáticas utilizando array");

for(let i = 0; i < n.length; i++) {
    console.log("O quadrado de ",n[i], "é ", n[i] * n[i]);
    console.log("A raiz quadrada de ", n[i], "é", Math.sqrt(n[i]));
    console.log("A parte inteiro de ",n[i], "é ", Math.trunc(n[i]));
    console.log("Número arredondado para baixo de ",n[i], "é ", Math.floor(n[i]));
    console.log("Número arredondado para cima de ",n[i], "é ", Math.ceil (n[i]));
}