function cargarPrincesa(Q) {

    //Creamos la clase Princesa
    Q.Sprite.extend('Princess', {
        init: function(p) {
            this._super(p, {
                asset: 'princess.png',
                x: 1950,
                y: 452,
                sensor: true
            });

            this.on('sensor');
        },

        //Detecta si se acerca Mario
        sensor: function() {
            this.p.sensor = false;
            Q('Mario').trigger('win');
        }
    });
}
