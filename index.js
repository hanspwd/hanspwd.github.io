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
    
    // Usamos el tamaño de la ventana actual
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    // Definimos un margen interno (padding) para que nunca toque los bordes físicos
    const padding = 80; 

    // Calculamos posiciones aleatorias asegurando que el botón + su ancho queden dentro
    // Math.max(padding, ...) evita que se vaya a números negativos a la izquierda
    const x = Math.max(padding, Math.random() * (anchoVentana - btnNo.offsetWidth - padding));
    const y = Math.max(padding, Math.random() * (altoVentana - btnNo.offsetHeight - padding));
    
    // Aplicamos la posición
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    btnNo.style.zIndex = "999";
}

function agrandarBotonSi() {
    const btnSi = document.getElementById('btn-si');
    const escalaLimite = 9; // Límite generoso para que crezca mucho

    if (escalaSi < escalaLimite) {
        escalaSi += 0.35; 
        btnSi.style.transform = `scale(${escalaSi})`;
    }
    
    if(escalaSi >= 3 && !alertaMostrada) {
        alert("DALE A QUE SÍ DESGRACIADA AGHJHGGHGH");
        alertaMostrada = true;
    }
}

function aceptarPololeo() {
    const musica = document.getElementById('musica');
    if(musica.paused) musica.play();
    
    document.getElementById('main-card').classList.add('hidden');
    document.getElementById('success-card').classList.remove('hidden');
    
    // Permitir scroll y cambiar alineación
    document.body.style.alignItems = "flex-start";
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
    
    document.body.style.background = "linear-gradient(135deg, #e1f5fe, #f3e5f5)";
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    generarLluvia();
}

function irAPregunta13() {
    document.getElementById('success-card').classList.add('hidden');
    document.getElementById('question-13-card').classList.remove('hidden');
    document.body.style.alignItems = "center";
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