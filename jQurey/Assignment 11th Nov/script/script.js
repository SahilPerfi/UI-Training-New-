	var slideIndex = 1;
	function moveSlides(n) {
		displaySlide(slideIndex += n);
	}

	function activeSlide(n) {
		displaySlide(slideIndex = n);
	}
	$(document).ready(function(){
		var slideList = [
			{
				"ID": "001",
				"Image": "json/banner.jpg" 
			},
		 
			{
				"ID": "002",
				"Image": "json/banner2.jpg" 
			},
		  
			{
				"ID": "003",
				"Image": "json/banner3.jpg" 
			},
		 
			{
				"ID": "002",
				"Image": "json/banner4.jpg" 
			},
	
			{
				"ID": "003",
				"Image": "json/banner5.jpg" 
			},
			{
				"ID": "003",
				"Image": "json/banner2.jpg" 
			},
			{
				"ID": "003",
				"Image": "json/banner3.jpg" 
			},
			{
				"ID": "003",
				"Image": "json/banner4.jpg" 
			}
		]
		var slideHtml = "";
		var slideDots = "";
		slideList.map(function(slides, index){
			slideHtml += '<div class="slide"><img src="'+slides.Image+'"></div>';
			slideDots += '<span class="footerdot" onclick="activeSlide('+index+1+')"></span>'
		})
		$('.slides').html(slideHtml);
		$('.slidedots').html(slideDots);
		var totalslides = document.getElementsByClassName("slide");
		for (i = 1; i < totalslides.length; i++) {
			totalslides[i].style.display = "none";
		}
		var totaldots = document.getElementsByClassName("footerdot");
		totaldots[0].className += " active";
	})

	/* Main function */
	function displaySlide(n) {
		var i;
		var totalslides = document.getElementsByClassName("slide");
		var totaldots = document.getElementsByClassName("footerdot");
		
		if (n > totalslides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = totalslides.length;
		}
		for (i = 0; i < totalslides.length; i++) {
			totalslides[i].style.display = "none";
		}
		for (i = 0; i < totaldots.length; i++) {
			totaldots[i].className = totaldots[i].className.replace(" active", "");
		}
		totalslides[slideIndex - 1].style.display = "block";
		totaldots[slideIndex - 1].className += " active";
	}