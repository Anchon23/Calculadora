class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    cuadrado(num) {
        return num * num;
    }

    modulo(num) {
        return num < 0 ? -num : num;
    }

    factorial(num) {
        if (num < 0) return "Error";
        if (num === 0 || num === 1) return 1;
        let fact = 1;
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}
