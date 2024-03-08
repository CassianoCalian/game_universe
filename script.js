$(document).ready(function () {
  // Aplicando máscara ao telefone
  $("#telefone").mask("(00) 00000-0000");

  // Adicionando método de validação para o telefone
  $.validator.addMethod(
    "telefoneBR",
    function (value, element) {
      return this.optional(element) || /^\(\d{2}\) \d{5}-\d{4}$/.test(value);
    },
    "Por favor, insira um número de telefone válido."
  );

  // Aplicando máscara ao email
  $("#email").mask("A@AAA.AAA");

  // Validando o formulário
  $("#meuForm").validate({
    rules: {
      nome: {
        required: true,
      },
      telefone: {
        required: true,
        telefoneBR: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: {
        required: "Por favor, insira seu nome.",
      },
      telefone: {
        required: "Por favor, insira um número de telefone.",
        telefoneBR: "Por favor, insira um número de telefone válido.",
      },
      email: {
        required: "Por favor, insira um endereço de email.",
        email: "Por favor, insira um endereço de email válido.",
      },
      mensagem: {
        required: "Por favor, insira uma mensagem.",
      },
    },
  });
});
