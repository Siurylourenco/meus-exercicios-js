function Temporizador(spanId) {
  this.segundos = 0;
  this.view = document.getElementById(spanId);
  this.timerId = null;
}

Temporizador.prototype.iniciar = function() {
  if (this.timerId) return;
  this.timerId = setInterval(() => {
    this.segundos++;
    this.view.textContent = this.segundos;
  }, 1000);
};

const t1 = new Temporizador("t1");
const t2 = new Temporizador("t2");

document.getElementById("start").addEventListener("click", () => {
  t1.iniciar();
  t2.iniciar();
});
