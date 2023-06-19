const subscribeButton = document.querySelector(".subscribe-input__button")
const subscribeIcon = document.querySelector(".subscribe-input__button_icon")

subscribeButton.addEventListener("click", function(){
	subscribeIcon.classList.add("subscribe-icon-animation");
	subscribeButton.classList.add("bg-deep-blue");
	subscribeButton.classList.remove("bg-hover-blue");
	setTimeout(function(){
		subscribeIcon.classList.remove("subscribe-icon-animation");
	}, 1000);
	setTimeout(function(){
		subscribeIcon.classList.add("subscribe-icon-second-animation");
	}, 1000);
	setTimeout(function(){
		subscribeIcon.classList.remove("subscribe-icon-second-animation");
	}, 2000);
	setTimeout(function(){
		subscribeIcon.classList.add("subscribe-icon-third-animation");
	}, 2000);
	setTimeout(function(){
		subscribeIcon.classList.remove("subscribe-icon-third-animation");
		subscribeButton.classList.remove("bg-deep-blue");
		subscribeButton.classList.add("bg-hover-blue");
	}, 3000);
})