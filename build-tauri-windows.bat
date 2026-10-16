@echo off
setlocal
cd /d "%~dp0"
where cargo >nul 2>nul || (echo ERROR: instala Rust desde https://rustup.rs/ & exit /b 1)
where node >nul 2>nul || (echo ERROR: instala Node.js LTS & exit /b 1)
call cargo install tauri-cli --version "^2" --locked || exit /b 1
call cargo tauri build --config src-tauri\tauri.conf.json || exit /b 1
echo Busca el instalador en src-tauri\target\release\bundle\
endlocal
