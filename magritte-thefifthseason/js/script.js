$(document).ready(function(){

    var playmusic = document.getElementById("playmusic");
    var isPlaying = false;

    function togglePlay() {
        if (isPlaying) {
            playmusic.pause()
        } else {
            playmusic.play();
        }
    };

    playmusic.onplaying = function() {
      isPlaying = true;
    };
    
    playmusic.onpause = function() {
      isPlaying = false;
    };


    togglePlay();

    $('#menu-audio').click(function() {
        togglePlay();
    })

    $("#dropdown").hide();
    $("#menu-art").click(function(){
        $("#dropdown").fadeToggle(500);
    });

    $(".popout").hide();
    $("#menu-info").click(function(){
        $(".popout").fadeToggle(500);
    });

    $(".exit1").click(function(){
        $(".popout").fadeOut(500);
    });

    $(".exit2").click(function(){
        $("#dropdown").fadeOut(500);
    });

    $(".appear").hover(function(){
    var imgurl = $(this).data("hoverimage");
    $(this).css("background-image", "url(" + imgurl + ")")
    }, function(){
    $(this).css("background-image", "");
    });


    $(document).scroll(function(){
        scrollpos = $(this).scrollTop();
        if(scrollpos > 400) {
            $("#sky2").css("opacity", "1");
        } else if (scrollpos < 400) {
            $("#sky2").css("opacity", "0");
        } 

        if(scrollpos > 800) {
            $("#sky3").css("opacity", "1");
        } else if (scrollpos < 800) {
            $("#sky3").css("opacity", "0");
        } 

        if(scrollpos > 1200) {
            $("#sky4").css("opacity", "1");
        } else if (scrollpos < 1200) {
            $("#sky4").css("opacity", "0");
        } 

        if(scrollpos > 1600) {
            $("#sky5").css("opacity", "1");
        } else if (scrollpos < 1600) {
            $("#sky5").css("opacity", "0");
        } 

        if(scrollpos > 2000) {
            $("#sky6").css("opacity", "1");
        } else if (scrollpos < 2000) {
            $("#sky6").css("opacity", "0");
        } 

        if(scrollpos > 2400) {
            $("#sky6").addClass("zoom");
        } else if (scrollpos < 2400) {
            $("#sky6").removeClass("zoom");
        } 
        console.log(scrollpos);
    });

    $(document).scroll(function(){
        scrollpos = $(this).scrollTop();
        if(scrollpos > 400) {
            $("#hat2").css("opacity", "1");
        } else if (scrollpos < 400) {
            $("#hat2").css("opacity", "0");
        } 

        if(scrollpos > 800) {
            $("#hat3").css("opacity", "1");
        } else if (scrollpos < 800) {
            $("#hat3").css("opacity", "0");
        } 

        if(scrollpos > 1200) {
            $("#hat4").css("opacity", "1");
        } else if (scrollpos < 1200) {
            $("#hat4").css("opacity", "0");
        } 

        if(scrollpos > 1600) {
            $("#hat5").css("opacity", "1");
        } else if (scrollpos < 1600) {
            $("#hat5").css("opacity", "0");
        } 

        if(scrollpos > 2000) {
            $("#hat5").addClass("zoom");
        } else if (scrollpos < 2000) {
            $("#hat5").removeClass("zoom");
        } 

    });

    $(document).scroll(function(){
        scrollpos = $(this).scrollTop();
        if(scrollpos > 400) {
            $("#apple2").css("opacity", "1");
        } else if (scrollpos < 400) {
            $("#apple2").css("opacity", "0");
        } 

        if(scrollpos > 800) {
            $("#apple3").css("opacity", "1");
        } else if (scrollpos < 800) {
            $("#apple3").css("opacity", "0");
        } 

        if(scrollpos > 1200) {
            $("#apple4").css("opacity", "1");
        } else if (scrollpos < 1200) {
            $("#apple4").css("opacity", "0");
        } 

        if(scrollpos > 1600) {
            $("#apple5").css("opacity", "1");
        } else if (scrollpos < 1600) {
            $("#apple5").css("opacity", "0");
        } 

         if(scrollpos > 2000) {
            $("#apple6").css("opacity", "1");
        } else if (scrollpos < 2000) {
            $("#apple6").css("opacity", "0");
        } 

        if(scrollpos > 2400) {
            $("#apple6").addClass("zoom");
        } else if (scrollpos < 2400) {
            $("#apple6").removeClass("zoom");
        } 

    });


});
