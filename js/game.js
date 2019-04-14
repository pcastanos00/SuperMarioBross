var tamEscenario = 580;

window.addEventListener('load', function() {
    
    var Q = Quintus({ audioSupported: ['mp3', 'ogg'] })
        
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')
        .setup({
            width: 320,
            height: 480
        })
        .controls().touch().enableSound();
   
    //Personajes
    cargarMario(Q);
    cargarPrincesa(Q);

    //Enemigos
    cargarDefaultEnemy(Q);
    cargarChampinon(Q);
    cargarChipiron(Q);

    //Objetos
    cargarMoneda(Q);

    //Pantallas
    cargarEndGame(Q);
    cargarMainTitle(Q);
    cargarHUB(Q);

    cargarLevel1(Q);
    
    //Cargamos los ficheros que necesitamos para el juego
    Q.loadTMX('level.tmx, mainTitle.png, mario_small.png, mario_small.json, goomba.png, goomba.json, bloopa.png, bloopa.json, princess.png, coin.png, coin.json, music_main.mp3, music_main.ogg, music_die.mp3, music_die.ogg, music_level_complete.mp3, music_level_complete.ogg, coin.mp3, coin.ogg', function() {
        Q.compileSheets('mario_small.png', 'mario_small.json');
        Q.compileSheets('goomba.png', 'goomba.json');
        Q.compileSheets('bloopa.png', 'bloopa.json');
        Q.compileSheets('coin.png', 'coin.json');
        Q.stageScene('mainTitle');
    });
});