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

    sumatorio(lista) {
        return lista.reduce((acc, num) => acc + num, 0);
    }

    ordenar(lista) {
        return lista.slice().sort((a, b) => a - b); // Copia la lista y la ordena de forma ascendente
    }

    revertir(lista) {
        return lista.slice().reverse(); // Copia la lista y la invierte
    }

    quitar(lista) {
        return lista.slice(0, -1); // Copia la lista y elimina el último elemento
    }
}
