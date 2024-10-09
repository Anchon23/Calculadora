class Calculadora {
    // Métodos de operaciones básicas
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    cuadrado(num) {
        return Math.pow(num, 2);
    }

    cubo(num) {
        return Math.pow(num, 3);
    }

    raizCuadrada(num) {
        if (num < 0) {
            return NaN;
        }
        return Math.sqrt(num);
    }

    elevarPotencia(num, exponente) {
        return Math.pow(num, exponente);
    }

    modulo(num) {
        return num < 0 ? -num : num;
    }

    factorial(num) {
        if (num === 0) {
            return 1;
        }
        return num * this.factorial(num - 1);
    }

    // Métodos para operaciones con listas
    sumatorio(lista) {
        return lista.reduce((acc, val) => acc + parseFloat(val), 0);
    }

    ordenar(lista) {
        return lista.sort((a, b) => a - b);
    }

    revertir(lista) {
        return lista.reverse();
    }

    quitar(lista) {
        lista.pop();
        return lista;
    }

    // Método de ayuda para obtener los valores en formato de lista desde el input
    obtenerValores(input) {
        return input.split(',').map(Number);
    }
}

// Instancia de la calculadora
const calculadora = new Calculadora();

// Implementación de las funciones para manejar la interacción
function realizarSumatorio() {
    const valores = calculadora.obtenerValores(display.valorActual);
    const resultado = calculadora.sumatorio(valores);
    display.valorActual = resultado;
    display.imprimirValores();
}

function realizarOrdenar() {
    const valores = calculadora.obtenerValores(display.valorActual);
    const resultado = calculadora.ordenar(valores);
    display.valorActual = resultado.join(',');
    display.imprimirValores();
}

function realizarRevertir() {
    const valores = calculadora.obtenerValores(display.valorActual);
    const resultado = calculadora.revertir(valores);
    display.valorActual = resultado.join(',');
    display.imprimirValores();
}

function realizarQuitar() {
    const valores = calculadora.obtenerValores(display.valorActual);
    const resultado = calculadora.quitar(valores);
    display.valorActual = resultado.join(',');
    display.imprimirValores();
}
