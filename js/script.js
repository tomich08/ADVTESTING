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
	
document.getElementById("room2").onclick= 
	function(){
		room2();
	}
	
document.getElementsByClassName("one")[0].onclick= 
	function(){
		restart1();
	}
	
document.getElementsByClassName("get")[0].onclick= 
	function(){
		directions();
	}
	
document.getElementById("close").onclick= 
	function(){
		done();
	}
	
function done(){
	document.getElementById("path").style.width = "2%";
	document.getElementById("path").style.transition = "width 5s ease-out, opacity 1s";
	document.getElementById("path").style.webkitTransition = "width 5s ease-out, opacity 1s";
	
	document.getElementById("filler").style.width = "98%";
	document.getElementById("filler").style.transition = "width 5s ease-out, opacity 1s";
	document.getElementById("filler").style.webkitTransition = "width 5s ease-out, opacity 1s";
	
	document.getElementById("done").style.opacity= "0";
	document.getElementById("done").style.transition = "opacity 1s";
	document.getElementById("done").style.webkitTransition = "opacity 1s";
	
	document.getElementById("room1arrow").style.height = "0px";
	document.getElementById("room1arrow").style.opacity = "0";
	
}


function directions(){
	var currentRoom = "516";
	
	if(currentRoom == "516"){
	document.getElementById("filler").style.width = "2%";
	document.getElementById("filler").style.transition = "width 3s ease-out, opacity 1s";
	document.getElementById("filler").style.webkitTransition = "width 3s ease-out, opacity 1s";

	document.getElementById("path").style.width = "98%";
	document.getElementById("path").style.transition = "width 3s ease-out, opacity 1s";
	document.getElementById("path").style.webkitTransition = "width 3s ease-out, opacity 1s";

	document.getElementById("popup").style.width= "0";
	document.getElementById("popup").style.height = "0";
	document.getElementById("popup").style.opacity= "0";
	
	document.getElementById("done").style.opacity= "1";
	document.getElementById("done").style.transition = "opacity 5s";
	document.getElementById("done").style.webkitTransition = "opacity 5s";
	
	document.getElementById("room1arrow").style.height = "25px";
	document.getElementById("room1arrow").style.opacity = "1";
	document.getElementById("room1arrow").style.transition = "height 4s ease-out, opacity 5s";
	document.getElementById("room1arrow").style.webkitTransition = "height 4s ease-out, opacity 5s";
	}else if(currentRoom == "515"){
	document.getElementById("path").style.width = "90%";
	document.getElementById("path").style.transition = "width 3s ease-out, opacity 1s";
	document.getElementById("path").style.webkitTransition = "width 3s ease-out, opacity 1s";
	}
}

	
function restart1(){
	document.getElementById("popup").style.width= "0";
	document.getElementById("popup").style.height = "0";
	document.getElementById("popup").style.opacity= "0";
/*alert() ;	document.getElementById("room1").style.transition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	document.getElementById("room1").style.webkitTransition = "width 1s ease-out, height 1s ease-out, opacity 1s";	*/
	


}
	
function room1(){
	document.getElementById("popup").style.width = "400px";
	document.getElementById("popup").style.height = "400px";
	document.getElementById("popup").style.opacity = ".5";
	document.getElementById("popup").style.transition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	document.getElementById("popup").style.webkitTransition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	

	//document.getElementById("room1").onclick=function(){	alert('off');	} null;
}

function room2(){
	document.getElementById("popup").style.width = "400px";
	document.getElementById("popup").style.height = "400px";
	document.getElementById("popup").style.opacity = ".5";
	document.getElementById("popup").style.transition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	document.getElementById("popup").style.webkitTransition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	
	

	//document.getElementById("room1").onclick=function(){	alert('off');	} null;
}


