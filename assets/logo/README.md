# Logotipo MuyBuenas

## Qué hay aquí

- **`wordmark.svg`** — "MuyBuenas" en Anton, con la exclamación en color brasa.
  El logotipo completo, para cabecera y pie. Autocontenido: lleva la tipografía
  incrustada en base64, así que funciona como `<img>` en cualquier sitio, cargue
  o no la página Google Fonts.
- **`symbol.svg`** — solo la exclamación, sobre fondo brasa. Es el favicon y el
  icono de app. Dibujado a mano en vector (dos rectángulos con las esquinas
  redondeadas y un giro de 5°), sin depender de ninguna fuente: pesa menos de
  1 KB y se ve igual en cualquier motor de renderizado.
- **`symbol-sobre-papel.svg`** — la misma marca, invertida, para fondos claros
  (cabeceras de documento, merchandising).

## La idea

El nombre ya es un saludo — es lo que dice quien coge el teléfono. Por eso el
símbolo no es un icono inventado (nada de ondas de sonido ni auriculares de
teleoperador, que es lo que usa toda la competencia de este sector: Slang.ai,
Loman, Sadie…): es la exclamación del propio nombre, "MuyBuenas!", que en la
documentación interna del bot ya se escribe así.

Detalle de por qué el símbolo funciona a tamaño de favicon (16 px): son solo
dos formas simples de alto contraste, sin detalle fino que se pierda al
reducir. Se comprobó midiendo la geometría exacta antes de darlo por bueno —
ver la nota de cálculo más abajo.

## Cómo se usa

```html
<!-- Logotipo, en cabecera o pie -->
<img class="oz-brand-logo" src="assets/logo/wordmark.svg" width="106" height="34" alt="MuyBuenas">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="assets/logo/symbol.svg">
```

`oz-brand-logo` (34 px de alto) y `oz-footer-logo` (28 px) ya están en
`base.css`. La proporción del wordmark es 441:142 (≈3,1:1) — si cambias el
alto, calcula el ancho con esa proporción para que no se deforme.

## Pendiente: rasters PNG

Este sistema es 100% vectorial. Faltan los rasters PNG para los contextos que
no aceptan SVG:

- `apple-touch-icon` (180×180)
- `favicon.ico` clásico (16/32/48, para navegadores muy antiguos)
- `symbol-512.png` (PWA, redes sociales)

No se pudieron generar aquí por falta de un rasterizador SVG en este entorno
(`cairosvg`/`rsvg-convert`/Inkscape). Para producirlos: abrir `symbol.svg` en
cualquier editor vectorial (Figma, Inkscape) o convertirlo con
[cloudconvert.com](https://cloudconvert.com) y exportar a los tamaños de
arriba. Es un trabajo de diez minutos, no de diseño — la marca ya está
resuelta.

## Reskin a otra letra o color

- **Color**: los dos SVG llevan el brasa (`#c4551f`) y el papel (`#fbf8f2`)
  escritos a fuego, porque son autocontenidos y no pueden leer las variables
  CSS del sitio. Si la marca cambia de acento (ver `assets/tokens.css`), hay
  que regenerar estos ficheros con los nuevos hex — no basta con cambiar
  `tokens.css`.
- **Letra**: si se cambia `--font-accent` en `tokens.css`, el wordmark hay que
  reconstruirlo entero (nueva fuente incrustada, nuevas medidas). El símbolo
  no depende de ninguna fuente, así que no hace falta tocarlo.

## Nota de cálculo (por si hay que repetir el proceso)

El símbolo es un `<g>` con `rotate(-5 100 100)` sobre un lienzo de 200×200.
`getBBox()` en SVG devuelve la caja **antes** de aplicar el `transform` propio
del elemento, así que para centrar la marca girada hubo que calcular a mano el
rectángulo resultante tras la rotación (rotar las cuatro esquinas de cada
rectángulo y tomar min/max). Con las coordenadas actuales
(`stem y=26`, `dot y=140`) el resultado queda centrado: margen superior
≈25,1 px, inferior ≈24,7 px, sobre un lienzo de 200 px.
