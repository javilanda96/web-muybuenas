/* Los precios de la web salen de datos/tarifa-reservas.json, que es la parte de
   Reservas del tarifario de la casa (@oteyzerena/ui-comun,
   src/comercial/tarifas.json).

     node scripts/precios.mjs              escribe las tarjetas de plan en index.html
     node scripts/precios.mjs --comprobar  falla si la web y la tarifa no coinciden
     node scripts/precios.mjs --traer <ruta a tarifas.json>   renueva datos/tarifa-reservas.json

   El contenido sigue siendo HTML plano: esto se ejecuta al editar, no al servir. */
import { readFileSync, writeFileSync } from "node:fs";

const raiz = new URL("../", import.meta.url);
const leer = (f) => readFileSync(new URL(f, raiz), "utf8");
const [modo, ruta] = process.argv.slice(2);

if (modo === "--traer") {
  const t = JSON.parse(readFileSync(ruta, "utf8"));
  const { unidad, planes, modulos } = t.apps.reservas;
  const extras = {};
  for (const p of planes) for (const e of p.extras ?? []) extras[e] = t.extras[e];
  const parte = { version: t.version, ivaIncluido: t.ivaIncluido, unidad, planes, modulos, extras };
  writeFileSync(new URL("datos/tarifa-reservas.json", raiz), JSON.stringify(parte, null, 2) + "\n");
  console.log(`✓ datos/tarifa-reservas.json al día (tarifa ${t.version})`);
  process.exit(0);
}

const tarifa = JSON.parse(leer("datos/tarifa-reservas.json"));
const INICIO = "<!-- tarifa:planes (generado por scripts/precios.mjs; no editar a mano) -->";
const FIN = "<!-- /tarifa:planes -->";

/* Cómo se dice en la web cada extra de la tarifa. */
const EXTRAS = { "ia-repercutida": "Más el uso de IA, repercutido a coste" };

const tarjeta = (plan, i) => {
  const propios = tarifa.modulos.filter((m) => m.desde === plan.id);
  const anterior = tarifa.planes[i - 1];
  const filas = [
    ...(anterior ? [`Todo lo del plan ${anterior.nombre}`] : []),
    ...propios.map((m) => m.nombre),
    ...(plan.extras ?? []).map((e) => EXTRAS[e] ?? tarifa.extras[e].nombre),
  ];
  return `        <div class="oz-price">
          <h3>${plan.nombre}</h3>
          <div class="oz-price-amount">${plan.precio} € <small>/ ${tarifa.unidad} al mes · sin IVA</small></div>
          <p class="oz-price-para">${plan.paraQuien}</p>
          <ul>
${filas.map((f) => `            <li>${f}</li>`).join("\n")}
          </ul>
          <a class="oz-btn oz-btn--ghost" href="#contacto">Pide una demo</a>
        </div>`;
};

const pagina = leer("index.html");
/* El bloque respeta el fin de línea que ya tenga el fichero. */
const eol = pagina.includes("\r\n") ? "\r\n" : "\n";
const bloque = `${INICIO}\n${tarifa.planes.map(tarjeta).join("\n")}\n        ${FIN}`.replaceAll("\n", eol);

const a = pagina.indexOf(INICIO);
const b = pagina.indexOf(FIN);
if (a < 0 || b < 0) {
  console.error("✗ index.html no tiene las marcas de tarifa:planes");
  process.exit(1);
}
const nueva = pagina.slice(0, a) + bloque + pagina.slice(b + FIN.length);

if (modo !== "--comprobar") {
  writeFileSync(new URL("index.html", raiz), nueva);
  console.log(`✓ index.html: ${tarifa.planes.length} planes escritos`);
  process.exit(0);
}

/* Fuera de las tarjetas, la única cifra mensual admitida es la de un plan. Los
   importes de la calculadora no llevan «al mes» y no entran aquí. */
const fallos = [];
if (nueva !== pagina) fallos.push("index.html: las tarjetas no coinciden con la tarifa (ejecuta scripts/precios.mjs)");
const validas = new Set(tarifa.planes.map((p) => p.precio));
for (const m of pagina.matchAll(/(\d+)(?: |&nbsp;)?€ ?(?:<small>)?(?:\/mes|\/ ?\w+ al mes| al mes)/g)) {
  if (!validas.has(Number(m[1]))) fallos.push(`index.html: «${m[0]}» no es un precio de la tarifa`);
}
for (const m of pagina.matchAll(/"(?:price|lowPrice|highPrice)": "(\d+)"/g)) {
  if (!validas.has(Number(m[1]))) fallos.push(`index.html: datos estructurados con ${m[1]} €`);
}
for (const f of fallos) console.error(`✗ ${f}`);
console.log(fallos.length ? `${fallos.length} fallo(s)` : `✓ la web coincide con la tarifa ${tarifa.version}`);
process.exit(fallos.length ? 1 : 0);
