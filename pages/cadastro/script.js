const cadastrarUsuario = (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const confirmSenha = document.getElementById('confirme');
    const docRG = document.getElementById('docRG');
    const docCPF = document.getElementById('docCPF');
    const endereco = document.getElementById('endereco');
    const cep = document.getElementById('cep');
    const cidade = document.getElementById('city');
    const estado = document.getElementById('estado');
    const pais = document.getElementById('pais');
    const nascimento = document.getElementById('nascimento');

    // Validação de confirmação de senha
    if (senha.value !== confirmSenha.value) {
        alert("As senhas digitadas não coincidem. Por favor, verifique.");
        confirmSenha.focus();
        return;
    }

    // 1. Pego a lista existente e transformo em array (caso não exista, uso [])
    const listaRecuperada = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se já existe um usuário com o mesmo email
    const emailExistente = listaRecuperada.some(u => u.email === email.value.trim());
    if (emailExistente) {
        alert("Já existe uma conta cadastrada com este e-mail.");
        email.focus();
        return;
    }

    // 2. Adiciona o novo usuário mantendo os dados existentes
    const novoUsuario = {
        nome: nome.value.trim(),
        email: email.value.trim(),
        senha: senha.value,
        RG: docRG.value,
        CPF: docCPF.value,
        endereco: endereco.value,
        cep: cep.value,
        cidade: cidade.value,
        estado: estado.value,
        pais: pais ? pais.value : '',
        datadenascimento: nascimento ? nascimento.value : ''
    };

    const novaLista = [...listaRecuperada, novoUsuario];

    // 3. Salvo os dados no localStorage com os dados antigos + novos dados
    localStorage.setItem("usuarios", JSON.stringify(novaLista));

    alert("Cadastro realizado com sucesso! Faça seu login.");
    window.location.href = "../login/login.html";
};