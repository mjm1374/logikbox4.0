 var boxes = [],
        xLimit = resetWindowLimit("x"),
        yLimit = resetWindowLimit("y"),
        sqFt = (xLimit * yLimit) ,
        bubbleCnt = 50;
        colors =  ['#edc951', '#eb6841', '#cc2a36' , '#4f372d', '#00a0b0']
        ;
console.log(sqFt);
    //Box( id, title, xcord, ycord, xvel, yvel, color, type)
    //Make me some boxes
 for(i=0; i < bubbleCnt; i++){
        thisBubbleSize = Math.floor(getRandomFloat(50,100));
        thisBubbleSize = 100;
        boxes.push(new Box(i,'test', thisBubbleSize, thisBubbleSize, getRandomFloat(0,(xLimit-150)),getRandomFloat(0,(yLimit-150)),getRandomFloat(-5,5),getRandomFloat(-5,5),colors[Math.floor(getRandomFloat(0,5))],'generic'));
    }


function resetWindowLimit(whatDim){

    var newDim;

    if(whatDim == "x") {
        newDim = window.innerWidth;
        for(i=0; i < boxes.length; i++){
            if(boxes[i].xcord >= (newDim - boxes[i].width)){
                boxes[i].changePosition('x',(newDim - boxes[i].width));
            }
        }

    } else {
        newDim = window.innerHeight;
        for(i=0; i < boxes.length; i++){
            if(boxes[i].ycord >= (newDim - boxes[i].height)){
               boxes[i].changePosition('y',(newDim - boxes[i].height));
            }

        }
    }

    return newDim;
}

function animateBoxes(obj){
        var boxes = obj;

        for (var key in boxes) {
            if (boxes.hasOwnProperty(key)) {
                var newVel ;

                //console.log("box: " + boxes[key].xcord + " - " + boxes[key].ycord);
                //console.log("in vololation", boxes[key].ycord >= yLimit, yLimit, boxes[key].yvel );

                boxes[key].changePosition('x',(boxes[key].xcord + boxes[key].xvel));
                boxes[key].changePosition('y',(boxes[key].ycord + boxes[key].yvel));

                if (boxes[key].xcord <= 0 || boxes[key].xcord >= (xLimit - boxes[key].width)){
                    if(Math.sign(boxes[key].xvel) >= 0){
                            newVel = -Math.abs(boxes[key].xvel);
                        }else{
                            newVel = Math.abs(boxes[key].xvel);
                        }
                    boxes[key].changeVelocity('x',newVel);
                }

                if (boxes[key].ycord <= 0 || boxes[key].ycord >= (yLimit - boxes[key].height)){
                    if(Math.sign(boxes[key].yvel) >= 0){
                            newVel = -Math.abs(boxes[key].yvel);
                        }else{
                            newVel = Math.abs(boxes[key].yvel);
                        }
                    boxes[key].changeVelocity('y',newVel);
                }


                //color collision
                //for(i=0; i < boxes.length; i++){
                //    if(boxes[i].ycord >= boxes[key].ycord && boxes[i].ycord <= (boxes[key].ycord - 100) && boxes[i].xcord >= boxes[key].xcord && boxes[i].xcord <= (boxes[key].xcord - 100) && boxes[i].color == boxes[key].color ){
                //        $('#animBox'  + boxes[key].id )
                //        .css('background-color', boxes[key].color);
                //        $('#animBox'  + boxes[i].id )
                //        .css('background-color', boxes[key].color);
                //    }else{
                //
                //        $('#animBox'  + boxes[key].id )
                //        .css('background-color', 'transparent');
                //        $('#animBox'  + boxes[i].id )
                //        .css('background-color', 'transparent');
                //    }
                //
                //}




                $('#animBox'  + boxes[key].id )
                .css('left', boxes[key].xcord).css('top', boxes[key].ycord);
            }

        }


    }


    function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
      }

$(function(){ // Doc Ready

    for (var key in boxes) {

        if (boxes.hasOwnProperty(key)) {
            $('body')
            .append("<div id='animBox" + boxes[key].id + "' data-id='" + boxes[key].id  + "'class='clicker'></div>" );
            $('#animBox'  + boxes[key].id )
            .css('color', boxes[key].color).css('border-color', boxes[key].color).css('width', boxes[key].width).css('height', boxes[key].height).addClass('animBox');
            $('#animBox'  + boxes[key].id ).html('<span>' + boxes[key].id  + '</span>');
            //console.log(boxes[key].color);
        }

    }

    // click on an obj
    //$('.clicker').click(function(){
    //    var thisID =  $(this).data( "id" );
    //    alert(boxes[thisID].xvel + " - " + boxes[thisID].yvel);
    //
    //    });

    //kick off animation
    setInterval(function(){
        animateBoxes(boxes);
        }, 20);




});

$( window ).resize(function() {
    xLimit = resetWindowLimit("x");
    yLimit = resetWindowLimit("y");
});