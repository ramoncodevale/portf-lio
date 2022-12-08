// Modo Dark 
const check = document.getElementById('check');

check.addEventListener('change', ()=>{
    document.body.classList.toggle('dark')
    link.style.color = 'white'
})

// Efeito Scroll

window.sr = ScrollReveal({ reset: true});

sr.reveal('.titulo-inicio', { duration: 1000 });

sr.reveal('.paragrafo-desenvolvedor',{
    rotate: { x: 0,y: 80, z: 0},
    duration: 2000
});

sr.reveal('.minha-foto',{
    rotate: { x: 100, y: 100, z:0},
    duration: 2000, 
});

sr.reveal('.titulo-sobre-mim',{
    duration: 2000, 
});


sr.reveal('.texto-sobre-mim',{
    duration: 3000, 
});

sr.reveal('.btn-1',{
    duration: 2000, 
});


sr.reveal('.btn-2',{
    duration: 2000, 
});

sr.reveal('.-habilidades',{
    duration: 2000, 
});

sr.reveal('.titulo-habilidades',{
    duration: 2000, 
});

sr.reveal('.card-habilidades',{
    duration: 2000, 
    rotate: { x: 200, y: 100, z:0},
});

sr.reveal('.container-projetos',{
    duration: 4000, 
});

sr.reveal('.titulo-projeto',{
    duration: 3000, 
});

sr.reveal('.card-projeto',{
    duration: 4000, 
});









