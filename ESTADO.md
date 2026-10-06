# MuyBuenas — web de producto (BORRADOR)

Repo creado el 2026-08-11 para que Carlos revise el avance y decida el
despliegue. **No es la web final** — es la maqueta de trabajo del kit
compartido de webs de producto de OTEYZERENA.

## Cómo verla

**Vista previa pública (de revisión, no la definitiva):** [se añade el enlace real tras activar GitHub Pages]. Bloqueada para buscadores (`robots.txt` + `noindex`) porque tiene datos de ejemplo — no es para compartir fuera del equipo.

En local, sin build:

```bash
py -m http.server 8099
```

Luego abrir `http://localhost:8099/`.

## Qué falta antes de poder publicarla de verdad (importante para Carlos)

1. **Dominio** — decisión pendiente de Carlos: dominio propio (`muybuenas.es`)
   vs. subdominio de `oteyzerena.com`. Ver `legal/DATOS-PENDIENTES.md`.
2. **Datos legales reales** — razón social, NIF, domicilio, email. Ninguna
   página legal se publica sin esto y sin revisión de alguien con criterio
   jurídico.
3. **Precios** — puestos los de la tarifa aprobada el 11-09-2026 (89 / 179 /
   329 € por local). Salen de `datos/tarifa-reservas.json` con
   `node scripts/precios.mjs`; `--comprobar` falla si la web y la tarifa no
   coinciden. Falta el visto bueno de Javier para enseñarlos.
4. **Consentimiento de SOTO del PRIOR y MONTAGU** para aparecer como caso de
   cliente cero, y validación de la frase de declaración con Carlos.
5. Pasar el `CHECKLIST-PUBLICACION.md` entero antes de que esto salga a
   producción.

## Estructura

- `index.html` — la home.
- `legal/` — aviso legal, privacidad, cookies (con datos pendientes).
- `assets/tokens.css` — la paleta de marca (tres variantes, ver el propio
  fichero).
- `assets/logo/` — logotipo vectorial de MuyBuenas, con su README explicando
  la idea y cómo reproducirlo.
- `CHECKLIST-PUBLICACION.md` — lo que hay que verificar antes de publicar.

Dudas de contexto o de por qué está hecho así: preguntar a Javier.
