var context;
var $fun;
var $funDiv;
var graphic;
// var showcase = [letterL, ];


/**
 *
 accel events and touch mapped to Synth and Graphic
 Synth plays notes
 Graphic does visuals
 *
 */

$(document).ready(function(){
  setup();
});

var checkFeatureSupport = function(){

  if (!window.DeviceMotionEvent) {
    alert("DeviceMotionEvent not supported");
  }
}


var setup = function(){
  checkFeatureSupport();
  graphic = new Graphic();
  $fun = $("#fun");
  $funDiv = $("#fun .item div");
  //add events
  $fun.bind("mousedown", touchActivate);
  $fun.bind("mouseup", touchDeactivate);
  $fun.bind("touchstart", touchActivate);
  $fun.bind("touchend", touchDeactivate);

  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
  }

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', devOrientHandler, false);
  }

}


//touch and gesture mappings to synth and graphic
//
var touchActivate = function(e){
  graphic.touchActivate(e);
}

var touchDeactivate = function(e){
  graphic.touchDeactivate(e);
}

function deviceMotionHandler(eventData) {
  graphic.accelHandler(eventData);
}

function devOrientHandler(eventData) {
  graphic.orientHandler(eventData);
}

function Graphic(){
  this.activated = false;;
  this.background_color="purple";
}

function randomNum(m,n) {
    
    //minumum number
    m = parseInt(m);
    
    //maximum number
    n = parseInt(n);
    // get a random number
    return Math.floor(Math.random() * (n - m + 1) ) + m;
}


Graphic.prototype.touchActivate = function(e){
  this.activated = true;
  $fun.css("background-color", "#626A03");
  // $fun.css("background-color", this.background_color);
  // $funDiv.css("background-color", this.background_color);

  var nchild = randomNum(1, 5);
  console.log(nchild);

  $("#fun .newitem").removeClass('show');
  $("#fun .newitem:nth-child("+nchild+")").addClass('show');


}

Graphic.prototype.touchDeactivate = function(e){
  this.activated = false;
  $fun.css("background-color","white");
  $funDiv.css("background-color","white");
}


Graphic.prototype.accelHandler = function(accel){
 var x = accel.accelerationIncludingGravity.x;
 var y = accel.accelerationIncludingGravity.y;
 var z = accel.accelerationIncludingGravity.z;
 var h = x/60.0;
 var c  = HSVtoRGB(h,1,1);
 this.background_color = "rgb("+c.r+","+c.g+","+c.b+")" ;

 if(this.activated){
    $("#orientation").html("<br />x: "+x+"<br />y: "+y+"<br />z: "+z);
    $("#fun .newitem div").css("border-radius", Math.abs(x)*2+"vh");
    $("#fun .newitem div").css("width", Math.abs(y)*10+"px");
    $fun.css("background-color", this.background_color);
 }
}

Graphic.prototype.orientHandler = function(orient){
}

 //accepts parameters
 //* h  Object = {h:x, s:y, v:z}
 //* OR
 //* h, s, v

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (h && s === undefined && v === undefined) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
    };
}

