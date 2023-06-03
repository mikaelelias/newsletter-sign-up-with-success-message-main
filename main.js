function btn_modal_validation() {
    let modal_open = document.querySelector(".modal");
    modal_open.style.display = "block"

    let html = document.querySelector(".container");
    html.style.display = "none";
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
  
  function close_btn() {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

function close_btn() {
    let close_modal = document.querySelector(".modal");
    close_modal.style.display = "none"
}

