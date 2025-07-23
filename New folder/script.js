var i = 0;
var n = 1;
let arrColor = ["red", "yellow", "green"];
function traffiiclight(){
    var l = document.getElementsByClassName("light2");
    for(var j = 0; j<l.length; j++){
        l[j].style.background  = "black";
        l[j].innerHTML = "";
    }
    l[i].style.background  = arrColor[i];
    if(i<l.length){

        if(n<=3){
            l[i].innerHTML=n;
            n++;
        }
        if(n==4){
            i++;
            n = 1;
            if(i==3){
                i=0;
            }
        }
    }
}
setInterval(traffiiclight,1500);