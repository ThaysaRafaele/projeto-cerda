document.getElementById("botaoAcessar").addEventListener("click", ValidaFormulario) //define o evento ao clicar, chama a função de validar o formulário.

function ValidaFormulario () //Essa função emite um alerta caso todos os campos estejam vazios
{
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "")
  {
    //alert("Prontinho! Você receberá as novidades por email.")
  }
  else
  {
    alert("Por favor, preencha os campos Nome e Email!")
  }
}

/*document.querySelector("a.Endereco").addEventListener("click", ValidaEndereco)
function ValidaEndereco ()
{
  alert("Cliquei no Endereço!")
}*/