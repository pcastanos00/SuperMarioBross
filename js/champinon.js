function cargarChampinon(Q) {
    
    //Cargamos los sprites del Champinion
    Q.animations('goomba play', {
        'live': { frames: [0, 1], rate: 1 / 5 },
        'die': { frames: [2], loop: false }
    });
    
    //Creamos la clase Champinion
    Q.Sprite.extend('Goomba', {
        
        //Inicializamos la clase
        init: function(p) {
            this._super(p, {
                sprite: 'goomba play',
                sheet: 'goomba',
                x: 1660,
                y: 500,
                speed: 170,
                vx: 100,
                die: false,
                collision: false
            });
            
            //Los módulos Quintus necesarios
            this.add('aiBounce, defaultEnemy');
            
            // Los métodos adicionales: morir
            this.on('die');
        },
        
        //Método de muerte 
        die: function() {
            this.p.die = true;
            this.p.speed = 0;
            this.p.vx = 0;

            setTimeout(function() {
                Q('Goomba').destroy();
            }, 200);
        },
        
        //Movimiento del Champinion
        step: function(dt) {
            if (this.p.die) {
                this.play('die');
            } else {
                this.play('live');
                
                //Si se caae del escenario
                if (this.p.y > tamEscenario) {
                    this.trigger('die');
                }
            }
        }
    });
}