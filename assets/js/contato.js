let cliente = document.querySelector('.cliente');
let parceiro = document.querySelector('.parceiro');

cliente.addEventListener('mouseenter', () => {
  if(cliente.classList.contains('active') == false) {
    cliente.classList.add('active');
    parceiro.classList.remove('active');
    document.querySelector('input.cliente').click();
  }
});
parceiro.addEventListener('mouseenter', () => {
  if(parceiro.classList.contains('active') == false) {
    parceiro.classList.add('active');
    cliente.classList.remove('active');
    document.querySelector('input.parceiro').click();
  }
});