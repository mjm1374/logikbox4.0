// Constructor function for Person objects
    function Box( id, title, width, height, xcord, ycord, xvel, yvel, color, type, oob) {
        this.id = id;
        this.title = title;
        this.width = width;
        this.height = height;
        this.xcord = xcord;
        this.ycord = ycord;
        this.xvel = xvel;
        this.yvel = yvel;
        this.color = color;
        this.type = type;
        this.oob = oob; // Out of bounds

        this.changeColor = function (color) {
            this.color = color;
        };

        this.oob = function (oob) {
            this.oob = oob;
        };

        this.changeVelocity = function (dir,speed) {

            if(dir == 'x'){
                this.xvel = speed;
            }
            if(dir == 'y'){
                this.yvel = speed;
            }
        };

        this.changePosition = function (dir,loc) {
            if (dir == 'x'){
                this.xcord = loc;
            }

            if (dir == 'y'){
                this.ycord = loc;
            }

        };


        this.getVelocity = function (direction) {
          return this.direction; // I should return the requested directional velocity

        };

    }