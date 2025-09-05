function Contador(saidaId) {
    this.total = 0;
    this.saida = document.getElementById(saidaId);
    this.exibir = function() {
        this.saida.textContent = this.total;
    };
    this.incrementar = function() {
        this.total++;
        this.exibir();
    };
}

const A = new Contador("saida1");
const B = new Contador("saida2");
document.getElementById("mais1").addEventListener("click", () => A.incrementar());
document.getElementById("mais2").addEventListener("click", () => B.incrementar());
