function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    formatar() {
      return `${this.nome} - R$ ${this.preco.toFixed(2)}`;
    },
    render(container) {
      const item = document.createElement("div");
      item.textContent = this.formatar();
      item.style.padding = "6px";
      item.style.borderBottom = "1px solid #eee";
      container.appendChild(item);
    }
  };
}

const lista = document.getElementById("produtos");
const p1 = criarProduto("Notebook", 3500);
const p2 = criarProduto("Mouse", 89.9);
p1.render(lista);
p2.render(lista);
