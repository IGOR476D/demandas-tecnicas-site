// script.js
// Update the footer year dynamically
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    const year = new Date().getFullYear();
    yearEl.textContent = year;
  }
  // Attach copy functionality to each copy button
  const copyButtons = document.querySelectorAll('.copy-button');
  copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const codeBlock = button.nextElementSibling;
      if (codeBlock) {
        const codeText = codeBlock.textContent;
        // Create a temporary textarea to copy text
        const tempText = document.createElement('textarea');
        tempText.value = codeText;
        document.body.appendChild(tempText);
        tempText.select();
        try {
          document.execCommand('copy');
          button.textContent = 'Copiado!';
          setTimeout(() => {
            button.textContent = 'Copiar';
          }, 2000);
        } catch (err) {
          console.error('Falha ao copiar o código', err);
        }
        document.body.removeChild(tempText);
      }
    });
  });
});