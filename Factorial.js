function factorial(n) {
    let numFactorial = 1
    for (let i = 1; i <= n; i++) {
        numFactorial *= i;
    }
    return numFactorial;
}

let number = parseFloat(prompt("Ingresa un número para calcular su factorial: "));
number = Number(number);

let resultadoFactorial = factorial(number);

if (!isNaN(number) && number >= 0) {
    console.log(`El factorial de ${number} es: ${resultadoFactorial}`);
} else {
console.log ("Por favor, ingresa un número válido.");
}