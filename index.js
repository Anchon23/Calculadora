const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const info = document.getElementById('info');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});

document.getElementById('cuadrado').addEventListener('click', () => {
    const valorActual = parseFloat(display.valorActual);
    const resultado = display.calculador.cuadrado(valorActual);
    display.valorActual = resultado;
    display.imprimirValores();
    rellenar_info(resultado);
});

document.getElementById('modulo').addEventListener('click', () => {
    const valorActual = parseFloat(display.valorActual);
    const resultado = display.calculador.modulo(valorActual);
    display.valorActual = resultado;
    display.imprimirValores();
    rellenar_info(resultado);
});

document.getElementById('factorial').addEventListener('click', () => {
    const valorActual = parseInt(display.valorActual);
    const resultado = display.calculador.factorial(valorActual);
    display.valorActual = resultado;
    display.imprimirValores();
    rellenar_info(resultado);
});

function rellenar_info(resultado) {
    if (resultado < 100) {
        info.textContent = "Info: El resultado es menor que 100";
    } else if (resultado >= 100 && resultado <= 200) {
        info.textContent = "Info: El resultado está entre 100 y 200";
    } else {
        info.textContent = "Info: El resultado es superior a 200";
    }
}
document.getElementById('raiz-cuadrada').addEventListener('click', () => display.raizCuadrada());
document.getElementById('potencia').addEventListener('click', () => display.elevarPotencia());
document.getElementById('modulo').addEventListener('click', () => display.mod());
document.getElementById('factorial').addEventListener('click', () => display.fact());
document.getElementById('valor-actual').classList.add('potencia');
document.getElementById('valor-actual').classList.remove('potencia');
