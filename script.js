let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} adicionado ao carrinho!`);
}

if (window.location.pathname.includes("carrinho.html")) {
  const lista = document.getElementById("lista-carrinho");
  const totalSpan = document.getElementById("total");
  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco;
  });

  totalSpan.textContent = total.toFixed(2);
}
