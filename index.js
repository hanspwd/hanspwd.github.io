function moverBotonNo() {
    const btnNo = document.getElementById('btn-no');
    const vv = window.visualViewport;

    // Definimos la resolución estándar deseada
    const anchoLimite = 1280;
    const altoLimite = 720;

    // Calculamos el área disponible real (no podemos moverlo a 1280 si la pantalla es de 800)
    // Así que usamos el mínimo entre la resolución estándar y el tamaño de la pantalla actual
    const areaAncho = Math.min(anchoLimite, vv.width);
    const areaAlto = Math.min(altoLimite, vv.height);

    // Margen de seguridad interno
    const padding = 20;

    /* Calculamos el origen (X, Y) para que el área de 1280x720 esté centrada 
       respecto a lo que el usuario está viendo actualmente.
    */
    const centroX = vv.offsetLeft + (vv.width / 2);
    const centroY = vv.offsetTop + (vv.height / 2);

    const minX = centroX - (areaAncho / 2) + padding;
    const minY = centroY - (areaAlto / 2) + padding;
    const maxX = centroX + (areaAncho / 2) - btnNo.offsetWidth - padding;
    const maxY = centroY + (areaAlto / 2) - btnNo.offsetHeight - padding;

    // Generamos la posición aleatoria dentro de este "cuadro estándar" centrado
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
    btnNo.style.zIndex = "999";
}