function sortear() {
    let max = Number(document.querySelector("#max").value);
    let min = Number(document.querySelector("#min").value);
    if (max < min) {
        alert("Valores invertidos")

    } else {
        let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
        alert("Resultado, " + resultado)
    }

}