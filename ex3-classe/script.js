class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Oi, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }

    render(container) {
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.padding = "8px";
        card.style.margin = "6px 0";

        const p = document.createElement("p");
        p.textContent = this.apresentar();

        const btn = document.createElement("button");
        btn.textContent = "Fazer Aniversário 🎂";
        btn.addEventListener("click", () => {
            this.idade++;
            p.textContent = this.apresentar();
        });

        card.appendChild(p);
        card.appendChild(btn);
        container.appendChild(card);       
     }
    }

    const app = document.getElementById("app");
    new Usuario("Siury", 28).render(app);
    new Usuario("Arthur", 25).render(app);