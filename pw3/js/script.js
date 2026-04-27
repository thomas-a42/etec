function validarLogin(){
    let login = document.getElementById('login').value; 
    let senha = document.getElementById('senha').value; 

    if (login === 'admin' && senha === 'senhafoda') {
        alert("Seja bem vindo, " + login);
        window.location.href = 'produtos.html'
    } else {
        alert(`Usuário ou senha inválidos, tente novamente.`);
    }   
}
