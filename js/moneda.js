function cargarMoneda(Q) {
    
    //Cargamos los sprites de las monedas
    Q.animations('coin play', {
        'live': { frames: [0, 1, 2], rate: 1 / 3 }
    });
    
    //Creamos la clase Moneda
    Q.Sprite.extend('Coin', {
        
        //Inicializamos la clase
        init: function(p) {
            this._super(p, {
                sprite: 'coin play',
                sheet: 'coin',
                sensor: true,
                get: false
            });
            
            // Los módulos Quintus necesarios
            this.add('animation, tween');

            //Activamos el sensor
            this.on('sensor');
        },

        //Sensor de moneda: aumenta el número de monedas del juego y destruirse
        sensor: function() {
            var get = function() {
                this.destroy()
            }
            this.animate({ y: this.p.y - 50 }, 0.3, { callback: get });
            if (!this.p.get) {
                this.p.get = true;
                Q.state.inc('coins', 1);
                Q.audio.play('coin.mp3');
            }
        },

        //Es un objeto estático
        step: function(dt) {
            this.play('live');
        }
    });
}