# Probar momentos del juego

En el juego: botón «Momentos» en la pantalla de título o en el menú de pausa (mantén Esc).
Por enlace: añade `#m-<momento>` a la URL y pulsa «Bajar a Comala».

Momentos: camino, comala, eduviges, caballo, pasado, puzle, ecos, final.

Script automático (levanta un servidor local para que carguen las voces) (necesita Node y Playwright):

    npm i playwright && npx playwright install chromium
    node pruebas/probar-momentos.js
    LANGS=es,ca,en node pruebas/probar-momentos.js
    MOMENTS=velorio,cerca node pruebas/probar-momentos.js

Abre cada momento, guarda una captura en `pruebas/capturas/` y falla si hay errores en consola.
