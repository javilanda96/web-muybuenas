# Checklist de publicación — webs de producto

Ninguna web de producto se publica sin pasar esta lista entera. Se rellena y se
guarda con fecha y firma en el propio repo de la web.

Web: `________________`  ·  Fecha: `________`  ·  Revisado por: `________`

---

## 1. Guardrail §12 — qué NO puede decir la página

Fuente: `auditoria/INFORME_OTEYZERENA_2026-07-20.md` §12. Estas frases no aparecen
en la web ni en sus metadatos, ni en el texto alternativo de las imágenes.

- [ ] **No** se dice "IA" en ninguna app que no sea el Bot. La única IA nombrable es la conversacional de MuyBuenas. La previsión de demanda del CRM se llama "modelos explicables" o "contexto", nunca IA.
- [ ] **No** se dice "channel manager". Lo que hay es sincronización iCal unidireccional con detección de overbooking.
- [ ] **No** se nombran TheFork, Google Reserve ni ninguna OTA como integración. Están modeladas en base de datos, no integradas.
- [ ] **No** se dice "escandallo", "food cost" ni "coste por ración" en Obrador hasta que exista.
- [ ] **No** se dice "PMS dentro del CRM". El PMS es de Reservas.
- [ ] **No** se dice "aislamiento multi-tenant completo" ni "inicio de sesión único".
- [ ] **No** hay métricas de tracción, "base instalada", número de clientes ni "+X restaurantes confían en nosotros". El uso real es esencialmente propio.
- [ ] **No** se cita Kit Digital con la cifra de 29.000 €. El bono del cliente-tipo es de 3.000 a 12.000 €.
- [ ] Cada cifra de la página se puede señalar en un documento o en el código. Si no, se quita.

## 2. Marca

- [ ] El endoso "parte del ecosistema OTEYZERENA" aparece en cabecera y en pie.
- [ ] Registro `[PÚBLICO · N1]`: ningún lenguaje confesional, ninguna cita de la encíclica. Eso vive solo en el manifiesto del fundador.
- [ ] Tono: sin "revolucionario", "disruptivo", "mágico", "la IA que lo cambia todo". Sin "usuarios", "recursos" ni "capital humano" — se dice personas, equipo, sala, cocina.
- [ ] Enlace de vuelta a `oteyzerena.com` funcionando.

## 3. Casos de cliente

- [ ] Cada caso lleva su sello: **Cliente cero** (local propio de un socio) o **Cliente** (independiente). Ver `marketing/web/convencion-casos-cliente-cero.md`.
- [ ] Si es cliente cero, la relación societaria se declara **en el propio caso**, no en una nota al pie.
- [ ] Si es cliente independiente: consentimiento por escrito guardado, con permiso explícito para nombre, logotipo y cifras.
- [ ] Ninguna foto identifica a clientes finales sin permiso.

## 4. Legal y datos

- [ ] Aviso legal publicado, con la razón social real.
- [ ] Política de privacidad publicada, con base legal, plazo de conservación y ejercicio de derechos.
- [ ] Política de cookies publicada y banner que permite rechazar tan fácil como aceptar.
- [ ] El formulario tiene casilla de consentimiento **sin premarcar** y enlaza a privacidad.
- [ ] Se sabe dónde acaba el lead y quién lo trata.

## 5. Técnico

- [ ] Todo el contenido está en el HTML servido. Nada de texto que dependa de JavaScript.
- [ ] Ninguna imagen supera 200 KB; el vídeo, si lo hay, 1,5 MB. Todo en WebP salvo el favicon.
- [ ] La página no hace scroll horizontal a 375 px de ancho.
- [ ] `title`, `description`, canonical, Open Graph y tarjeta social propios de esta web.
- [ ] JSON-LD de tipo `SoftwareApplication` con `publisher` OTEYZERENA.
- [ ] `robots.txt` y `sitemap.xml` propios y correctos.
- [ ] Contraste de texto suficiente y animaciones respetando `prefers-reduced-motion`.
- [ ] Formulario probado de punta a punta: se envía, llega y se responde.
- [ ] Los enlaces externos (SOTO del PRIOR, MONTAGU, OTEYZERENA) resuelven de verdad y llevan `rel="noopener"`.
- [ ] La barra de CTA persistente aparece al pasar la portada, se retira al llegar al formulario y no tapa nada en móvil. **Probar en un navegador real, no solo en un panel de vista previa.**

## 6. Última puerta

- [ ] **OK explícito de Javier.** Sin esto no se publica, aunque todo lo demás esté en verde.
