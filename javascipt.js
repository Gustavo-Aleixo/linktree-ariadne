function copyEmail(event) {
  event.preventDefault();

  const button = event.currentTarget;
  const originalContent = button.innerHTML;

  // Salvar texto original do botão (caso queira restaurar depois)
  const originalText = button.textContent.trim();

  // 📋 Copiar e-mail pro clipboard
  const email = button.getAttribute("data"); // <- você define esse atributo no HTML
  if (email) {
    navigator.clipboard.writeText(email).catch((err) => {
      console.error("Erro ao copiar:", err);
    });
  }

  // Criar container para a animação deslizante
  button.style.position = "relative";
  button.style.overflow = "hidden";

  const overlay = document.createElement('div');
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "#02A95C";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.transform = "translateX(-100%)";
  overlay.style.transition = "transform 0.9s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
  overlay.textContent = "Texto copiado";
  overlay.style.color = "rgb(255, 255, 255)";
  overlay.style.fontWeight = "700";

  button.appendChild(overlay);

  // Anima entrada
  setTimeout(() => {
    overlay.style.transform = "translateX(0)";
  }, 10);

  // Remove depois de 2 segundos
  setTimeout(() => {
    overlay.style.transform = "translateX(100%)";
    setTimeout(() => {
      button.removeChild(overlay);
    }, 500);
  }, 2000);
}
