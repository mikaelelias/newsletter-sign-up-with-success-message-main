function btn_modal_validation() {
    let modal_open = document.querySelector(".modal");
    modal_open.style.display = "block"
}

function close_btn() {
  let close_modal = document.querySelector(".modal");
  close_modal.style.display = "none";
}
function btn_modal_validation() {
    const emailInput = document.querySelector(".input-email");
    const email = emailInput.value;
  
    // Expressão regular para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email && emailRegex.test(email)) {
      // Email válido - abrir a tela modal
      let modal = document.querySelector(".modal");
      modal.style.display = "block";

      let close_html = document.querySelector(".email_field")
      close_html.style.display = "none"

    } else {
      // Email inválido - adicionar lógica de tratamento de erro aqui
      emailInput.classList.add("error");
      // Exemplo de exibição de uma mensagem de erro
      alert("Por favor, insira um endereço de email válido.");
    } 
}

const input = document.querySelector(".input-email"); // seleciona o input 
const span = document.querySelector(".span_email");  // seleciona a tag do span

// adicionando um ouvinte no inpit//
input.addEventListener("input", function(){
  const valor = input.value;
  span.textContent = valor
})

function changerBackgroudColor() {
  var element = document.querySelector(".")
}