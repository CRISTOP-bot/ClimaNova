# ClimaNova

Aplicación meteorológica de escritorio para Windows 10/11, en español. Usa Electron para abrir la interfaz en una ventana independiente; no es solo un sitio web.

## Funciones

- Clima actual y pronóstico de 7 días, vista por horas y gráfica de temperaturas.
- Búsqueda de ciudades, detección de ubicación con permiso y lugares favoritos.
- AQI, PM2.5, PM10, ozono y NO₂.
- Mapa OpenStreetMap con radar de precipitación RainViewer y capas de nubosidad y viento con datos de Open-Meteo.
- Avisos diferenciados para falta de conexión, errores y límites de las API, respuestas inválidas, ubicación no disponible y fallos del mapa, con opción de reintentar.
- Animaciones, diseño adaptable, unidades °C/°F y preferencias guardadas localmente.

La conexión a internet es necesaria para los datos meteorológicos, geocodificación, mapa y calidad del aire.

## Descargar la app

Las versiones compiladas se publican en [Releases](https://github.com/CRISTOP-bot/ClimaNova/releases). La release ofrece el instalador NSIS y el ejecutable portable de Windows. El portable también necesita que se extraiga el paquete completo antes de abrir el `.exe`.

## Releases automáticas

Cada push a `main` activa `.github/workflows/windows-release.yml` en un runner `windows-latest`. Cada ejecución genera una versión única `1.0.<número de build>`, aplicada al paquete, a la interfaz, a los nombres de los `.exe` y a la etiqueta de la release. Si el empaquetado termina correctamente, se publica una release nueva con ambos `.exe`; también se puede disparar manualmente desde GitHub Actions. La versión se genera dentro del runner para no crear un commit adicional que dispare otro build.

## Compilar localmente en Windows

Requiere Node.js 20 o posterior. Ejecuta `build-electron-windows.bat` o estos comandos:

```powershell
npm install
npm run dist:win
```

Los archivos se generan en `release/`. `npm start` abre la app durante desarrollo.

## Otras rutas de empaquetado

Se incluyen esqueletos/recetas adicionales para Tauri 2 (`src-tauri/`) y Python + pywebview + PyInstaller (`pywebview_app.py` y `build-pywebview-windows.bat`). También se documentan .NET/WebView2, NW.js, Neutralinojs, Flutter, PWA y MSIX. La ruta automatizada soportada para Releases de Windows es Electron + electron-builder.

## Datos, privacidad y atribuciones

- Pronóstico, geocodificación y calidad del aire: [Open-Meteo](https://open-meteo.com/).
- Mapa base: [OpenStreetMap](https://www.openstreetmap.org/copyright).
- Radar: RainViewer, sujeto a disponibilidad de su API.
- El nombre de una ciudad se consulta en Open-Meteo. La app pide permiso antes de acceder a la ubicación del dispositivo.

Revisa los términos y atribuciones vigentes de cada proveedor antes de redistribuir la aplicación. Consulta `LICENSE` y las licencias incluidas con Electron/Chromium.
