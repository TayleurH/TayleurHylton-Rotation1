function setup(){

	createCanvas(600,500);

	background(255); 

}

function draw(){




push();

translate(225,200);
fill(255,0,0);
rotate(PI/4.0);
rect(0,0,50,50);

pop();


push();

translate(300,200);
fill(0,255,0);
rotate(PI/12.0);
rect(0,0,50,50);

pop();


push();

translate(400,200);
fill(0,0,255);
rotate(PI/5.0);
rect(0,0,50,50);

pop();


}












