$(document).ready(function(){

	$(window).scroll(function() {			
		$(".flock").addClass("flock1");
	});

	var scrollPos
	var win = $(window);

	// setInterval(function(){ 
	
	// 	scrollPos+= 10; 

	// 	$('.hill').css({
	// 		'transform' : 'rotate(' + scrollPos + 'deg)',
	// 		'transition' : 'ease 10s',
	// 	});

	// 	}, 2000);

	// n = 1;

	win.scroll(function(){ 
		
		// update the scroll position variable
		scrollPos = $(this).scrollTop();
		
		// update the web page with the variables value

		$('.hill').css({
			'transform' : 'rotate(' + scrollPos/125 + 'deg)',
		});

		$(".sheep1").addClass("walk1"),
		$(".sheep2").addClass("walk2"),
		$(".sheep3").addClass("walk3"),

		$('.sun').css({
			'transform' : 'translateX(' + scrollPos/200 + 'vw)',
		});

		$('.moon').css({
			'transform' : 'translateX(' + scrollPos/230 + 'vw)',
		});

		if (scrollPos + window.innerHeight >= document.body.scrollHeight) {
			window.scrollTo(0,0);
			// $('.sky').addClass('rotation-'+n+'');
			// n++;
		}

		console.log(scrollPos);

	});

	function generateStar(canvas, ctx, starRadius){
			ctx.beginPath();
			ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius*Math.random(), 0, Math.PI*2, false);
      //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);
    
      var rand = Math.random();
      if(rand <= 0.5){
				  ctx.fillStyle = "rgba(255, 255, 255, 1)";
				  ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
				  ctx.shadowBlur = 3;
			}
			else if(rand > 0.75){
				  ctx.fillStyle = "rgba(255, 254, 196, 1)";
				  ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
				  ctx.shadowBlur = 4; 
			}
			else{
				  ctx.fillStyle = "rgba(192, 247, 255, 1)";
				  ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
				  ctx.shadowBlur = 7;
			}
			ctx.fill();
	}
  
  	$(function(){
    
		var canvas = document.getElementById("space");
		var context = canvas.getContext("2d");
    
    onresize = function(){
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    onresize();
		
    interval = setInterval(
      function(interval){
        generateStar(canvas, context, 3);
      }
      , 1);

    setTimeout( // Stop creating stars after 10s
      function(){ clearInterval(interval); }
      ,10000
    );
    
	});


});



