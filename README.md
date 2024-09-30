# Calculadora

# Descripción General
El ejercicio consiste en el desarrollo de una calculadora web a la que se deben agregar nuevas funcionalidades, como operaciones unitarias, binarias, y tratamiento de errores. Además, se debe incluir un manejo de operaciones en formato CSV (valores separados por comas) y un campo informativo que varíe en función del resultado de las operaciones.

# Ampliaciones Propuestas
# Campo Informativo Mejorado:
El campo informativo ahora puede mostrar mensajes personalizados en función del tipo de operación realizada. Por ejemplo:
        Para operaciones de suma, podría mostrar "Operación: Suma. Resultado entre 100 y 200".
    Para el uso de operaciones CSV, mostrar "Lista de valores procesada".
    Agregar una función que identifique y notifique errores específicos, como cuando los números ingresados no son válidos o están fuera de rango.
# Nuevas Operaciones:
    Raíz cuadrada: Agregar un botón que calcule la raíz cuadrada de un número ingresado. Debe mostrar un mensaje en el campo informativo indicando si el número es positivo o negativo.
    Elevación al cubo: Adicionalmente al botón ya requerido que eleve al cubo, se podría incorporar un botón que permita elevar el número a cualquier potencia ingresada en un segundo campo.
# Operaciones en CSV Ampliadas:
    Añadir una operación que calcule la media de los valores introducidos en formato CSV.
    Incluir una validación para evitar el ingreso de listas vacías o incompletas en las operaciones CSV.
    El botón de "Quitar elementos" podría mejorarse para permitir eliminar elementos específicos de la lista ingresada en formato CSV, no solo los últimos dos.
# Tratamiento de Errores Mejorado:
    Crear un sistema más robusto de manejo de errores. Si se ingresa texto en lugar de números en las entradas, o si se dejan campos vacíos, la calculadora debe mostrar un mensaje de error específico en lugar de simplemente "Error".
    Implementar un sistema de logs que registre los errores cometidos para su análisis posterior, los cuales pueden ser descargados por el usuario.
# Estilización y UX:
    Proporcionar sugerencias de estilo CSS para mejorar la experiencia de usuario, como resaltar el botón que se ha presionado recientemente o mostrar una animación de carga mientras se ejecutan operaciones más complejas como las de CSV.
    Incluir accesibilidad en el diseño: asegurar que la calculadora sea usable mediante teclado (navegación mediante tabuladores y atajos de teclado).

# TAREAS
Para superar esta entrega, el alumno tendrá que implementar las siguientes funcionalidades:

# CAMPO INFORMATIVO: 
    Añada al documento HTML un nuevo elemento mediante la etiqueta <h2> con identificador "info", clase "grande", un atributo "title" con valor "Info sobre el número" y contenido inicialmente "Info sobre el número". El contenido de dicho elemento <h2> se debe actualizar cada vez que se hace un cálculo en la calculadora. En este primer paso, solo tenemos la función "cuadrado", así que solo se actualizará el campo informativo cuando el usuario haga clic en el botón "cuadrado". Su contenido debe ser:
        "Info: El resultado es menor que 100"
        "Info: El resultado está entre 100 y 200"
        "Info: El resultado es superior a 200" según el resultado del cálculo que muestre el input.
    Aunque en esta primera funcionalidad solo hay una operación en la calculadora, el resto de apartados pedirá más botones, y el campo informativo debe seguir funcionando para todas las operaciones. Recomendamos hacer esta funcionalidad en una función específica (por ejemplo, rellenar_info) que llamemos cada vez que sea necesario.
# OPERACIONES UNITARIAS:
    Añada un nuevo botón con el id "modulo" que llame a una función mod(). Esta función debe calcular el módulo del número X introducido en el input, devolviendo -X si es negativo o dejando el número como está si es positivo.
    Añada un nuevo botón con el id "factorial" que llame a una función fact(). Esta función debe calcular el factorial del número X introducido en el input: Factorial = X*(X-1)*(X-2)*…*3*2*1.
# OPERACIONES BINARIAS: 
    Las operaciones binarias (suma, multiplicación, etc.) consisten en dos operandos y un operador, obteniendo el resultado al pulsar el signo igual. Debe implementarse una función que almacene el primer número en una variable global y el operador correspondiente, y otra que realice el cálculo al pulsar el botón "igual".
    Añada un nuevo operador binario para multiplicación ("multiplicacion") y suma ("suma") y un botón "igual" que invoque a una función eq() que realice el cálculo.
# OPERACIONES EN FORMATO CSV (COMMA SEPARATED VALUES): 
Añada cuatro nuevos botones que manejen operaciones con listas de valores separados por comas.
    sumatorio(): suma todos los valores de la lista.
    ordenar(): ordena los valores de forma ascendente.
    revertir(): invierte el orden de la lista.
    quitar(): elimina el último valor de la lista.
# TRATAMIENTO DE ERRORES: 
    La calculadora debe validar la entrada del usuario y mostrar un error si la entrada no es válida. Cree una función validar() para esto. La calculadora debe soportar números enteros, decimales (positivos y negativos) y listas CSV.
