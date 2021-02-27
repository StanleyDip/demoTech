   //showing the lists of dropdown menu items
    let desktop=document.getElementById('desktop');
	let des=document.getElementsByClassName("hide-desktop");
	let component=document.getElementById('component');
	let comp=document.getElementsByClassName("hide-component");
	let laptop=document.getElementById('laptop');
	let lap=document.getElementsByClassName("hide-laptop");
	let monitor=document.getElementById("monitor");
	let mon=document.getElementsByClassName("hide-monitor");
	let Cart=document.getElementById("blinkCart");
		desktop.addEventListener("mouseover", function(event){
				for (var i = 0;i<des.length;i++) {
					des[i].style.display="inline-block";
				}
				//after showing desktop elements we want to hide other elements 
				for (var i = 0;i<lap.length;i++) {
					lap[i].style.display="none";
				}
				for (var i = 0;i<comp.length;i++) {
					comp[i].style.display="none";
				}
			 });
	
	laptop.addEventListener("mouseover", function(event){
			for (var i = 0;i<lap.length;i++) {
				lap[i].style.display="inline-block";
			}
			//after showing desktop elements we want to hide other elements 
			for (var i = 0;i<des.length;i++) {
				des[i].style.display="none";
			}
			for (var i = 0;i<comp.length;i++) {
				comp[i].style.display="none";
			}
			for (var i = 0;i<mon.length;i++) {
				comp[i].style.display="none";
			}
		 });

	component.addEventListener("mouseover", function(event){
			for (var i = 0;i<comp.length;i++) {
				comp[i].style.display="inline-block";
			}
			//after showing desktop elements we want to hide other elements 
			for (var i = 0;i<des.length;i++) {
				des[i].style.display="none";
			}
			for (var i = 0;i<lap.length;i++) {
				lap[i].style.display="none";
			}
			for (var i = 0;i<mon.length;i++) {
				mon[i].style.display="none";
			}
		 });
	monitor.addEventListener("mouseover", function(event){
			for (var i = 0;i<mon.length;i++) {
				mon[i].style.display="inline-block";
			}
			//after showing desktop elements we want to hide other elements 
			for (var i = 0;i<des.length;i++) {
				des[i].style.display="none";
			}
			for (var i = 0;i<lap.length;i++) {
				lap[i].style.display="none";
			}
			for (var i = 0;i<comp.length;i++) {
				comp[i].style.display="none";
			}
		 });

	//image sliding part 
 var images =[]; //array of images
 var i=0;
 var time=2000;
 images[0]="item1.jpg";
 images[1]="item3.jpg";
 images[2]="item2.jpg";
 images[3]="fantech.jpg";

 function changeImages(){
 	document.slide.src=images[i];

 	if(i<images.length-1){
 		i++;
 	}
 	else{
 		i=0;
 	}
 	setTimeout("changeImages()",time);
 }
 //when we load or enter the browser, calling the function
 window.onload=changeImages;

 //showing the item lists as a card

 // 

  
 	//loading images using forloops and creating multiple divs
	// var items=[];
	// items[0]="f.jpg";
  	// items[1]="fantech.jpg";
  	// items[2]="k511.jpg";
  	// items[3]="item3.jpg";
  	// loadItems();
  	// function loadItems(){
  	// 	for(var j=0;j<items.length;j++ ){
  	// 		document.querySelector("#imgload").innerHTML +='<div class="card" >'+
  	// 		'<img class="card-img-top" src="'+items[j]+'"alt="Card image cap">'+
  	// 		'</div>';
  			
  	// 	}
  	// }
// blinking text
 setInterval(function(){
	var text=document.getElementById("blink");
	text.innerHTML="Winter Sale is here!";
	text.style.color="#fcdb03";
	text.style.fontSize="20px";
	
	text.style.display=(text.style.display=='none'?'':'none');
},500);

//blinking Cart Text
var trigger=false;
setInterval(function(){
if(trigger===false){
	Cart.style.color="red";
}
else {
	Cart.style.color="blue";
}
trigger=!trigger;
},500);

/* Notification Panel */
$(document).ready(function(){
	$("#BellMe").click(function(){
		$("#notificationPanel").toggle();
	});
});
;

let bell=document.getElementById('BellMe');

var belltrigger=false;
setInterval(function(){
if(belltrigger===false){
	bell.src="bell0.png";
}
else {
	bell.src="bell1.png";
}
belltrigger=!belltrigger;
},500);
