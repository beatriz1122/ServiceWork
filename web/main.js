consola . log ( "main.js carregado." ) ;
if  ( navigator . serviceWorker ) {
    consola . log ( "Navegador possui suporte a PWA." ) ;
    navegador . serviceWorker . registrar ( 'sw.js' )
    . então ( função ( ) { } )
    . catch ( função ( err ) { } ) ;
}  senão  {
    consola . log ( "Navegador não possui suporte a PWA." ) ;
}