//=====================================
//Javascript for Dharma Teas index.html
//======================================

// Variable Declarations
let sideMenu = document.getElementById("side_menu");
let main = document.getElementById("main");
let sliderButtons = document.getElementById("sliderButtons");
let current = 0;
let index = 0;
let sliderButtonClicked = false;
let sliderImages = document.querySelectorAll(".slide"),
	buttonLeft = document.querySelector("#slider_left"),
	buttonMid = document.querySelector("#slider_mid"),
	buttonRight = document.querySelector("#slider_right");

let accountDropdown = document.getElementById('accountDropdown');
let accountArrow = document.getElementById('accountArrow');

let cartDropdown = document.getElementById('cartDropdown');
let cartArrow = document.getElementById('cartArrow');

let newDropdown = document.getElementById("newDropdown");
let newLink = document.getElementById("newLink");
let newDropdownWindow = document.getElementById("newDropdownWindow");
let newArrow = document.getElementById("newArrow");

let teaLink = document.getElementById("teaLink");
let teaDropdownWindow = document.getElementById("teaDropdownWindow");
let teaArrow = document.getElementById("teaArrow");

let essentialsLink = document.getElementById("essentialsLink");
let essentialsDropdownWindow =  document.getElementById("essentialsDropdownWindow");
let essentialsArrow = document.getElementById("essentialsArrow");

let signUpButton = document.getElementById("signUp");
let email = document.getElementById("email");
let prompt = document.getElementById("prompt");
let topDropDown = document.getElementById("topDropDown");
let emailForm = document.getElementById("emailForm");

let shop = document.querySelector('.shop_dropdown');
let shopDropDown = document.getElementById('shopDropDown');
let shopLinks = document.getElementById('shopLinks');

let service = document.querySelector('.service_dropdown');
let serviceDropDown = document.getElementById('serviceDropDown');
let serviceLinks = document.getElementById('serviceLinks');

let about = document.querySelector('.about_dropdown');
let aboutDropDown = document.getElementById('aboutDropDown');
let aboutLinks = document.getElementById('aboutLinks');


//== Functions for the html onclick="f()" attribute slide menu mobile view == //
function openSlideMenu(){
	sideMenu.style.width = "250px";
}

function closeSlideMenu(){
	sideMenu.style.width = "0px";
}
//

/*===Desktop view dropdown menu functions=====*/
function activateAccountDropdown(){
	accountDropdown.style.display = "block";
	accountArrow.style.display = "block";
}

function activateCartDropdown(){
	cartDropdown.style.display = "block";
	cartArrow.style.display = "block";
}

function activateNewDropdown(){
	newDropdown.style.display = "block";
	newDropdownWindow.style.display = "flex";
	newArrow.style.display = "block";
	newLink.style.color = "#A51E36";
}

function activateTeaDropdown(){
	newDropdown.style.display = "block";
	teaDropdownWindow.style.display = "flex";
	teaArrow.style.display = "block";
	teaLink.style.color = "#A51E36";
}

function activateEssentialsDropdown(){
	newDropdown.style.display = "block";
	essentialsDropdownWindow.style.display = "flex";
	essentialsArrow.style.display = "block";
	essentialsLink.style.color = "#A51E36";
}

function closeDropdown(){
	newDropdown.style.display = "none";

	newDropdownWindow.style.display = "none";
	newArrow.style.display = "none";
	newLink.style.color = "black";

	teaDropdownWindow.style.display = "none";
	teaArrow.style.display = "none";
	teaLink.style.color = "black";

	essentialsDropdownWindow.style.display = "none";
	essentialsArrow.style.display = "none";
	essentialsLink.style.color = "black";

	accountDropdown.style.display = "none";
	accountArrow.style.display = "none";

	cartDropdown.style.display = "none";
	cartArrow.style.display = "none";
}



/*=== functions for the slider_header ===*/

//This functino clears all images
function reset(){
	//loop through the collection setting display to none on each
	for(let i = 0; i < sliderImages.length; i++){
		sliderImages[i].style.display = "none";
	}
	buttonLeft.classList.remove("current");
	buttonMid.classList.remove("current");
	buttonRight.classList.remove("current");
}
//This function initializes the slider
function startSlide(){
	//Check if a button has been pressed to break out of recursion
	 if(sliderButtonClicked){
	 	return;
	 }
	
	//First reset the images
	reset();
	
	//Check if slide show has reached the end and reset index
	if(index > sliderImages.length - 1){
		index = 0;
	} 
	//Show approptpraite image
	if(index == 0){
		showFirstImage();
	} else if(index == 1){
		showSecondImage();
	} else if(index == 2){
		showThirdImage();
	}
	index++;
	setTimeout(startSlide, 5000); //change image every 2 sec
}
function showFirstImage(){
	reset();
	sliderImages[0].style.display = "inline-block";
	buttonLeft.classList.add("current");
}
function showSecondImage(){
	reset();
	sliderImages[1].style.display = "inline-block";
	buttonMid.classList.add("current");
}

function showThirdImage(){
	reset();
	sliderImages[2].style.display = "inline-block";
	buttonRight.classList.add("current");
}

/*======Event Listeners====*/
buttonLeft.addEventListener('click', function(){
	showFirstImage();
});
buttonMid.addEventListener('click', function(){
	showSecondImage();
});

buttonRight.addEventListener('click',function(){
	showThirdImage();
});
//eventListener flags when to stop the slide show
for(let i = 0; i < sliderButtons.children.length; i++){
	sliderButtons.children[i].addEventListener('click', function(){
		sliderButtonClicked = true;
	});
}
/*===========================
	Footer Section Functions     TODO FIGURE OUT WHY THE ARROWS ARE GLITCHIN
===========================*/
//WANT INSIDER PERKS? Drop Down Logic + animation
topDropDown.addEventListener('click', function(){

	if(emailForm.style.display == "" || emailForm.style.display == "none"){
		topDropDown.classList.remove("rotateArrowDown");
		topDropDown.classList.add("rotateArrowUp");
		emailForm.style.display = "block";
	} else {
		topDropDown.classList.remove("rotateArrowUp");
		topDropDown.classList.add("rotateArrowDown");
		emailForm.style.display = "none";

	}
		
});
//Sign up button email logic
signUpButton.addEventListener('click',function(event){
	
	if(email.value.length == 0 ){
		event.preventDefault();	
		email.style.color = "red";
		email.style.fontWeight = "bold";
		prompt.style.display = "block"; 
	}

});

shopDropDown.addEventListener('click', function(){
		if(shopLinks.style.display == "none" || shopLinks.style.display == ""){
		shopDropDown.classList.remove("rotateArrowDown");
		shopDropDown.classList.add("rotateArrowUp");
		shopLinks.style.display = "block";
		shop.style.borderBottom = "none";
	} else {
		shopDropDown.classList.remove("rotateArrowUp");
		shopDropDown.classList.add("rotateArrowDown");
		shopLinks.style.display = "none";
		shop.style.borderBottom = "1px solid black";

	}
});

serviceDropDown.addEventListener('click', function(){
	if(serviceLinks.style.display == "none" || serviceLinks.style.display == ""){
		serviceDropDown.classList.remove("rotateArrowDown");
		serviceDropDown.classList.add("rotateArrowUp");
		serviceLinks.style.display = "block";
		service.style.borderBottom = "none";
	} else {
		serviceDropDown.classList.remove("rotateArrowUp");
		serviceDropDown.classList.add("rotateArrowDown");
		serviceLinks.style.display = "none";
		service.style.borderBottom = "1px solid black";
	}
});

aboutDropDown.addEventListener('click', function(){
	if(aboutLinks.style.display == "none" || aboutLinks.style.display == ""){
		aboutDropDown.classList.remove("rotateArrowDown");
		aboutDropDown.classList.add("rotateArrowUp");
		aboutLinks.style.display = "block";
		about.style.borderBottom = "none";
	} else {
		aboutDropDown.classList.remove("rotateArrowUp");
		aboutDropDown.classList.add("rotateArrowDown");
		aboutLinks.style.display = "none";
		about.style.borderBottom = "1px solid black";
	}
});

/*==========
	Main
==========*/
startSlide();