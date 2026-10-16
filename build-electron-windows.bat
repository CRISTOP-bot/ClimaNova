@echo off
setlocal
cd /d "%~dp0"
echo === ClimaNova - empaquetado Electron para Windows ===
where node >nul 2>nul || (echo ERROR: instala Node.js LTS desde https://nodejs.org/ & exit /b 1)
call npm install || exit /b 1
call npm run dist:win || exit /b 1
echo Listo. Revisa la carpeta release\
endlocal
