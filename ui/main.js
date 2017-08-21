console.log('Loaded!');
//Move image

var img = document.getElementById('pic');
var moveright=0;
function moveleft()
{
    moveright=moveright+10;
    img.style.marginRight= moveright+'px';
}

img.onclick = function(){
    //img.style.marginRight='100px';
    var interval = setInterval(moveleft,100);
   
};