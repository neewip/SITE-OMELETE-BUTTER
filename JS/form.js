//Definir as variaveis de formulário que serão usadas para validação

let form = document.querySelector("#form")
let primeiroNome = document.querySelector("#fname")
let segundoNome = document.querySelector("#lname") 
let meuEndereco = document.querySelector("#endereco")
let datadodia = new Date() // obtem a data do dia no sistema
let datfoco = document.querySelector("#dataNasc") //apenas para dar foco no input se der erro
let meuBairro = document.querySelector("#bairro") //apenas para dar foco no input se der erro
let meuCidade = document.querySelector("#cidade") //apenas para dar foco no input se der erro



form.addEventListener("submit", (event) => {
    event.preventDefault();


    param = meuCidade.value //obtem o valor contido no input digitado pelo usuário
if (meuCidade.value === "" || validaTexto(param)) {
    alert("Erro na Cidade")
    meuCidade.focus();
    return;
}    

    param = meuBairro.value //obtem o valor contido no input digitado pelo usuário
if (meuBairro.value === "" || validaTexto(param)) {
    alert("Erro no Bairro")
    meuBairro.focus();
    return;
}

    //valida se o campo Nome está preenchido corretamente
param = primeiroNome.value //obtem o valor contido no input digitado pelo usuário
if (primeiroNome.value === "" || validaTexto(param)) {
    alert("Erro no Primeiro nome!")
    primeiroNome.focus();
    return;
}

//Valida se o campo Segundo Nome está preenchido corretamente
param = segundoNome.value 
if (segundoNome.value === "" || validaTexto(param)) {
    alert("Erro no Segundo nome!")
    segundoNome.focus()
    return;
}

//Valida se o campo Endereço está preenchido corretamente

param = meuEndereco.value
if (meuEndereco.value === "" || validaTexto(param)) {
    alert ("Erro no Endereço!")
    meuEndereco.focus();
    return;
}

let datausr = document.getElementById ("dataNasc").valueAsDate; //obtem o valor da data digitado no formulário
//Verifica se a data de nascimento digitada é maior que a data do dia
if (datausr === "" || datausr > datadodia) {
    alert("Erro na data de Nascimento")
    datafoco.focus();
    return;
}

//Se todos os campos estivem preenchidos corretamente nosso formulário envia os dados
form.submit()
});

//função para validação de texto a partir de um parametro enviado
function validaTexto(param) {
    let teste = '[@*&%$#!0-9]' // relação de caracteres que não podem existir no campo a ser validado
    let tam = param.length //tamanho do campo a ser validado
    let verifica = 0 //esta variável ser para verificar se houve algum erro de validação
    for (let i = 0; i <= tam; i++) { //laço para varrer todos os caracteres campo a ser validado
        j = i + 1
        res1 = param.slice(i, j) //função slice serve para manipular pedaços de string
        if (res1.match(teste)) { //função match verifica se o caracter a ser validado está dentro da lista teste
        return true;
        verifica = 1
        break;
        }
    }


if (verifica != 1) { //se houve erro de validação retorna false para a função 
    return false
}
}