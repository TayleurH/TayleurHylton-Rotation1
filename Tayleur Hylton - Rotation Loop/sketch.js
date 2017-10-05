//var x = 0;

function setup(){

	createCanvas(600,500);

	background(255); 

}

function draw(){

var i;

for(i=0;i<3;i+=1){

	push();
translate(225,50);
fill(255,0,0);	

rotate(PI/4.0);




rect((i*110)+50,100,50,50);

pop();

}
}

/*

push();

translate(i,200);
fill(255,0,0);
rotate(PI/4.0);
rect(0,0,50,50);

pop();

}
}

*/