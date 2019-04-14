function cargarChipiron(Q) {

    //Cargamos los sprites del Chipiron
    Q.animations('bloopa play', {
        'live': { frames: [0, 1], rate: 1 / 2 },
        'die': { frames: [2], loop: false }
    });
    
    //Creamos la clase Chipiron
    Q.Sprite.extend('Bloopa', {
        
        //Inicializamos la clase
        init: function(p) {
            this._super(p, {
                sprite: 'bloopa play',
                sheet: 'bloopa',
                x: 1190,
                y: 500,
                gravity: 0,
                time_jump: 0,
                die: false,
                collision: false
            });
            
            // Los módulos Quintus necesarios
            this.add('defaultEnemy');
            
            // Los métodos adicionales: morir
            this.on('die');
        },
        
        //Método de muerte 
        die: function() {
            this.p.die = true;
            this.p.vy = 70;
            setTimeout(function() {
                Q('Bloopa').destroy();
            }, 200);
        },

        //Movimiento del Chipiron
        step: function(dt) {
            if (this.p.die) {
                this.play('die');
            } else {
                this.play('live');
                this.p.time_jump += dt;
                
                //Salta si está en el suelo
                if (this.p.vy == 0) {
                    this.p.vy = -70;
                    this.p.time_jump = 0;
                }
                
                //Velocidad de descenso
                if (this.p.time_jump >= 1.5) {
                    this.p.vy = 70;
                }
               
                //Si se cae del escenario, se muere
                if (this.p.y > tamEscenario) {
                    this.trigger('die');
                }
            }
        }
    });
}