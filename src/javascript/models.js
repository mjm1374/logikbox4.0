// Constructor function for Person objects
    function Box( id, title, width, height, xcord, ycord, xvel, yvel, color, type) {
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

        this.changeColor = function (color) {
            this.color = color;
        };
        this.changexVelocity = function (speed) {
            this.xvel = speed;
        };

        this.changeyVelocity = function (speed) {
            this.yvel = speed;
        };

        this.changexPosition = function (loc) {
            this.xcord = loc;
        };
        this.changeyPosition = function (loc) {
            this.ycord = loc;
        };
        this.getVelocity = function (direction) {
          return this.direction; // I should return the requested directional velocity

        };

    }