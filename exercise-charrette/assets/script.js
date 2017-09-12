$(document).ready(function(){
	
	$('#button-3').click(function() {			
		$(this).addClass("bye");
	});

	$('#button-6').click(function() {			
		$(".sun").toggleClass("sun1");
	});

	$('#button-7').click(function() {		
		$(this).toggleClass("replace");
	});

	$('#button-8').click(function() {			
		$(".moon").toggleClass("moon1");
	});

	$('#button-9').click(function() {			
		$(this).toggleClass("eat");
	});

	$('#button-10').click(function() {			
		$(".burger").toggleClass("burger1");
	});

	$('#button-11').click(function() {			
		$(".sushi").toggleClass("sushi1");
	});

	$('#button-12').click(function() {			
		$(".fries").toggleClass("fries1");
	});

	$('#button-13').click(function() {			
		$(".fish").toggleClass("fish1");
	});

	$('#button-14').click(function() {			
		$(".whole").toggleClass("whole1");
	});

	$('#button-15').click(function(){
    	$(this).animate({borderLeftWidth: "10px"});
    });

    $("#button-15").click(function(){
        $(this).animate({width: "-=100px"});
    });

    $("#button-17").click(function(){
        $(".container").toggleClass("invert");
    });

    $("#button-18").click(function(){
        $(".container").toggleClass("grayscale");
    });

    $("#button-19").click(function(){
        $(".container").toggleClass("blur");
    });

    $("#button-20").click(function(){
        $(this).toggleClass("flood");
    });

    $("#button-21").click(function(){
    	$(this).clone().appendTo("body");
	});

	$('#button-22').click(function() {			
		$(".heartbeat").toggleClass("heartbeat1");
	});

	$('#button-23').click(function() {			
		$(".happy").toggleClass("happy1");
	});

	$('#button-24').click(function() {			
		$(".spin").toggleClass("spin1");
	});
	
	$("#button-27").click(function(){
    	$(".panel").clone().appendTo(this);
	});

	$('#button-28').click(function() {			
		$(".yolk").toggleClass("yolk1");
	});

	$("#button-29").click(function(){
        $(".cover2").show();
        $(".cover1").hide();
    }); 

	$("#button-32").click(function(){
        $(".cover2").hide();
        $(".cover1").show();
    });

	$("#button-33").click(function(){
        $(".item").animate( {"width": "+=80vw"},1000);
    });

	$("#button-34").click(function(){
        $(".screen").animate({"width":'toggle'},800);
    });

	$('#button-35').click(function() {			
		$(".grow").animate({"height":'toggle'},800);
	});

	$(function() {
  		var count = 0, countRate = 0, output = $('.output');
  		setInterval(function(){output.html(count)}, 1);	
  		$('#button-37').click(function() { count += 1 });
	});
    
	$("#button-37").hover(function(){
        $(".output").css("opacity", "1");
        }, function(){
        $(".output").css("opacity", "0");
    });

    // $("#button-40").click(function(){
    //     $(".switch1").animate({"height":'toggle'},800);
    // }); 

});

