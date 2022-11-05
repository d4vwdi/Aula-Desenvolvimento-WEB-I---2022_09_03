function validar(){
    let cpf = cadastro.cpf.value
    let senha = cadastro.senha.value
    let confirmsenha = cadastro.confirmsenha.confirmsenha

    if(isNaN(cpf)){
        alert("Informe apenas números para o campo CPF")
        cadastro.cpf.focus()
        return false
    }

    if(senha != confirmsenha){
        alert("Senhas não conferem")
        cadastro.senha.focus()
        return false
    }
}