const ingresaTexto = document.getElementById("ingresaTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const info = document.getElementById("info");
const right = document.getElementById("right");



// "e" - "enter"
// "i" - "imes"
// "a" - "ai"
// "o" - "ober"
// "u" - "ufat"

let reemplazar = [
    ["e", "enter"], 
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

botonEncriptar.addEventListener("click", () => {
    const texto = ingresaTexto.value.toLowerCase()
    function encriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText
    }
    const textoEncriptado = encriptar(texto)
    mensajeFinal.innerHTML = textoEncriptado


    muneco.style.display = "none"
    info.style.display = "none"
    botonCopiar.style.display = "block"
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar")

})

botonDesencriptar.addEventListener("click",()=>{
    const texto = ingresaTexto.value.toLowerCase();
    function desencriptar(newText) {
        for(let i = 0; i<reemplazar.length; i++){
            if(newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText
    }
    const textoDesencriptado = desencriptar(texto);
    mensajeFinal.innerHTML = textoDesencriptado

    muneco.style.display = "none"
    info.style.display = "none"
    botonCopiar.style.display = "block"
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar")
})

botonCopiar.addEventListener("click",() => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy")
    
})

