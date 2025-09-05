function log(msg) {
  document.getElementById("log").textContent = msg;
}

function processarNome(nome, callbackFinal) {
  if (!nome || nome.trim() === "") {
    log("Erro: nome vazio.");
    return;
  }
  log("Processando...");
  setTimeout(() => {
    const resultado = nome.trim().toUpperCase();
    callbackFinal(resultado);
  }, 1000);
}

document.getElementById("processar").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  processarNome(nome, function(resultado) {
    log("Pronto: " + resultado);
  });
});
