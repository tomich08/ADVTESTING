// JavaScript Document

//notes
/*newc.style.left = evt.clientX+"px";
newc.style.top = evt.clientY+"px";
newc.style.transition = "width .2s ease-out, height .2s ease-out, opacity .2s ease-out";
newc.style.webkitTransition = "width .2s ease-out, height .2s ease-out, opacity .2s ease-out";*/

document.getElementById("roombtn1").onclick= 
	function(){
		room1();
	}
	
document.getElementsByClassName("one")[0].onclick= 
	function(){
		restart1();
	}



	
function restart1(){
	document.getElementById("room1").style.width= "68.76px";
	document.getElementById("room1").style.height = "87.86px";
	document.getElementById("roominfo1").style.display = "none";
	document.getElementById("room1").style.opacity = "1";
	document.getElementById("room1").style.zIndex = "0";
/*alert() ;	document.getElementById("room1").style.transition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	document.getElementById("room1").style.webkitTransition = "width 1s ease-out, height 1s ease-out, opacity 1s";	*/

}
	
function room1(){
	document.getElementById("room1").style.width = "400px";
	document.getElementById("room1").style.height = "400px";
	document.getElementById("room1").style.opacity = ".5";
	document.getElementById("room1").style.zIndex = "4";
	document.getElementById("roominfo1").style.display = "block";
	document.getElementById("room1").style.transition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	document.getElementById("room1").style.webkitTransition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	//document.getElementById("room1").onclick=function(){	alert('off');	} null;
}


