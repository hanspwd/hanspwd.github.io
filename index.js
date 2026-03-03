let escalaSi = 1;
let alertaMostrada = false;

function accionarBotones() {
    const musica = document.getElementById('musica');
    moverBotonNo();
    agrandarBotonSi();
    if(musica.paused) musica.play().catch(e => console.log("Audio esperando interacción"));
}

function moverBotonNo() {
    const btnNo = document.getElementById('btn-no');
    
    // Usamos visualViewport para saber exactamente qué ve el usuario (con o sin zoom)
    const vv = window.visualViewport;
    const padding = 20;

    // Calculamos los límites dentro del área visible actual
    const minX = vv.offsetLeft + padding;
    const minY = vv.offsetTop + padding;
    const maxX = vv.offsetLeft + vv.width - btnNo.offsetWidth - padding;
    const maxY = vv.offsetTop + vv.height - btnNo.offsetHeight - padding;

    // Generamos la posición aleatoria asegurando que esté en el rango visible
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
    btnNo.style.zIndex = "999";
}

function agrandarBotonSi() {
    const btnSi = document.getElementById('btn-si');
    const rect = btnSi.getBoundingClientRect();
    const maxEscalaAncho = (window.innerWidth * 0.85) / rect.width;
    const maxEscalaAlto = (window.innerHeight * 0.85) / rect.height;
    const escalaLimite = Math.min(maxEscalaAncho, maxEscalaAlto, 3.5);

    if (escalaSi < escalaLimite) {
        escalaSi += 0.25; 
        btnSi.style.transform = `scale(${escalaSi})`;
    }
    
    if(escalaSi >= 2.5 && !alertaMostrada) {
        alert("DALE A QUE SÍ DESGRACIADA AGHJHGGHGH");
        alertaMostrada = true;
    }
}

function aceptarPololeo() {
    const musica = document.getElementById('musica');
    if(musica.paused) musica.play();
    
    document.getElementById('main-card').classList.add('hidden');
    document.getElementById('success-card').classList.remove('hidden');
    
    document.body.style.background = "linear-gradient(135deg, #e1f5fe, #f3e5f5)";
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
    
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    generarLluvia();
}

function irAPregunta13() {
    document.getElementById('success-card').classList.add('hidden');
    document.getElementById('question-13-card').classList.remove('hidden');
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.style.overflowY = "hidden";
}

function finalRespuesta(acepta) {
    document.getElementById('question-13-card').classList.add('hidden');
    document.body.style.overflowY = "auto"; 
    
    if(acepta) {
        document.getElementById('final-yes-card').classList.remove('hidden');
        generarLluvia();
    } else {
        document.getElementById('final-no-card').classList.remove('hidden');
    }
}

function generarLluvia() {
    const elementos = ['💜', '✨', '❤️', '🌸'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.classList.add('heart');
            drop.innerHTML = elementos[Math.floor(Math.random() * elementos.length)];
            drop.style.left = Math.random() * 100 + 'vw';
            drop.style.fontSize = (Math.random() * 20 + 30) + 'px';
            drop.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(drop);
            setTimeout(() => drop.remove(), 4000);
        }, i * 100);
    }
}
