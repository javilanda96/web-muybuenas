# web-kit — base común de las webs de producto

Un mismo esqueleto para las cinco webs de producto. Se monta una vez y se
reutiliza; lo único que cambia por app es el acento de color, el logotipo y el
contenido.

**Origen**: adaptado del repo `javilanda96/landthor-web` (auditado el 2026-08-11).
Se recicló su sistema de componentes; se descartó su home, construida sobre un
runtime de JavaScript que dejaba el contenido fuera del HTML servido.

## Qué hay aquí

```
assets/tokens.css      Color y tipografía. La marca vive aquí y solo aquí
assets/base.css        Sistema de componentes. No se toca por app
assets/nav.js          Menú móvil. El único JS de la página
plantillas/            Maquetas de página con el kit aplicado
CHECKLIST-PUBLICACION.md  Se rellena antes de publicar. Sin excepciones
```

## Cómo se hace una web nueva

1. Copiar `assets/` y la plantilla que toque.
2. En el `<html>`, poner el acento de la app: `data-acento="brasa"`.
3. Escribir el contenido. Todo en HTML: nada de texto que dependa de JS.
4. Añadir las tres páginas legales y el destino del formulario.
5. Pasar `CHECKLIST-PUBLICACION.md` entero.
6. Pedirle el OK a Javier. Solo entonces se publica.

## Reglas que no se negocian

- **El contenido nunca depende de JavaScript.** Si el JS falla, la página se lee igual.
- **El color solo vive en `tokens.css`.** Si aparece un hex suelto en un HTML, está mal.
- **Presupuesto de peso**: imágenes ≤200 KB en WebP, vídeo ≤1,5 MB. Landthor llegó a servir fotos de 9 MB; eso en el móvil de un hostelero no carga.
- **El endoso de OTEYZERENA aparece en cabecera y pie de las cinco webs.** Es la decisión de arquitectura de marca, no un adorno.
- **Aviso legal, privacidad y cookies desde el día uno.** Hay formulario, luego hay RGPD.

## Ver el kit en local

```bash
py -m http.server 8099 --directory marketing/web-kit
```

Después, `http://localhost:8099/plantillas/muybuenas-home.html`.
