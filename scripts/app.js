
const inputText = document.getElementById('inputText')
const botonTransfer = document.getElementById('btn-encript')
const showText = document.getElementById('mensaje-encriptado')
const botonBack = document.getElementById('btn-desencript')
function generateNumber(){
    return Math.floor(Math.random() * 10);
}

function reverseString(mensaje){
    return mensaje.split("").reverse().join("");
}

botonTransfer.addEventListener('click', () => {
        let text = inputText.value;
        let mensajeCifrado = '';

        for (let i = 0; i< text.length; i++) {
            mensajeCifrado += text[i];
            if (i < text.length -1) {
                mensajeCifrado += generateNumber();
            }
        }
        mensajeInversa = reverseString(mensajeCifrado)
        showText.textContent = mensajeInversa
        inputText.value = '';
    }
)

botonBack.addEventListener('click', ()=> {
    let text2 = reverseString(mensajeInversa)
    alert(text2)
});

