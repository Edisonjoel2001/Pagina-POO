const preguntas = [
    {
        pregunta: "¿Qué es un lenguaje de programación?",
        opciones: [
            "Un idioma hablado por programadores",
            "Un conjunto de instrucciones para la computadora",
            "Un software para diseñar páginas web"
        ],
        respuesta: 1
    },
    {
        pregunta: "¿Cuál de los siguientes NO es un lenguaje de programación?",
        opciones: ["Python", "HTML", "Java"],
        respuesta: 1
    },
    {
        pregunta: "¿Qué significa POO?",
        opciones: [
            "Programación Organizada y Ordenada",
            "Programación Orientada a Objetos",
            "Programa Oficial de Operaciones"
        ],
        respuesta: 1
    },
    {
        pregunta: "¿Cuál de estos es un principio de POO?",
        opciones: ["Herencia", "Compilación", "Depuración"],
        respuesta: 0
    },
    {
        pregunta: "¿Cuál es la estructura básica de un bucle en C?",
        opciones: [
            "for(inicialización; condición; actualización) {}",
            "for(condición) {}",
            "for variable in rango {}"
        ],
        respuesta: 0
    },
    {
        pregunta: "¿Cómo se define una función en Python?",
        opciones: ["def nombre_funcion()", "function nombre_funcion()", "fun nombre_funcion()"],
        respuesta: 0
    },
    {
        pregunta: "¿Qué hace la palabra clave 'return' en una función?",
        opciones: [
            "Detiene la ejecución de la función y devuelve un valor",
            "Imprime un valor en consola",
            "Hace que la función se repita indefinidamente"
        ],
        respuesta: 0
    },
    {
        pregunta: "¿Qué tipo de dato devuelve la función len() en Python?",
        opciones: ["Entero", "Cadena", "Lista"],
        respuesta: 0
    },
    {
        pregunta: "¿Cuál es la extensión de un archivo de código fuente en Java?",
        opciones: [".java", ".js", ".py"],
        respuesta: 0
    },
    {
        pregunta: "¿Qué hace la estructura 'if' en un lenguaje de programación?",
        opciones: [
            "Ejecuta código solo si una condición es verdadera",
            "Repite un bloque de código indefinidamente",
            "Declara una nueva variable"
        ],
        respuesta: 0
    }
];

let preguntaActual = 0;
let puntaje = 0;

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        document.getElementById("pregunta").textContent = preguntas[preguntaActual].pregunta;
        let opcionesHTML = "";

        preguntas[preguntaActual].opciones.forEach((opcion, index) => {
            opcionesHTML += `<button onclick="verificarRespuesta(${index})">${opcion}</button><br>`;
        });

        document.getElementById("opciones").innerHTML = opcionesHTML;
    } else {
        document.getElementById("quiz-container").innerHTML = `
            <h2>¡Quiz terminado!</h2>
            <p>Tu puntaje final es: ${puntaje} / ${preguntas.length}</p>
        `;

        if (puntaje === preguntas.length) {
            document.getElementById("felicitaciones").style.display = "block";
        }
    }
}

function verificarRespuesta(opcionSeleccionada) {
    if (opcionSeleccionada === preguntas[preguntaActual].respuesta) {
        puntaje++;
    }
    preguntaActual++;
    mostrarPregunta();
}

document.addEventListener("DOMContentLoaded", mostrarPregunta);
