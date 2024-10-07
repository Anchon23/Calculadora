class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.info = document.getElementById('info');  // Seleccionamos el campo informativo
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
        this.reiniciarInfo();  // Restablecemos el campo informativo
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
        this.rellenarInfo();  // Llamamos a la función para actualizar el campo informativo
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
        this.rellenarInfo();  // Actualizamos el campo informativo con el resultado
    }

    // Función para calcular el cuadrado
    cuadrado() {
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual)) return;
        this.valorActual = Math.pow(valorActual, 2);
        this.imprimirValores();
        this.rellenarInfo();
    }

    // Función para calcular el módulo
    mod() {
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual)) return;
        this.valorActual = valorActual < 0 ? -valorActual : valorActual;
        this.imprimirValores();
        this.rellenarInfo();
    }

    // Función para calcular el factorial
    fact() {
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual) || valorActual < 0 || !Number.isInteger(valorActual)) return;
        this.valorActual = this.factorial(valorActual);
        this.imprimirValores();
        this.rellenarInfo();
    }

    factorial(n) {
        return n === 0 ? 1 : n * this.factorial(n - 1);
    }

    // Función para actualizar el campo informativo
    rellenarInfo() {
        const resultado = parseFloat(this.valorActual);
        if (!isNaN(resultado)) {
            if (resultado < 100) {
                this.info.textContent = "Info: El resultado es menor que 100";
            } else if (resultado >= 100 && resultado <= 200) {
                this.info.textContent = "Info: El resultado está entre 100 y 200";
            } else if (resultado > 200) {
                this.info.textContent = "Info: El resultado es superior a 200";
            }
        }
    }

    // Función para restablecer el campo informativo
    reiniciarInfo() {
        this.info.textContent = "Info sobre el número";
    }
}
