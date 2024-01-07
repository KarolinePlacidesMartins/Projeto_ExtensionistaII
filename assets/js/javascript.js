//botao
botao = document.getElementById("botaoEnviar");
botao.addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("nomeEcoponto").value != "" &&
    document.getElementById("diasColeta").value != "" &&
    document.getElementById("cidade").value != "" &&
    document.getElementById("bairro").value != "" &&
    document.getElementById("cep").value != "" &&
    document.getElementById("pontoReferencia").value != "" &&
    document.getElementById("celular").value != ""
  ) {
    alert("Cadastro efetuado com sucesso");
  } else {
    alert("Por favor, preencha os campos obrigatórios!");
  }
}
