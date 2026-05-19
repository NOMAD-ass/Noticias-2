function area_circulo(raio) {
    const PI = 3.14159

    var area = PI * (raio**2) 
    return area;

}

var area = 5

console.log( `Área do círculo: ${area_circulo(5)}` );


function area_retangulo(base, altura) {
    var area = base * altura
    return area;
}



console.log( `Área do retângulo: ${area_retangulo(5, 3)}` );

function area_triangulo(base, altura) {
    var area = (base * altura) / 2
    return area;
}

console.log( `Área do triângulo: ${area_triangulo(5, 3)}` );