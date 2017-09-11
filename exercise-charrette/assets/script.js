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
		$(".pulse").toggleClass("pulse1");
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

});

