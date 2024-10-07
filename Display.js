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
        if(numero === '.' && this.valorActual.includes('.')) return
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

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

    // Nueva función para actualizar el campo informativo
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

    // Nueva función para restablecer el campo informativo
    reiniciarInfo() {
        this.info.textContent = "Info sobre el número";
    }
}
