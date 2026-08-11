/* Calculadora de dinero perdido.
 *
 * REGLA DE HONESTIDAD: aquí no hay ni una estadística de sector inventada.
 * Todos los valores los pone el hostelero moviendo los deslizadores; los
 * valores de partida son solo una posición inicial, rotulada como tal en la
 * página. El número que sale es SUYO, no una promesa de ahorro nuestra.
 *
 * El HTML ya trae calculado el resultado de los valores de partida, así que
 * si este script no carga la sección sigue teniendo sentido: se ven los
 * datos, el número y el argumento. La interactividad es una mejora, no un
 * requisito (regla del kit: el contenido nunca depende de JavaScript).
 */
(function () {
  var calc = document.querySelector('[data-calculadora]');
  if (!calc) return;

  var campos = {
    llamadas: calc.querySelector('#calc-llamadas'),
    noVuelven: calc.querySelector('#calc-no-vuelven'),
    personas: calc.querySelector('#calc-personas'),
    ticket: calc.querySelector('#calc-ticket'),
    noShows: calc.querySelector('#calc-no-shows')
  };
  for (var k in campos) { if (!campos[k]) return; }

  var salidas = {
    llamadas: calc.querySelector('#out-llamadas'),
    noVuelven: calc.querySelector('#out-no-vuelven'),
    personas: calc.querySelector('#out-personas'),
    ticket: calc.querySelector('#out-ticket'),
    noShows: calc.querySelector('#out-no-shows')
  };

  var total = calc.querySelector('#calc-total');
  var porTelefono = calc.querySelector('#calc-por-telefono');
  var porNoShow = calc.querySelector('#calc-por-no-show');
  var reservasPerdidas = calc.querySelector('#calc-reservas-perdidas');

  var euros = new Intl.NumberFormat('es-ES', {
    style: 'currency', currency: 'EUR',
    minimumFractionDigits: 0, maximumFractionDigits: 0
  });
  var numero = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 });

  function calcular() {
    var llamadasSemana = +campos.llamadas.value;
    var noVuelvenDe10 = +campos.noVuelven.value;
    var personas = +campos.personas.value;
    var ticket = +campos.ticket.value;
    var noShowsMes = +campos.noShows.value;

    // Reservas que se pierden al año porque nadie cogió el teléfono
    var reservasAno = llamadasSemana * 52 * (noVuelvenDe10 / 10);
    var perdidoTelefono = reservasAno * personas * ticket;
    // Mesas que se quedan vacías porque el cliente no aparece
    var perdidoNoShow = noShowsMes * 12 * personas * ticket;

    salidas.llamadas.textContent = numero.format(llamadasSemana) + ' a la semana';
    salidas.noVuelven.textContent = numero.format(noVuelvenDe10) + ' de cada 10';
    salidas.personas.textContent = numero.format(personas) + (personas === 1 ? ' persona' : ' personas');
    salidas.ticket.textContent = euros.format(ticket) + ' por persona';
    salidas.noShows.textContent = numero.format(noShowsMes) + ' al mes';

    total.textContent = euros.format(Math.round(perdidoTelefono + perdidoNoShow));
    porTelefono.textContent = euros.format(Math.round(perdidoTelefono));
    porNoShow.textContent = euros.format(Math.round(perdidoNoShow));
    reservasPerdidas.textContent = numero.format(Math.round(reservasAno));
  }

  for (var campo in campos) {
    campos[campo].addEventListener('input', calcular);
  }
  calcular();
})();
