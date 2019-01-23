/* ===================================
    for menu 
=====================================*/

function updateMenuBtnWidth(width) {
	buttonWidth = width;
	newButtonWidth = width+40;
	console.log("new menu btn width: "+buttonWidth);
}

function buttonOver() {
	let button = $(this);
	let active_btn_style = {"backgroundColor": "#42bbc9", "color": "#fff", "width": "105%"};
	//TweenMax.to(button, 0.2, {css: {scaleX: 0.8}, ease:Cubic.easeInOut});
	if (isMobile) {
		button.css(active_btn_style);
	}
	else {
		button.stop().animate(active_btn_style, 150);
	}
}

function buttonOut() {
	let button = $(this);
	let inactive_btn_style = {"backgroundColor": "#fff", "color": "#085191", "width": "100%"};
	//TweenMax.to(button, 0.2, {css: {scaleX: 1}, ease:Cubic.easeInOut});
	if (isMobile) {
		button.css(inactive_btn_style);
	}
	else {
		button.stop().animate(inactive_btn_style, 150);
	}
}

function getContentId (btnId) {
	switch (btnId) {
		case "btn-home":
			return "content-home";
			break;
		case "btn-about":
			return "content-about";
			break;
		case "btn-projects":
			return "content-projects";
			break;
		case "btn-contact":
			return "content-contact";
			break;
		case "btn-resume":
			return "content-resume";
			break;
		default:
			return null;
	}
}

/* ===================================
    for header
=====================================*/

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

function animateHeader() {
  tl.staggerTo(splitPhrase.chars, 0, {bottom: 250}, 0);
  tl.staggerTo(splitPhrase.chars, 2, {bottom: 5, ease: Bounce.easeOut}, 0.02);
}

/* ===================================
    for contact form
=====================================*/

function checkFormValid () {
    var isNameValid = true, isEmailValid = true, isMsgValid = true;
    if (!$("#name-contact-form").val()) {
        isNameValid = false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email-contact-form").val())) {
        isEmailValid = false;
    }
    if (!$("#msg-contact-form").val()) {
        isMsgValid = false;
    }
    return isNameValid && isEmailValid && isMsgValid;
}

/* ===================================
    misc functions
=====================================*/

//mobilecheck function from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser (that regex though)
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

/* ===================================
    handler setup
=====================================*/
let selectedBtnId = "btn-home";
let isMobile = window.mobilecheck();

$(document).ready(function() {
    if (isMobile) {
        $("#menu-desktop").hide();
        $("#menu-mobile-btn").show();
    }
    
    $(".menuBtn").each(function(i) {
		$(this).hover(buttonOver, buttonOut);
		$(this).click(function(event) {
			let oldContentId = getContentId(selectedBtnId);
			let clickedBtnId = jQuery(this).attr("id");
			let newContentId = getContentId(clickedBtnId);
			$("#"+oldContentId).stop().fadeOut(200);
			$("#"+oldContentId).promise().done(function() {
				$("#"+newContentId).stop().fadeIn(200);
			});
			selectedBtnId = clickedBtnId;
		});
	});
    
    $("#menu-mobile-btn").click(function() {
        $("#menu-mobile-btn").hide();
        $("#menu-desktop").show();
        $(".overlay").show();
    });
    
    $(".overlay").click(function() {
        $("#menu-desktop").hide();
        $("#menu-mobile-btn").show();
        $(".overlay").hide();
        $('html, body').animate({
            scrollTop: ($('#main-content').offset().top)
        }, 200);
    });
      
    $("#header").each(function(i) {
		if (!isMobile) {
			$(this).hover(headerOver, headerOut);
        }
    });
    
    //code below is based off of https://stackoverflow.com/questions/7335780/how-to-post-a-django-form-with-ajax-jquery/7336591#7336591
    $("#contact-form").submit(function () {
        if (checkFormValid()) {
            $.ajax({
                data: $(this).serialize().replace(/%0D%0A/g, "<br>"), //ensures consistency with html formatting of the google web app emails. todo: fix app to accept encoded chars
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                dataType: "jsonp",
                success: function(data, status, jqXHR) {
                    alert("Successfully submitted! I'll email a reply as soon as possible. (I'm so glad someone is using the form! Thank you! :D)");
                    $("#contact-form")[0].reset();
                },
                error: function(jqXHR, status, errorThrown) {
                    alert("Error: submission has failed. Please try again. Sorry for the inconvenience!");
                }
            });
        }
        else {
            alert("Error: one or more fields of the form are invalid.");
        }
        return false;
    });
});
