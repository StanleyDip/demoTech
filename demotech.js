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
		
		/* Notification Bell Animation*/
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

		

	// /*Adding cart hover */
	
	$(document).ready(function(){
		$(".cart").click(function(){
			$(".addd").slideToggle();
			let cartItems=localStorage.getItem("productsInCart");
			cartItems=JSON.parse(cartItems);
			let productContainer=document.querySelector("#products");
			let cartCost=localStorage.getItem("totalCost");
			productContainer.innerHTML='';
			Object.values(cartItems).map(item => {
			productContainer.innerHTML+=`
			<fieldset > 
    
			<ion-icon name="close-circle-sharp" id="ion"></ion-icon>
			<img class="products-image"src="./products/${item.tag}.jpg">
			<span class="product-title">${item.name}</span>
			<span class="price">${item.price}/-</span>
			<span class="quantity"><ion-icon name="arrow-back-circle-outline" id="ion"></ion-icon>${item.inCart}<ion-icon name="arrow-forward-circle-outline" id="ion"></ion-icon></span>
			<span class="total">${item.inCart*item.price}/-</span>
			</fieldset>`
	});
	productContainer.innerHTML+=`
	   <fieldset>
		<span class="totalAmount">TotalCost: ${cartCost}/- </span> 
  	 </fieldset>
	`});
	}); 
	/* Add to cart button*/
	let products=[ /* Object array of the items*/
		{
			name:"A4 Tech Bloody B500N",
			price:2400,
			inCart:0,
			tag:"b500n"
		},
		{name:"Tplink Deco M4(Single Pack)",
		price:4500,
		inCart:0,
		tag:"m4"
		},
		{
			name:"Hp Monitor Hp22f",
			price:21000,
			inCart:0,
			tag:"hp22f"
		}
	];
	let carts=document.getElementsByClassName("addToCart");
	let cartSpan=document.getElementById('cartSpan');
	for(let i=0;i<carts.length;i++){ /* Loops for the item elements*/
		carts[i].addEventListener('click', () =>{
			callCartsFunction(products[i]); /* when the add to cart button is clicked*/
			totalCost(products[i]);
			displayCart();
		});
	}

	callCartsFunction=(products)=>{ /*Step 1 */
		let productNumbers=localStorage.getItem('callCartsFunction');
		productNumbers=parseInt(productNumbers);
		if(productNumbers){/*When the add to cart have already been clicked */
			localStorage.setItem('callCartsFunction',productNumbers+1);
			cartSpan.textContent=productNumbers+1;
		}
		else{ /*When we are clicking thw first time and when the cart's span value is zero*/
			localStorage.setItem('callCartsFunction',1);
			cartSpan.textContent=1;
		}
		setProductItems(products); /*Step 2: Add the clicked elements in the local storage */
	}

	setProductItems=(products)=>{ /*Step 2: Add the clicked elements in the local storage */
		
		let cartItems=localStorage.getItem('productsInCart');
		cartItems=JSON.parse(cartItems);/*to convert back to objects */

		if(cartItems !=null){
			if(cartItems[products.tag]==undefined){ /* When the new elements have not been added*/
				cartItems={
					...cartItems,
					[products.tag]:products /*Added  */
				}
			}
			cartItems[products.tag].inCart +=1;
		}else{
			products.inCart=1;
			cartItems={
				[products.tag]:products
			}
		}
		
		localStorage.setItem("productsInCart",JSON.stringify(cartItems)); /* to send the json format and store it to the local storage*/
	}

	totalCost= (products) =>{
		// products.price=parseInt(products.price.substring(0,products.price.length-2));
		let cartCost=localStorage.getItem("totalCost");
		
		if(cartCost!=null){
			cartCost=parseInt(cartCost);
			localStorage.setItem("totalCost",products.price+cartCost);
		}else{
			localStorage.setItem("totalCost",products.price);
		}
		

		
	}
	onloadCartValue=()=>{ /* For loading the previous add to cart item lists*/
		let productNumbers=localStorage.getItem('callCartsFunction');
		if(productNumbers){
			cartSpan.textContent=productNumbers;
		}
	}

	displayCart= ()=>{
	let cartItems=localStorage.getItem("productsInCart");
	cartItems=JSON.parse(cartItems);
	let showthem=document.querySelector(".addd").display="block";
	let productContainer=document.querySelector("#products");
	let cartCost=localStorage.getItem("totalCost");
	if(cartItems && productContainer){
		productContainer.innerHTML='';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML+=`
			<fieldset > 
			<ion-icon name="close-circle-sharp" id="ion"></ion-icon>
			<img class="products-image"src="./products/${item.tag}.jpg">
			<span class="product-title">${item.name}</span>
			<span class="price">${item.price}/-</span>
			<span class="quantity"><ion-icon name="arrow-back-circle-outline" id="ion"></ion-icon>${item.inCart}<ion-icon name="arrow-forward-circle-outline" id="ion"></ion-icon></span>
			<span class="total">${item.inCart*item.price}/-</span>
			</fieldset>`
	});
	productContainer.innerHTML+=`
	   <fieldset>
		<span class="totalAmount">TotalCost: ${cartCost}/- </span> 
  	 </fieldset>`
	}
	}

	onloadCartValue(); /*Now to load the previous cart items */
	//  displayCart();