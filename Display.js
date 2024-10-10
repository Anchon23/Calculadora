class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.info = document.getElementById('info');  // Seleccionamos el campo informativo
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.listaValores = []; // Almacena la lista de valores
        this.signos = {
            sumar: '+',
            dividir: '/',
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
        this.valorActual += numero;  // Agregar el número o punto al valor actual
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
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

    // Función para calcular el cubo
    cubo() {
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual)) return;
        this.valorActual = Math.pow(valorActual, 3);
        this.imprimirValores();
        this.rellenarInfo();
    }

    // Función para calcular la raíz cuadrada
    raizCuadrada() {
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual)) return;

        if (valorActual < 0) {
            this.info.textContent = "Info: No se puede calcular la raíz de un número negativo.";
            return;
        }

        this.valorActual = Math.sqrt(valorActual);
        this.imprimirValores();
        this.rellenarInfo();
    }

    // Función para calcular cualquier potencia
    elevarPotencia() {
        const valorActual = parseFloat(this.valorActual);
        const exponente = parseFloat(this.exponente.value);

        if (isNaN(valorActual) || isNaN(exponente)) return;
        this.valorActual = Math.pow(valorActual, exponente);
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
                this.info.textContent = `Info: El resultado es menor que 100 y es ${resultado >= 0 ? 'positivo' : 'negativo'}`;
            } else if (resultado >= 100 && resultado <= 200) {
                this.info.textContent = `Info: El resultado está entre 100 y 200 y es ${resultado >= 0 ? 'positivo' : 'negativo'}`;
            } else if (resultado > 200) {
                this.info.textContent = `Info: El resultado es superior a 200 y es ${resultado >= 0 ? 'positivo' : 'negativo'}`;
            }
        }
    }

    // Función para restablecer el campo informativo
    reiniciarInfo() {
        this.info.textContent = "Info sobre el número";
    }

    // Método para guardar el valor actual en la lista
    agregarALista() {
        if (this.valorActual !== '') {
            // Permitir múltiples números decimales separados por punto
            const numeros = this.valorActual.split('.').map(num => parseFloat(num)).filter(num => !isNaN(num));
            this.listaValores.push(...numeros); // Agregar todos los números a la lista
            this.valorActual = '';  // Reinicia el valor actual después de agregar a la lista
        }
        this.imprimirValores();
    }

    sumatorio() {
        const resultado = this.calculador.sumatorio(this.listaValores);
        this.valorActual = resultado.toString();
        this.imprimirValores();  // Muestra el resultado en la pantalla
    }

    ordenar() {
        const resultado = this.calculador.ordenar(this.listaValores);
        this.valorActual = resultado.join(', ');  // Muestra la lista ordenada en la pantalla
        this.imprimirValores();
    }

    revertir() {
        const resultado = this.calculador.revertir(this.listaValores);
        this.valorActual = resultado.join(', ');  // Muestra la lista revertida en la pantalla
        this.imprimirValores();
    }

    quitar() {
        this.listaValores = this.calculador.quitar(this.listaValores); // Eliminar el último elemento
        this.valorActual = this.listaValores.join(', ');  // Muestra la lista actualizada en la pantalla
        this.imprimirValores();
    }
}
