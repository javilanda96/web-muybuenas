/* Navegación móvil. Único JS de las páginas de producto: si esto falla,
   la web sigue siendo legible y navegable. Regla del kit: el contenido
   NUNCA depende de JavaScript (es el error que se corrigió respecto a
   la home de Landthor, donde el texto vivía dentro de un runtime JS). */
(function () {
  var toggle = document.querySelector('.oz-nav-toggle');
  var links = document.querySelector('.oz-nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* Barra de CTA persistente. Se muestra cuando la portada queda atrás y se
   esconde al llegar al formulario de contacto: si ya estás en el sitio al
   que te lleva el botón, la barra sobra y solo tapa. */
(function () {
  var bar = document.querySelector('.oz-stickybar');
  var hero = document.querySelector('.oz-hero');
  var destino = document.getElementById('contacto');
  if (!bar || !hero) return;

  function actualizar() {
    var portadaAtras = hero.getBoundingClientRect().bottom < 120;
    var destinoALaVista = destino
      ? destino.getBoundingClientRect().top < window.innerHeight * 0.85
      : false;
    var mostrar = portadaAtras && !destinoALaVista;
    bar.classList.toggle('is-visible', mostrar);
    bar.setAttribute('aria-hidden', mostrar ? 'false' : 'true');
  }

  window.addEventListener('scroll', actualizar, { passive: true });
  window.addEventListener('resize', actualizar);
  actualizar();
})();
