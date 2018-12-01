// Constructor function for Person objects
    function Box( id, title,xcord,ycord,xvel, yvel,color,type) {
        this.id = id;
        this.title = title;
        this.xcord = xcord;
        this.ycord = ycord;
        this.xvel = xvel;
        this.yvel = yvel;
        this.color = color;
        this.type = type;

        this.changeColor = function (color) {
            this.color = color;
        };
        this.changeVelocity = function (direction,speed) {
            this.direction = speed;
        };
        this.getVelocity = function (direction) {
          return this.direction; // I should return the requested directional velocity

        };

    }