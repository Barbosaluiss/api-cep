const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputCidade = document.querySelector("#cidade");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");

inputCep.addEventListener('keyup', async ()=>{
    if(inputCep.value.length == 8){
        const res = await fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`, {
            method: "GET",
            body: {

            }
        })
        const data = await res.json()

        inputRua.value = data.logradouro
        inputCidade.value = data.localidade
        inputBairro.value = data.bairro
        inputUF.value = data.uf 
    }
})