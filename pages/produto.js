// pages/produto.js - Manipulação de DOM e lógica interativa para páginas de produto

document.addEventListener('DOMContentLoaded', () => {
    // Catálogo com os dados dos produtos caso a página seja acessada via query param (ex: produto.html?id=farol)
    const catalogo = {
        'suspensao': {
            id: 'suspensao',
            nome: 'Suspensão Yamaha crosser 150',
            preco: 469.90,
            estoque: 12,
            imagem: '../images/amortecedor-scud-c-150.jpg',
            caracteristicas: [
                'Encaixe padrão original: Fabricado com medidas exatas de 37cm e 8 elos, permitindo substituição direta, sem necessidades de adaptações.',
                'Resistência e conforto: Desenvolvido com materiais metálicos resistentes para absorver impactos severos no uso urbano diário ou offroad.',
                'Garantia de fabrica: Oferece 3 meses de garantia contra defeitos de fabricação, acompanha as buchas necessárias para a instalação.'
            ]
        },
        'farol': {
            id: 'farol',
            nome: 'Farol dianteiro Yamaha Crosser 150',
            preco: 2990.00,
            estoque: 8,
            imagem: '../images/farol-150.jpg',
            caracteristicas: [
                'Tecnologia Full LED: Iluminação total em LED para maior durabilidade e economia de bateria.',
                'Farol com Projetor: Facho de luz focado que melhora o alcance na estrada e evita dispersão.',
                'Luz de rodagem diurna integrada (DRL) que aumenta a visibilidade da moto durante o dia.'
            ]
        },
        'cabecote': {
            id: 'cabecote',
            nome: 'Cabeçote Crosser 150',
            preco: 1790.00,
            estoque: 5,
            imagem: '../images/cabecote-150.jpg',
            caracteristicas: [
                'Comando SOHC: Possui um único comando de válvulas no cabeçote que controla a admissão e o escape, ideal para entregar força em baixas e médias rotações.',
                'Duas Válvulas Otimizadas: Conta com uma válvula de admissão e uma válvula de escape otimizadas para o uso misto (cidade e terra).',
                'Compatibilidade: O desenho do cabeçote é compartilhado com outros motores de 150cc da marca, como a Yamaha Fazer 150, facilitando a reposição.'
            ]
        },
        'disco': {
            id: 'disco',
            nome: 'Disco de freio Crosser 150',
            preco: 159.90,
            estoque: 20,
            imagem: '../images/disco de freio.jpg',
            caracteristicas: [
                'Aço Inox de alta resistência: Desenvolvido para suportar atrito contínuo com alta dissipação térmica, evitando superaquecimento.',
                'Furação padrão original: Medidas e encaixes idênticos aos da peça original Yamaha, sem necessidade de adaptação.',
                'Frenagem consistente: Proporciona frenagem progressiva e segura, reduzindo o desgaste precoce das pastilhas.'
            ]
        }
    };

    const secaoProduto = document.querySelector('.produto');
    const params = new URLSearchParams(window.location.search);
    const prodIdParam = params.get('id');

    // Se houver parâmetro na URL e ele constar no catálogo, atualiza os elementos do DOM dinamicamente
    if (prodIdParam && catalogo[prodIdParam] && secaoProduto) {
        const item = catalogo[prodIdParam];
        document.title = `${item.nome} - VS Moto-Peças`;

        const heroH1 = document.querySelector('.hero h1');
        if (heroH1) heroH1.textContent = item.nome;

        secaoProduto.dataset.id = item.id;
        secaoProduto.dataset.nome = item.nome;
        secaoProduto.dataset.preco = item.preco;
        secaoProduto.dataset.estoque = item.estoque;
        secaoProduto.dataset.imagem = item.imagem;

        const fotos = secaoProduto.querySelectorAll('.foto');
        fotos.forEach(img => {
            img.src = item.imagem;
            img.alt = item.nome;
        });

        const listaUl = secaoProduto.querySelector('ul');
        if (listaUl) {
            listaUl.innerHTML = item.caracteristicas.map(c => `<li>${c}</li>`).join('');
        }
    }

    // Elementos do DOM
    const inputQtd = document.getElementById('quantidade');
    const spanSubtotal = document.getElementById('subtotal-valor');
    const spanEstoque = document.getElementById('estoque-qtd');
    const spanUnitario = document.getElementById('valor-unitario');
    const formCompra = document.getElementById('form-compra');

    // Recupera dados do produto a partir de atributos data-* ou do próprio DOM
    let precoUnitario = 0;
    let estoqueMax = 10;
    let nomeProduto = 'Produto';
    let imagemProduto = '';

    if (secaoProduto) {
        precoUnitario = parseFloat(secaoProduto.dataset.preco) || 0;
        estoqueMax = parseInt(secaoProduto.dataset.estoque, 10) || 10;
        nomeProduto = secaoProduto.dataset.nome || document.querySelector('.hero h1')?.textContent?.trim() || 'Produto';
        imagemProduto = secaoProduto.dataset.imagem || document.querySelector('.foto-desktop')?.getAttribute('src') || '';
    }

    // Atualiza exibição de estoque e preço unitário
    if (spanEstoque) {
        spanEstoque.textContent = estoqueMax;
    }
    if (spanUnitario && precoUnitario > 0) {
        spanUnitario.textContent = precoUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    // Função de manipulação do DOM para cálculo de subtotal e validação de quantidade
    function atualizarSubtotal() {
        if (!inputQtd) return { qtd: 1, total: precoUnitario };

        let qtd = parseInt(inputQtd.value, 10);
        if (isNaN(qtd) || qtd < 1) {
            qtd = 1;
            inputQtd.value = 1;
        } else if (qtd > estoqueMax) {
            alert(`Apenas ${estoqueMax} unidades disponíveis em estoque!`);
            qtd = estoqueMax;
            inputQtd.value = estoqueMax;
        }

        const total = qtd * precoUnitario;
        if (spanSubtotal) {
            spanSubtotal.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
        return { qtd, total };
    }

    if (inputQtd) {
        inputQtd.setAttribute('max', estoqueMax);
        inputQtd.setAttribute('min', 1);
        inputQtd.addEventListener('input', atualizarSubtotal);
        inputQtd.addEventListener('change', atualizarSubtotal);
        atualizarSubtotal();
    }

    // Finalização da compra manipulando sessionStorage e redirecionando
    if (formCompra) {
        formCompra.addEventListener('submit', (e) => {
            e.preventDefault();
            const { qtd, total } = atualizarSubtotal();

            const pedido = {
                id: secaoProduto?.dataset.id || 'pedido',
                nome: nomeProduto,
                imagem: imagemProduto,
                precoUnitario: precoUnitario,
                quantidade: qtd,
                totalSemDesconto: total,
                desconto: total * 0.10,
                totalComDesconto: total * 0.90,
                numeroPedido: `#PED-2026-${Math.floor(10000 + Math.random() * 90000)}`,
                data: new Date().toLocaleDateString('pt-BR')
            };

            sessionStorage.setItem('ultimoPedido', JSON.stringify(pedido));
            window.location.href = './final.html';
        });
    }
});
