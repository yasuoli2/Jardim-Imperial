let cart = [];
let cartCount = 0;

function adicionar(button) {
  const product = button.getAttribute("data-product");
  const price = parseFloat(button.getAttribute("data-price"));

  // Check if product already in cart
  const existingItem = cart.find((item) => item.product === product);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product, price, quantity: 1 });
  }

  updateCartCount();
  alert(`${product} adicionado ao carrinho!`);
}

function updateCartCount() {
  cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = cartCount;
}

function updateCartModal() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>";
    cartTotal.innerHTML = "<h5>Total: R$ 0,00</h5>";
    return;
  }

  let itemsHtml = '<div class="list-group">';
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    itemsHtml += `
      <div class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <h6 class="my-0">${item.product}</h6>
          <small class="text-muted">R$ ${item.price.toFixed(2)} cada</small>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-sm btn-outline-secondary me-2" onclick="changeQuantity(${index}, -1)">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary me-2" onclick="changeQuantity(${index}, 1)">+</button>
          <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})">Remover</button>
        </div>
        <span class="text-muted">R$ ${itemTotal.toFixed(2)}</span>
      </div>
    `;
  });

  itemsHtml += "</div>";
  cartItems.innerHTML = itemsHtml;
  cartTotal.innerHTML = `<h5>Total: R$ ${total.toFixed(2)}</h5>`;
}

// Update cart modal when opened
// Moved to inline script after Bootstrap

function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCartCount();
  updateCartModal();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartCount();
  updateCartModal();
}

// Função para enviar contato
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const sendContactBtn = document.getElementById("sendContact");

  if (sendContactBtn) {
    sendContactBtn.addEventListener("click", function () {
      if (contactForm.checkValidity()) {
        const nome = document.getElementById("modalNome").value;
        const email = document.getElementById("modalEmail").value;
        const telefone = document.getElementById("modalTelefone").value;
        const assunto = document.getElementById("modalAssunto").value;
        const mensagem = document.getElementById("modalMensagem").value;

        // Simular envio
        alert(
          `Mensagem enviada!\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`,
        );

        // Fechar modal
        const contactModal = bootstrap.Modal.getInstance(
          document.getElementById("contactModal"),
        );
        contactModal.hide();

        // Limpar formulário
        contactForm.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  }
});

function curtir(element) {
  if (element.classList.contains("liked")) {
    element.classList.remove("liked");
    alert("Produto descurtido!");
  } else {
    element.classList.add("liked");
    alert("Produto curtido!");
  }
}

// Função para enviar contato
document.addEventListener("DOMContentLoaded", function () {
  const sendContactBtn = document.getElementById("sendContact");
  if (sendContactBtn) {
    sendContactBtn.addEventListener("click", function () {
      const contactForm = document.getElementById("contactForm");
      if (contactForm.checkValidity()) {
        const nome = document.getElementById("modalNome").value;
        const email = document.getElementById("modalEmail").value;
        const telefone = document.getElementById("modalTelefone").value;
        const assunto = document.getElementById("modalAssunto").value;
        const mensagem = document.getElementById("modalMensagem").value;

        alert(
          "Mensagem enviada!\nNome: " +
            nome +
            "\nEmail: " +
            email +
            "\nTelefone: " +
            telefone +
            "\nAssunto: " +
            assunto +
            "\nMensagem: " +
            mensagem,
        );

        const contactModal = bootstrap.Modal.getInstance(
          document.getElementById("contactModal"),
        );
        contactModal.hide();

        contactForm.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  }
});
