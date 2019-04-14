function cargarDefaultEnemy(Q) {
    Q.component('defaultEnemy', {
        added: function() {
            this.entity.add('2d, animation');

            //Funciones adicionales
            this.entity.on('bump.top', this, 'top');
            this.entity.on('bump.left, bump.right, bump.bottom', this, 'collision');
        },
        
        //Si saltan encima del enemigo, enemigo muere
        top: function(collision) {
            if (collision.obj.isA('Mario')) {
                if(!this.entity.p.collision){
                    this.entity.trigger('die');
                    collision.obj.p.vy = -300;
                    this.entity.p.collision = true;
                }
                
            }
        },
        
        //Si chocan contra él, jugador muere
        collision: function(collision) {
            if (collision.obj.isA('Mario')) {
                if(!this.entity.p.collision){
                    collision.obj.trigger('die');
                    this.entity.p.collision = true;
                }
            }
        }
    });
}