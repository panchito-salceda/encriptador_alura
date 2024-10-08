
const inputText = document.getElementById('inputText')
const botonTransfer = document.getElementById('btn-encript')
const showText = document.getElementById('mensaje-encriptado')
const botonBack = document.getElementById('btn-desencript')
const rescuedText = document.getElementById('mensaje-restaurado')

function generateNumber(){
    return Math.floor(Math.random() * 10);
}

function reverseString(mensaje){
    return mensaje.split("").reverse().join("");
}

function validacionMensaje(mensaje){
    if (mensaje == ""){
        showText.textContent = "Por favor, ingresa una palabra"
    }
}

inputText.addEventListener('click', ()=>{
    getElementById('btn-encript').style.display = 'block'
})

botonTransfer.addEventListener('click', () => {
        
    let textn = inputText.value;
    validacionMensaje(textn)
    let text = textn.replaceAll(" ", "*")
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
        document.getElementById('btn-desencript').style.display = 'block'
    }
)

botonBack.addEventListener('click', ()=> {
    let text2 = reverseString(mensajeInversa)
    let mensajeDescifrado = '';

    for (let j = 0; j< text2.length; j++){
        //mensajeDescifrado += text2[j];
        if(isNaN(text2[j])){
            
            mensajeDescifrado += text2[j];
        }else{
            
        }
    }
    mensajeDescifrado = mensajeDescifrado.replaceAll('*',' ')
    rescuedText.textContent = mensajeDescifrado;
    
    mensajeInversa = ''
});

