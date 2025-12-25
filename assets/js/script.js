
// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================
const btnTopo = document.getElementById('voltar-topo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.classList.add('mostrar');
  } else {
    btnTopo.classList.remove('mostrar');
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// ===============================
// DARK MODE
// ===============================
const btnTema = document.getElementById('tema');

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

//CONVERTER CODIGO EM TEXTO=============


  document.querySelectorAll('pre code').forEach(bloco => {
    bloco.textContent = bloco.innerHTML;
  });

