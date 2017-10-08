var buttonWidth = 230;
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

$(document).ready(function() {
	$(".menuBtn").each(function(i) {
			$(this).hover(buttonOver, buttonOut);
			
			$(this).click(function(event) {
				let oldContentId = getContentId(selectedBtnId);
				let clickedBtnId = jQuery(this).attr("id");
				let newContentId = getContentId(clickedBtnId);
				
				$("#"+oldContentId).stop().fadeOut( 200, function () {
						$("#"+newContentId).stop().fadeIn(200);
					}
				);
				
				selectedBtnId = clickedBtnId;
			} );
		}
	);
		
	$("#header").each(function(i) {
			$(this).hover(headerOver, headerOut);
		}
	);
	
	/*//submit contact form to FormSpree using AJAX
	var message = "";

	$("#btn-contact-form").on("click", function() {
		message = $("#contact-form").serialize();
		$.ajax({
			url: "//formspree.io/glng7121@gmail.com", 
			method: "POST",
			data: {message: message},
			dataType: "json"
		});
		alert("Message was sent!");
		return false;
	});
	*/
});
