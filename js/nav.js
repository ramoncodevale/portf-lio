const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
if (event.type === 'touchstart') event.prevaultDefault();
const nav = document.getElementById('nav');
nav.classList.toggle('active');
const active = nav.classList.contains('active');
event.currentTarget.setAttribute('aria-expanded', 'true');
if (active) {
    event.Target.setAttribute('aria-label', 'Fechar Menu');
} else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
}
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
