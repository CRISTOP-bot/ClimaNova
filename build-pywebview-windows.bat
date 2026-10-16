@echo off
setlocal
cd /d "%~dp0"
where python >nul 2>nul || (echo ERROR: instala Python 3.10+ & exit /b 1)
python -m pip install --upgrade pyinstaller pywebview || exit /b 1
python -m PyInstaller --noconfirm --clean --onefile --windowed --name ClimaNova --add-data "index.html;." --add-data "styles.css;." --add-data "app.js;." --add-data "assets;assets" pywebview_app.py || exit /b 1
echo Ejecutable creado en dist\ClimaNova.exe
endlocal
