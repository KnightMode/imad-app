console.log('Loaded!');
// //Move image

// var img = document.getElementById('pic');
// var moveright=0;
// function moveleft()
// {
//     moveright=moveright+10;
//     img.style.marginRight= moveright + 'px';
// }

// img.onclick = function(){
//     //img.style.marginRight='100px';
//     var interval = setInterval(moveleft,50);
   
// };
var button = document.getElementById('counter');
button.onclick = function () {
    //Create a req. object
    var request= new XMLHTTPRequest();
    req.onreadystatechange = function (){
        //check current state of req object and if thats equal to done
        if (request.ReadyState === XMLHttpRequest.DONE)
        //Take some action
        {
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML= counter.toString();
    
            }
        }
        
    };
    //Make req.
    request.open('GET','http://ghaneshbalaji1995.imad.hasura-app.io/counter',true);
    request.send(null);
    }