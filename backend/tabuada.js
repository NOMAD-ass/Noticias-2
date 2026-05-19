import input from "./input";

var numero = await input("Digite um número para ver a tabuada: ");



for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}


for (var i = 1; i <= 10; i++)
    for (var j = 1; j <= 10; j++)
     {
    var resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

