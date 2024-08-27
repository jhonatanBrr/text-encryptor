function encriptar() {
    const texto = document.getElementById("inputText")
    const { flag } = validateCharacters(texto.value)
    alertValidateCharacters(flag)
    
    if (flag) return
    
    let textoEncriptado = texto.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        validateInput(textoEncriptado)
    document.getElementById("outputText").innerHTML = textoEncriptado;
}

function desencriptar() {
    const texto = document.getElementById("inputText")
    const { flag } = validateCharacters(texto.value)
    alertValidateCharacters(flag)
    
    if (flag) return
    
    validateCharacters(texto.value)
    let textoDesencriptado = texto.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    validateInput(textoDesencriptado)
    document.getElementById("outputText").innerHTML = textoDesencriptado;
    
}

function validateInput(text) {
    const outputEmpty = document.getElementById("emptyOutput")
    const output = document.getElementById("output")
    if (text.trim() === "") {
        outputEmpty.style.display = "flex"
        output.style.display = "none"
        console.log('vacio');
    } else {
        outputEmpty.style.display = "none"
        output.style.display = "flex"
        console.log('lleno');
    }
}

function copyText() {
    const text = document.querySelector('#outputText').innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    })
}

function validateCharacters(texto) {
    const hasCapital = /[A-Z]/.test(texto);
    const hasAccent = /[áéíóúüñ]/.test(texto);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(texto);
    
    const flag = hasCapital || hasAccent || hasSpecialCharacter;

    return { flag }
}

function alertValidateCharacters(flag) {
    if (flag) {
        alert("No es valido el texto que ingresaste, no deben de haber mayusculas, ni acentos, ni caracteres especiales")
    }
}