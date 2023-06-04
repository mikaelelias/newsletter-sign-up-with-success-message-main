function btn_modal_validation_open() {
    let modal_open = document.querySelector(".modal");
    modal_open.style.display = "block"
}

function close_html() {
    let close_email_field = document.querySelector(".email_field");
    close_email_field.style.display ="none";
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
    } else {
      // Email inválido - adicionar lógica de tratamento de erro aqui
      emailInput.classList.add("error");
      // Exemplo de exibição de uma mensagem de erro
      alert("Por favor, insira um endereço de email válido.");
    }
}

  var capturing = "";

  function capture(){
      capturing = document.querySelector(".input-email").value;
      document.getElementById('id_email').innerHTML = capturing;
  }
  
  function close_btn() {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

function close_btn() {
    let close_modal = document.querySelector(".modal");
    close_modal.style.display = "none"
}

