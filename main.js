//
const {BrowserWindow , app , nativeTheme} = require('electron')

const criar_Janela_principal = () =>{
    const janela_principal = new BrowserWindow({
        width:800,
        height:600,
        icon:'./src/public/img/icon/icone.png',
        autoHideMenuBar:true
    })

    janela_principal.loadFile('./src/view/index.html')
}

app.whenReady().then(() => {
        criar_Janela_principal()
})