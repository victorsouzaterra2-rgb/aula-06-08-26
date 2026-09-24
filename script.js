const containerCard = document.getElementById('sectionIdScript');

const prodCard = [
    {
        id: 1,
        imagemRef: './images/farol-150.jpg',
        nome: 'Farol Crosser 150',
        descricao: 'Farol Original Yamaha Crosser 150',
        nota: '#4.9',
        preco: 'R$2.990,00',
        link: './pages/produto-farol.html'
    },
    {
        id: 2,
        imagemRef: './images/cabecote-150.jpg',
        nome: 'Cabeçote Crosser 150',
        descricao: 'Cabeçote Crosser 150 Original',
        nota: '#4.9',
        preco: 'R$1.790,00',
        link: './pages/produto-cabecote.html'
    },
    {
        id: 3,
        imagemRef: './images/amortecedor-scud-c-150.jpg',
        nome: 'Suspensão Crosser 150',
        descricao: 'Suspensão Crosser 150 Scud',
        nota: '#4.9',
        preco: 'R$469,90',
        link: './pages/produto.html'
    },
    {
        id: 4,
        imagemRef: './images/disco de freio.jpg',
        nome: 'Disco de freio Crosser 150',
        descricao: 'Disco de Freio Crosser 150',
        nota: '#4.9',
        preco: 'R$159,90',
        link: './pages/produto-disco.html'
    }
];

if (containerCard) {
    containerCard.innerHTML = '';
    prodCard.forEach((itens) => {
        containerCard.insertAdjacentHTML('beforeend', `
            <article class="card-prod" id="card-prod-${itens.id}">
                <img class="img-prod" src="${itens.imagemRef}" alt="${itens.nome}">
                <div class="button-container">
                    <div class="button-text-container">
                        <div>
                            <h2 class="card-h2">${itens.nome}</h2>
                            <p class="card-p">${itens.descricao}</p>
                        </div>
                        <div class="rating">
                            <b>${itens.nota}</b>
                        </div>
                    </div>
                    <div class="value-pay">
                        <h2 class="card-h2">${itens.preco}</h2>
                        <a href="${itens.link}">
                            <button class="card-buy" type="button">Comprar!</button>
                        </a>
                    </div>
                </div>
            </article>
        `);
    });
}

const containerPai = document.getElementById('produtos1');

const produtos = [
    {
        id: 1,
        nome: 'Suspensão Yamaha crosser 150',
        preco: 'R$469,90',
        descricao: 'Encaixe padrão original: Fabricado com medidas exatas de 37cm e 8 elos, permitindo substituição direta, sem necessidades de adaptações.',
        descricaoDois: 'Resistência e conforto: Desenvolvido com materiais metálicos resistentes para absorver impactos severos no uso urbano diário ou offroad.',
        descricaoTres: 'Garantia de fabrica: Oferece 3 meses de garantia contra defeitos de fabricação, acompanha as buchas necessárias para a instalação.',
        imagemRef: './images/amortecedor-scud-c-150.jpg',
        link: './pages/produto.html'
    },
    {
        id: 2,
        nome: 'Farol dianteiro Yamaha Crosser 150',
        preco: 'R$2.990,00',
        descricao: 'Tecnologia Full LED: Iluminação total em LED para maior durabilidade e economia de bateria.',
        descricaoDois: 'Farol com Projetor: Facho de luz focado que melhora o alcance na estrada e evita dispersão.',
        descricaoTres: 'Luz de rodagem diurna integrada que aumenta a visibilidade da moto durante o dia.',
        imagemRef: './images/farol-150.jpg',
        link: './pages/produto-farol.html'
    },
    {
        id: 3,
        nome: 'Cabeçote Crosser 150',
        preco: 'R$1.790,00',
        descricao: 'Comando SOHC: Possui um único comando de válvulas no cabeçote que controla a admissão e o escape, ideal para entregar força em baixas e médias rotações.',
        descricaoDois: 'Duas Válvulas: Conta com uma válvula de admissão e uma válvula de escape otimizadas para o uso misto (cidade e terra).',
        descricaoTres: 'Compatibilidade: O desenho do cabeçote é compartilhado com outros motores de 150cc da marca, como a Yamaha Fazer 150, o que facilita a reposição de peças.',
        imagemRef: './images/cabecote-150.jpg',
        link: './pages/produto-cabecote.html'
    },
    {
        id: 4,
        nome: 'Disco de freio Crosser 150',
        preco: 'R$159,90',
        descricao: 'Aço Inox de alta resistência: Desenvolvido para suportar atrito contínuo com alta dissipação térmica, evitando superaquecimento.',
        descricaoDois: 'Furação padrão original: Medidas e encaixes idênticos aos da peça original Yamaha, sem necessidade de adaptação.',
        descricaoTres: 'Frenagem consistente: Proporciona frenagem progressiva e segura, reduzindo o desgaste precoce das pastilhas.',
        imagemRef: './images/disco de freio.jpg',
        link: './pages/produto-disco.html'
    }
];

if (containerPai) {
    containerPai.innerHTML = `<h2>Nossos Produtos</h2>`;
    produtos.forEach((item) => {
        containerPai.insertAdjacentHTML('beforeend', `
            <article class="produto-item">
                <h3>${item.nome}</h3>
                <img class="foto foto-mobile" src="${item.imagemRef}" alt="${item.nome}">
                <img class="foto foto-tablet" src="${item.imagemRef}" alt="${item.nome}">
                <img class="foto foto-desktop" src="${item.imagemRef}" alt="${item.nome}">
                <ul>
                    <li>${item.descricao}</li>
                    <li>${item.descricaoDois}</li>
                    <li>${item.descricaoTres}</li>
                </ul>
                <b>Valor: ${item.preco}</b>
                <a href="${item.link}">
                    <button class="button-buy" type="button">Comprar!</button>
                </a>
            </article>
        `);
    });
}