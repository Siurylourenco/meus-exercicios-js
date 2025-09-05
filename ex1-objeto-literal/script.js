const estiloBotao = {
    corFundo: "purple",
    corTexto: "white",
    tamanhoFonte: "20px",
    aplicarNo(elemento) {
        elemento.style.backgroundColor = this.corFundo;
        elemento.style.color = this.corTexto;
        elemento.style.fontSize = this.tamanhoFonte;
    }
};

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    estiloBotao.aplicarNo(btn);
});