var oUl = document.getElementById("ul1");
var str = "";
var oLi = oUl.getElementsByTagName("li");
for(var i=0;i<100;i++){
    str += "<li></li>";
}
oUl.innerHTML = str;
for(var i=0;i<oLi.length;i++){
    oLi[i].style.top = Math.floor(i/10)*51 + "px";
    oLi[i].style.left = (i%10)*51 + "px";
    oLi[i].style.backgroundPositionX = "-" + oLi[i].style.left;
    oLi[i].style.backgroundPositionY = "-" + oLi[i].style.top;
}
for(var i=0;i<oLi.length;i++){
    oLi[i].onmouseover = function (){
        this.style.opacity = "1";
    }
}
