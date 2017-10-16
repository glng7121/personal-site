var buttonWidth = 250;
var newButtonWidth = buttonWidth+40;
let selectedBtnId = "btnHome";

function buttonOver() {
	var button = $(this);
	//TweenMax.to(button, 0.2, {css: {scaleX: 0.8}, ease:Cubic.easeInOut});
	button.stop().animate({backgroundColor: "#42bbc9", color: "#fff", width: newButtonWidth+"px"}, 150);
	//document.getElementById("buttons").style.backgroundColor = "#000";
	//document.getElementById("buttonLabels").style.color = "#fff";
}

function buttonOut() {
	var button = $(this);
	//TweenMax.to(button, 0.2, {css: {scaleX: 1}, ease:Cubic.easeInOut});
	button.stop().animate({backgroundColor: "#fff", color: "#085191", width: buttonWidth+"px"}, 150);
	//document.getElementById("buttons").style.backgroundColor = "#fff";
	//document.getElementById("buttonLabels").style.color = "#000";
}

function headerOver() {
	var header = $(this);
	var headerText = $("#header-text");
	headerText.addClass("italic");
	header.stop().animate({backgroundColor: "#35a6b7", letterSpacing: "4px", wordSpacing: "15px", boxShadow: "1px 1px 1px teal"}, 150);
}

function headerOut() {
	var header = $(this);
	var headerText = $("#header-text");
	headerText.removeClass("italic");
	header.stop().animate({backgroundColor: "#42bbc9", letterSpacing: "1px", wordSpacing: "0px", boxShadow: "1px 1px 1px navy"}, 150);
}

function getContentId (btnId) {
	switch (btnId) {
		case "btnHome":
			return "content-home";
			break;
		case "btnAbout":
			return "content-about";
			break;
		case "btnProjects":
			return "content-projects";
			break;
		case "btnContact":
			return "content-contact";
			break;
		case "btnResume":
			return "content-resume";
		break;
		default:
			//inexistent button. shouldn't happen. do nothing
	}
}

function updateMenuPos() {
	let menuCoord = document.getElementById("menu").getBoundingClientRect();
	/*if (menuCoord.top < 0) {
		menu.style.top = 50+"px";
	}
	console.log("menu window-top (JS): "+menuCoord.top);
	console.log("menu position-top (jquery): "+$("#menu").position().top); */
}
