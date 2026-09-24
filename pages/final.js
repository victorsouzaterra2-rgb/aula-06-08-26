// pages/final.js - Manipulação do DOM para exibir os detalhes do pedido efetuado

document.addEventListener('DOMContentLoaded', () => {
    const dadosSalvos = sessionStorage.getItem('ultimoPedido');
    const containerDetalhes = document.getElementById('detalhesPedido');
    const spanPedido = document.getElementById('pedidoNumero');

    if (!containerDetalhes) return;

    const formatarMoeda = (val) => Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (dadosSalvos) {
        try {
            const pedido = JSON.parse(dadosSalvos);

            if (spanPedido && pedido.numeroPedido) {
                spanPedido.textContent = pedido.numeroPedido;
            }

            containerDetalhes.innerHTML = `
                <div class="resumo-item">
                    ${pedido.imagem ? `<img class="img-resumo" src="${pedido.imagem}" alt="${pedido.nome}">` : ''}
                    <div class="resumo-info">
                        <h3>${pedido.nome}</h3>
                        <p><strong>Quantidade:</strong> ${pedido.quantidade} uni</p>
                        <p><strong>Preço Unitário:</strong> ${formatarMoeda(pedido.precoUnitario)}</p>
                        <p><strong>Subtotal:</strong> ${formatarMoeda(pedido.totalSemDesconto)}</p>
                        <p class="desconto-destaque"><strong>Desconto (10%):</strong> - ${formatarMoeda(pedido.desconto)}</p>
                        <p class="total-destaque"><strong>Total Pago:</strong> ${formatarMoeda(pedido.totalComDesconto)}</p>
                    </div>
                </div>
                <div class="acoes-final">
                    <a href="../index.html">
                        <button type="button" class="button-buy">Voltar à Página Inicial</button>
                    </a>
                </div>
            `;
        } catch (e) {
            console.error('Erro ao ler pedido do sessionStorage:', e);
            renderDefault();
        }
    } else {
        renderDefault();
    }

    function renderDefault() {
        containerDetalhes.innerHTML = `
            <div class="resumo-info">
                <p>Seu pedido foi registrado com sucesso e será enviado em breve!</p>
            </div>
            <div class="acoes-final">
                <a href="../index.html">
                    <button type="button" class="button-buy">Voltar à Página Inicial</button>
                </a>
            </div>
        `;
    }
});
