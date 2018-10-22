var mySong;
var img1;
var img2;
var img3;
var img4;

function preload(){
    mySong=loadSound('./assets/piano.mp3');
    img1=loadImage('./assets/background.jpg');
    img2=loadImage('./assets/1.jpg');
    img3=loadImage('./assets/2.jpg');
    img4=loadImage('./assets/3.jpg');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    //tint(255, 200);
    analyser=new p5.Amplitude();
    analyser.setInput();
    mySong.play();

}

function draw() {

  var level = analyser.getLevel();
  var size = map(level, 0, 1, 0, 300);
  var speed= random(-size/5,size/5);
  var col1=lerpColor(color(245, 203, 167),color(211, 84, 0),size/50);

  var voice=map(mouseX,0,width,0,2);
  mySong.amp(voice);

  image(img1, 0, 0,windowWidth,windowHeight);
  //tint(255, 255);
  image(img2, 80,260,img2.width/5,img2.height/5);
  image(img3, 900+speed,100,img3.width/14,img3.height/14);
  image(img4, 1080+speed,450,img4.width/14,img4.height/14);
  //background(200,200,200,20);

  for (i=0; i<120; i+=10){
    push();
    translate(width / 2 + 20, 260);
    //frameRate(1000);
    //rotate(frameCount);
    strokeWeight(1.5);
    stroke(col1);
    //stroke(220, 118, 51, 200);
    noFill();
    //rectMode(RADIUS)
    rect(i/5,i/5,size+i,size-i);
    rect(i/5,i/5,size-i,size+i);
    rect(i/5,i/5,-(size+i*1.4),(size-i*1.4));
    rect(i/5,i/5,(size+i*1.4),-(size-i*1.4));
    pop();
}


var num=15;
var loc=200;
var col3=lerpColor(color(245, 203, 167),color(211, 84, 0),size/30);

for (var i = 0; i < num; i++) {
  stroke(col3);
		var
			t = frameCount / 200 * TWO_PI,
			angle = TWO_PI / num * i,
			d = map(sin(t + angle * 3), -1, 1, 100, 200),
			x = loc + cos(angle) * d,
			y = loc + sin(angle) * d,
			dd = size/1.2;
		  x2 = map(sin(t), -1, 1, loc - dd, loc + dd) + cos(angle) * 20,
			y2 = map(cos(t), -1, 1, loc - dd, loc + dd) + sin(angle) * 20,
			sz = map(sin(t + angle * 3), -1, 1, 25, 65),
			sz2 = map(sin(t + angle * 3), -1, 1, 0, sz * .9);
		line(x2, y2, x, y);
		noFill();
		ellipse(x, y, sz, sz);
		ellipse(x, y, sz2, sz2);
		fill(col3);
		ellipse(x, y, 5, 5);
	}


var col2=lerpColor(color(255),color(211, 84, 0),mouseX/width);
var hertz = map(mouseX, 0, width, 20.0, 440.0);
  stroke(col2);
  for (var x = 0; x < width; x+=4) {
    var angle = map(x, 0, width, TWO_PI * hertz, 0);
    var sinValue = sin(angle) * 30 * (size/5);
    line(x, height, x, height-sinValue);
    fill(col2);
    ellipse(x, height-sinValue, 3.5);
  }


}
