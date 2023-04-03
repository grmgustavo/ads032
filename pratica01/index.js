const contatos = [
  { nome: "João", fone: "1234-5678" },
  { nome: "Maria", fone: "9876-5432" }
];

const root = document.getElementById("main");

const Titulo = (nome) => {
  const h2 = document.createElement("h2");
  h2.textContent = nome;
  return h2;
}

const InputText = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Nome do contato";
  return input;
}

const InputTel = () => {
  const input = document.createElement("input");
  input.type = "tel";
  input.placeholder = "Telefone do contato";
  return input;
}

const InputSubmit = () => {
  const input = document.createElement("input");
  input.type = "submit";
  input.value = "Enviar";
  return input;
}

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const novoContato = {};
  for (const [key, value] of formData.entries()) {
    novoContato[key] = value;
  }
  contatos.push(novoContato);
  navegaPara("meus-contatos");
}

const FormContato = () => {
  const form = document.createElement("form");
  const inputNome = InputText();
  const inputFone = InputTel();
  const inputSubmit = InputSubmit();
  form.appendChild(inputNome);
  form.appendChild(inputFone);
  form.appendChild(inputSubmit);
  form.addEventListener("submit", handleSubmit);
  return form;
}

const ListaContato = () => {
  const table = document.createElement("table");
  contatos.forEach((contato) => {
    const tr = document.createElement("tr");
    const tdNome = document.createElement("td");
    const tdFone = document.createElement("td");
    tdNome.textContent = contato.nome;
    tdFone.textContent = contato.fone;
    tr.appendChild(tdNome);
    tr.appendChild(tdFone);
    table.appendChild(tr);
  });
  return table;
}

const MeusContatos = () => {
  limpaConteudo();
  root.appendChild(Titulo("Meus Contatos"));
  root.appendChild(ListaContato());
}

const NovoContato = () => {
  limpaConteudo();
  root.appendChild(Titulo("Novo Contato"));
  root.appendChild(FormContato());
}

const limpaConteudo = () => {
  const children = Array.from(root.children);
  children.forEach((child) => {
    root.removeChild(child);
  });
}

const ativaLink = (rota) => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.textContent !== rota) {
      link.classList.remove('ativo');
    } else {
      link.classList.add('ativo');
    }
  });
}

const navegaPara = (rota) => {
  limpaConteudo();
  ativaLink(rota);
  if (rota === "Meus Contatos") {
    MeusContatos();
  } else if (rota === "Novo Contato") {
    NovoContato();
  }
}

const adicionaClickListener = () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const rota = link.textContent.trim();
      navegaPara(rota);
    });
  });
}

adicionaClickListener();
navegaPara('Meus Contatos');
