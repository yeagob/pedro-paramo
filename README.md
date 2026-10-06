# Pedro Páramo · Survival horror PS1

> *Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo.*

Prueba de concepto de un videojuego basado en **Pedro Páramo**, la novela de Juan Rulfo (1955), contada como un survival horror de la primera PlayStation al estilo de *Silent Hill* (1999): polígonos mínimos, niebla, voces que murmuran y un pueblo donde todos están muertos.

**Jugar en el navegador:** https://pedro-paramo.vercel.app

Disponible en **español, catalán e inglés**, con voces generadas en local. Usa auriculares.

![Juan Preciado llega a Comala](docs/capturas/comala.png)

## Qué se juega

Cinco capítulos, cada uno con una forma distinta de jugar:

| Capítulo | Qué cuenta | Cómo se juega |
| --- | --- | --- |
| 1. El camino | Juan baja a Comala con Abundio, el arriero. | Caminar bajo el sol. El calor te quita el aliento; si caes, dejas un eco que repite tus pasos. |
| 2. La casa de Eduviges | Eduviges le cuenta la noche en que murió Miguel Páramo. | Escuchar las voces del pueblo manteniendo E. De noche, el pasado; ordenar los recuerdos. |
| 3. Miguel Páramo | El velorio, el padre Rentería y las monedas. | Sigilo amable en el velorio, jugar como Rentería y buscar las monedas en el retablo. |
| 4. La infancia de Pedro | Pedro niño, Susana, los papalotes y la puerta. | Pensar para viajar, volar un papalote al ritmo del viento y seguirlo hasta casa. |
| 5. La Media Luna | Pedro se hace dueño de todo. | Una elección que no es elección, una cerca que te sigue y una plaza que hay que callar. |

Hay secretos escondidos para quien conozca los juegos de 1999.

| | |
| --- | --- |
| ![El camino a Comala](docs/capturas/camino.png) | ![La casa de Eduviges](docs/capturas/caballo.png) |
| ![El velorio de Miguel Páramo](docs/capturas/velorio.png) | ![El padre Rentería](docs/capturas/renteria.png) |
| ![Los papalotes](docs/capturas/papalote.png) | ![La Media Luna](docs/capturas/fulgor.png) |
| ![La plaza de las viudas](docs/capturas/viudas.png) | ![Aquella noche](docs/capturas/puzle.png) |

## Controles

| Tecla | Acción |
| --- | --- |
| WASD | Caminar |
| Ratón | Mirar (clic para capturar el puntero) |
| Shift | Correr (solo dentro del pueblo, y marea) |
| Mantener E | Escuchar, pensar, callar |
| Pulsar E | Usar o leer |
| Tab | Abrir el libro de fragmentos |
| Mantener Esc | Menú: pausa, opciones, controles y momentos |

## Jugar en local

Las voces se cargan con `fetch`, así que el juego necesita un servidor, no basta con abrir el archivo:

```bash
npx serve .
```

y abre la dirección que indique.

## Cómo está hecho

- Un solo `index.html` con [three.js r128](https://threejs.org/): render a 640×480, vértices que tiemblan como en PS1, dithering de 15 bits, niebla y ondas de calor en un shader de postproceso.
- Personajes y animales modelados por código con tornos y cajas; texturas pintadas en canvas.
- Ambiente, pasos, viento y murmullos sintetizados con Web Audio; las voces de los fragmentos suenan en 3D.
- Voces: castellano con [Kokoro](https://github.com/thewh1teagle/kokoro-onnx); catalán e inglés con [Piper](https://github.com/rhasspy/piper). Todo generado en local.

```
index.html          el juego
audio/es|ca|en/     voces de cada idioma
fuente/             piezas con las que se genera index.html (ver abajo)
pruebas/            prueba automática de momentos
docs/               capturas y notas de diseño
```

### Editar el juego

`index.html` se genera a partir de `fuente/`: la base de los capítulos 1 y 2 (`index_v070.html`) más los capítulos 3 a 5 y las correcciones (`ch_main.js`, `ch_update.js`, `ch_i18n.js`). Edita esas piezas y regenera:

```bash
python3 fuente/patch8.py
```

### Pruebas

```bash
npm i playwright && npx playwright install chromium
node pruebas/probar-momentos.js                 # abre cada momento y guarda una captura
LANGS=es,ca,en node pruebas/probar-momentos.js  # en los tres idiomas
```

En `fuente/pruebas-dev/` hay un jugador automático (`auto.js`) que recorre el juego siguiendo los objetivos y avisa si se atasca o cae.

## Autores

Hecho a cuatro manos por **Santiago** ([@yeagob](https://github.com/yeagob)) y **Claude** (Anthropic), conversando capítulo a capítulo: él ponía la visión, las referencias y las pruebas; Claude el diseño, el código, las voces y las pruebas automáticas.

Proyecto de fans sin ánimo de lucro. *Pedro Páramo* es obra de Juan Rulfo; los fragmentos citados pertenecen a sus herederos.
