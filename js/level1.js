function cargarLevel1(Q) {

    //Creamos el nivel 1
    Q.scene('level1', function(stage) {
        Q.stageTMX('level.tmx', stage);

        var mario = stage.insert(new Q.Mario());
        var goomba = stage.insert(new Q.Goomba());
        var bloopa = stage.insert(new Q.Bloopa());
        var princess = stage.insert(new Q.Princess());

        var coin1 = stage.insert(new Q.Coin({ x: 200, y: 350 }));
        var coin2 = stage.insert(new Q.Coin({ x: 230, y: 320 }));
        var coin3 = stage.insert(new Q.Coin({ x: 300, y: 330 }));

        var coin4 = stage.insert(new Q.Coin({ x: 420, y: 450 }));
        var coin5 = stage.insert(new Q.Coin({ x: 450, y: 450 }));
        var coin6 = stage.insert(new Q.Coin({ x: 480, y: 450 }));

        stage.add('viewport').follow(mario, {
            x: true,
            y: true
        }, {
            minY: 120,
            maxY: 500
        });
        Q.stageScene('HUB', 1);
    });
}
