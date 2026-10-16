const { app, BrowserWindow, shell } = require('electron');
const path = require('node:path');
app.commandLine.appendSwitch('lang','es-419');
function createWindow(){
  const win = new BrowserWindow({width:1440,height:940,minWidth:900,minHeight:650,backgroundColor:'#08131d',title:'ClimaNova',icon:path.join(__dirname,'..','assets','logo.ico'),show:false,autoHideMenuBar:true,webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}});
  win.loadFile(path.join(__dirname,'..','index.html'));
  win.once('ready-to-show',()=>win.show());
  win.webContents.setWindowOpenHandler(({url})=>{if(url.startsWith('https://'))shell.openExternal(url);return{action:'deny'}});
}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
