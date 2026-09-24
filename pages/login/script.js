const validarLogin = (event) => {
    event.preventDefault();
    // Pego os dados dos inputs
    const emailDigitado = document.getElementById('login-login').value.trim();
    const senhaDigitada = document.getElementById('senha-senha').value;

    // 1. Pego a lista existente e transformo em array (caso não exista, uso []);
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuariosSalvos.find(
        (user) => user.email === emailDigitado && user.senha === senhaDigitada
    );

    if (usuarioEncontrado || (emailDigitado === 'admin@vsmoto.com' && senhaDigitada === 'admin') || (emailDigitado === 'admin' && senhaDigitada === 'admin')) {
        const nomeUsuario = usuarioEncontrado ? usuarioEncontrado.nome : "Administrador";
        alert("Login realizado com sucesso! Bem-vindo, " + nomeUsuario + "!");
        window.location.href = '../../index.html';
    } else {
        alert("E-mail ou senha incorretos.");
    }
};