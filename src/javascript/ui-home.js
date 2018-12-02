function resetWindowLimit(whatDim){

    var newDim;

    if(whatDim == "x") {newDim = self.innerWidth; } else {newDim = self.innerHeight;}

    return newDim;
}

$(function(){
	//jQuery code here
    var boxes = [],
        xLimit = resetWindowLimit("x"),
        yLimit = resetWindowLimit("y"),
        colors =  ['#edc951', '#eb6841', '#cc2a36' , '#4f372d', '#00a0b0']
        ;

    function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
      }

    //Box( id, title, xcord, ycord, xvel, yvel, color, type)
    //Make me some boxes

    for(i=0; i < 100; i++){
        boxes.push(new Box(i,'test', 100, 100, getRandomFloat(200,(xLimit-150)),getRandomFloat(100,(yLimit-150)),getRandomFloat(1,5),getRandomFloat(1,5),colors[Math.floor(getRandomFloat(0,4))],'generic'));
    }


    for (var key in boxes) {
        if (boxes.hasOwnProperty(key)) {
            $('body')
            .append("<div id='animBox" + boxes[key].id + "' data-id='" + boxes[key].id  + "'class='clicker'></div>" );
            $('#animBox'  + boxes[key].id )
            .css('color', boxes[key].color).css('border-color', boxes[key].color).addClass('animBox');
            $('#animBox'  + boxes[key].id ).html('<span>' + boxes[key].id  + '</span>');
            console.log(boxes[key].color);
        }

    }

    $('.clicker').click(function(){
        var thisID =  $(this).data( "id" );
        alert(boxes[thisID].xvel + " - " + boxes[thisID].yvel);

        });
    //kick off animation
    setInterval(function(){
        animateBoxes(boxes);
        }, 10);


    function animateBoxes(obj){
        var boxes = obj;

        for (var key in boxes) {
        if (boxes.hasOwnProperty(key)) {
            var newVel ;

            //console.log("box: " + boxes[key].xcord + " - " + boxes[key].ycord);
            //console.log("in vololation", boxes[key].ycord >= yLimit, yLimit, boxes[key].yvel );

            boxes[key].changexPosition((boxes[key].xcord + boxes[key].xvel));
            boxes[key].changeyPosition((boxes[key].ycord + boxes[key].yvel));

            if (boxes[key].xcord <= 0 || boxes[key].xcord >= (xLimit - boxes[key].width)){
                if(Math.sign(boxes[key].xvel) >= 0){
                        newVel = -Math.abs(boxes[key].xvel);
                    }else{
                        newVel = Math.abs(boxes[key].xvel);
                    }
                boxes[key].changexVelocity(newVel);
            }

            if (boxes[key].ycord <= 0 || boxes[key].ycord >= (yLimit - boxes[key].height)){
                if(Math.sign(boxes[key].yvel) >= 0){
                        newVel = -Math.abs(boxes[key].yvel);
                    }else{
                        newVel = Math.abs(boxes[key].yvel);
                    }
                boxes[key].changeyVelocity(newVel);
            }




            $('#animBox'  + boxes[key].id )
            .css('left', boxes[key].xcord).css('top', boxes[key].ycord);
        }

    }


    }

});

$( window ).resize(function() {
    xLimit = resetWindowLimit("x");
    yLimit = resetWindowLimit("y");
});