# MuyBuenas — web de producto (BORRADOR)

Repo creado el 2026-08-11 para que Carlos revise el avance y decida el
despliegue. **No es la web final** — es la maqueta de trabajo del kit
compartido de webs de producto de OTEYZERENA.

## Cómo verla

Es HTML/CSS estático, sin build. Con Python instalado:

```bash
py -m http.server 8099
```

Luego abrir `http://localhost:8099/plantillas/muybuenas-home.html`.

## Qué falta antes de poder publicarla (importante para Carlos)

1. **Dominio** — decisión pendiente de Carlos: dominio propio (`muybuenas.es`)
   vs. subdominio de `oteyzerena.com`. Ver `plantillas/legal/DATOS-PENDIENTES.md`.
2. **Datos legales reales** — razón social, NIF, domicilio, email. Ninguna
   página legal se publica sin esto y sin revisión de alguien con criterio
   jurídico.
3. **Precios** — quedan marcadores `[[ ]]` a la espera de que Javier cierre
   la banda de precio (hay referencia de mercado en el benchmark de
   competencia, en el repo de la asesoría).
4. **Consentimiento de SOTO del PRIOR y MONTAGU** para aparecer como caso de
   cliente cero, y validación de la frase de declaración con Carlos.
5. Pasar el `CHECKLIST-PUBLICACION.md` entero antes de que esto salga a
   producción.

## Estructura

- `plantillas/muybuenas-home.html` — la home.
- `plantillas/legal/` — aviso legal, privacidad, cookies (con datos pendientes).
- `assets/tokens.css` — la paleta de marca (tres variantes, ver el propio
  fichero).
- `assets/logo/` — logotipo vectorial de MuyBuenas, con su README explicando
  la idea y cómo reproducirlo.
- `CHECKLIST-PUBLICACION.md` — lo que hay que verificar antes de publicar.

Dudas de contexto o de por qué está hecho así: preguntar a Javier.
