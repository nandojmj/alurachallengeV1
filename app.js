
/* Encriptacion
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

// TODO ---- Primera ejecución del código con desencriptación
const btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.addEventListener('click', desencriptarTexto)

// Función para desencriptar el texto
function desencriptarTexto(e) {
    e.preventDefault();
    let inputTexto = document.getElementById("textoEntrada").value;
    
    if (!validarEntrada(inputTexto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        return;
    }
    
    let textoDesencriptado = inputTexto

    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/enter/g, 'e')
    .replace(/ufat/g, 'u')
    .replace(/imes/g, 'i');

    
    document.getElementById("textoResultado").textContent = textoDesencriptado;
    
    
}

// TODO ---- Segunda ejecución del código con encriptación
const btnEncriptar = document.getElementById('btnEncriptar');
btnEncriptar.addEventListener('click', encriptarTexto);

// Función para encriptar el texto
function encriptarTexto(e) {
    e.preventDefault();
    let inputTexto = document.getElementById("textoEntrada").value;
    
    if (!validarEntrada(inputTexto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        return;
    }
    
    var textoEncriptado = inputTexto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    
    document.getElementById("textoResultado").textContent = textoEncriptado;
    
}

// Función para validar que solo contiene letras minúsculas, espacios y sin acentos
// expresión regular que verifique si una cadena contiene solo caracteres entre az aceptar espacios en blanco también.
//
function validarEntrada(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function borrarEntrada() {
    document.getElementById("textoEntrada").value = "";
}

// TODO ---- Ejecucion de la función para copiar el texto al portapapeles
const btnCopiar = document.getElementById('copiarPortapapeles');
btnCopiar.addEventListener('click', copiarPortapapeles);

// Función para copiar el texto al portapapeles
function copiarPortapapeles(e) {
    e.preventDefault();
    let textoResultado = document.getElementById("textoResultado").textContent;
    if (!textoResultado) {
        alert("Por favor, ingresa un texto para encriptar o desencriptar.");
        return;
    }
    navigator.clipboard.writeText(textoResultado);
    alert("Texto copiado al portapapeles");
    borrarEntrada();
}