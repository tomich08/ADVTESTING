// JavaScript Document

//current CSS styling
/*#box{width:400px;height:400px;display:none;margin-left:186px;margin-top:96px;z-index:50;}
.exit{cursor:pointer;}*/


document.getElementById("room1").onclick= 
	function(){
		launch1();	
	}
	

function launch1(){
	document.getElementById("box").style.width="400px";	
	document.getElementById("box").style.height="400px";
	document.getElementById("box").style.opacity="1";
	document.getElementsByClassName("roomNumber")[0].innerHTML = "works";
	document.getElementById("box").style.opacity = "1";
	document.getElementById("box").style.transition = "width 2s ease-out, height 2s ease-out, opacity 2s";
	document.getElementById("box").style.webkitTransition = "width 2s ease-out, height 2s ease-out, opacity 2s";	
	document.getElementById("box").style.marginLeft="186px";
	document.getElementById("box").style.marginTop="96px";
}

document.getElementsByClassName("exit")[0].onclick = 
	function(){
		exit();
	}
	
function exit(){
	document.getElementById("box").style.width="0px";	
	document.getElementById("box").style.height="0px";
	document.getElementsByClassName("roomNumber")[0].innerHTML = "";
	document.getElementById("box").style.opacity="0";
	document.getElementById("box").style.transition = "width 2s ease-out, height 2s ease-out, opacity 2s";
	document.getElementById("box").style.webkitTransition = "width 2s ease-out, height 2s ease-out, opacity 2s";
}

/*document.getElementById("room1").style.width = "400px";
	document.getElementById("room1").style.height = "400px";
	document.getElementById("room1").style.opacity = ".5";
	document.getElementById("room1").style.zIndex = "4";
	document.getElementById("roominfo1").style.display = "block";
	document.getElementById("room1").style.transition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	document.getElementById("room1").style.webkitTransition = "width 1s ease-out, height 1s ease-out, opacity 1s";
	
	#box{width:0px;
	height:0px;
	display:none;
	margin-left:186px;
	margin-top:96px;
	z-index:50;
	opacity:0;
	background-color:#063;
}*/
