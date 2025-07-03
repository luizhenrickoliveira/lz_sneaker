const botoes = document.querySelectorAll('.add-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalSpan = document.getElementById('total');

// Adiciona item ao carrinho
if (botoes) {
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const card = botao.closest('.produto-card');
      const nome = card.dataset.nome;
      const preco = parseFloat(card.dataset.preco);

      const item = { nome, preco };

      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      carrinho.push(item);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));

      alert(`${nome} adicionado ao carrinho!`);
    });
  });
}

// Mostra itens no carrinho
if (listaCarrinho && totalSpan) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
    total += item.preco;
  });

  totalSpan.textContent = total.toFixed(2);
}