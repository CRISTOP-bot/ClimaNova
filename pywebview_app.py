"""Optional Python/WebView2 launcher for ClimaNova. Requires WebView2 Runtime on Windows."""
import sys
from pathlib import Path
import webview

if getattr(sys, "frozen", False):
    ROOT = Path(sys._MEIPASS)
else:
    ROOT = Path(__file__).resolve().parent

webview.create_window("ClimaNova", (ROOT / "index.html").as_uri(), width=1440, height=940, min_size=(900, 650), background_color="#08131d")
webview.start(gui="edgechromium")
