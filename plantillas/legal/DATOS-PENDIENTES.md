# Datos que faltan para cerrar las páginas legales

Las tres páginas (`aviso-legal.html`, `privacidad.html`, `cookies.html`) están
completas en estructura y redactadas, pero **no se publican hasta rellenar esta
lista y pasarlas por alguien con criterio jurídico**. Yo no lo tengo, y aquí
inventarse un dato no es un error de estilo: es una infracción.

Todo lo que falta está marcado en los ficheros como `[[así]]`.

## 1. Identificación del titular

| Dato | Valor | Dónde se usa |
|---|---|---|
| Razón social | ¿Jordazola SL? — figura al pie de `oteyzerena.com`, hay que confirmar que es quien explota también MuyBuenas | Las tres |
| NIF | | Aviso legal, privacidad |
| Domicilio social completo | | Aviso legal, privacidad |
| Datos registrales (Registro Mercantil, tomo, folio, hoja) | Solo si es sociedad mercantil | Aviso legal |
| Email de contacto | ¿`hola@`? ¿`info@`? Decidir el buzón real y que alguien lo lea | Las tres |
| Email para ejercer derechos | Puede ser el mismo | Privacidad |
| Teléfono | Opcional | Aviso legal |

## 2. Tratamiento de datos de la web

| Dato | Pregunta que hay que responder |
|---|---|
| Proveedor de alojamiento | ¿GitHub Pages, Vercel, el VPS propio? Se nombra como encargado |
| Destino del formulario | Confirmado el plan: el CRM propio. Hay que decir en qué servidor está y quién lo opera |
| Plazo de conservación | ¿Cuánto se guarda un lead que no compra? Propuesta razonable: 12 meses desde el último contacto |
| Herramienta de analítica | Sin decidir. Condiciona por completo la página de cookies |
| Envío de comunicaciones comerciales | ¿Se va a hacer newsletter? Si sí, hace falta consentimiento separado del de contacto |

## 3. Cookies

La página de cookies **hoy está escrita para el caso "solo cookies técnicas"**,
que es lo que corresponde si no se instala analítica. En cuanto entre una
herramienta de medición hay que reescribir la tabla y **añadir banner de
consentimiento previo**, con rechazar tan fácil como aceptar.

Decisión pendiente de Javier: **qué analítica**. Si se elige una sin cookies y
sin datos personales, la web se queda sin banner, que es más limpio y más rápido.

## 4. Lo que estas páginas NO cubren

Cubren **la web**: quién es el titular, qué pasa con los datos de quien rellena
el formulario y qué cookies hay.

**No cubren el producto.** Cuando un restaurante contrate MuyBuenas, el
tratamiento de los datos de *sus* clientes —incluidas las llamadas de voz— exige
un **contrato de encargo del tratamiento** aparte, y ahí hay que documentar los
subencargados (telefonía, proveedores de modelos de voz) y las transferencias
internacionales que correspondan. Es un documento distinto, con otro nivel de
riesgo, y necesita asesoramiento jurídico de verdad antes de firmar el primer
cliente.

Está anotado aquí para que no se cuele por el hueco entre "la web ya está lista"
y "ya podemos vender".
