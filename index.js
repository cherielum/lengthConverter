// document.getElementById('output').style.visibility='hidden';


document.getElementById("inchInput").addEventListener("input", function(e){ 
	document.getElementById('output').style.visibility='visible';
	document.getElementById('cmOutput').style.visibility='visible';
	document.getElementById('ydOutput').style.visibility='visible';
	document.getElementById('cmOutput').style.visibility='visible';
	document.getElementById('inOutput').style.visibility='hidden';

//listens to how many INCHES we type in or scroll to!
	let inch = e.target.value; 
	document.getElementById('cmOutput').innerHTML= inch*2.54;
	document.getElementById('ftOutput').innerHTML= inch/12;
	document.getElementById('ydOutput').innerHTML= inch/36;
	});

document.getElementById("cmInput").addEventListener("input", function(e){ 
	document.getElementById('output').style.visibility='visible';
	document.getElementById('inOutput').style.visibility='visible';
	document.getElementById('ydOutput').style.visibility='visible';
	document.getElementById('ftOutput').style.visibility='visible';
	document.getElementById('cmOutput').style.visibility='hidden';

//listens to how many CENTIMETERS we type in or scroll to!
	let cm = e.target.value; 
	document.getElementById('inOutput').innerHTML= cm/2.54;
	document.getElementById('ftOutput').innerHTML= cm*30.48;
	document.getElementById('ydOutput').innerHTML= cm/91.44;
	});

document.getElementById("ftInput").addEventListener("input", function(e){ 
	document.getElementById('output').style.visibility='visible';
	document.getElementById('cmOutput').style.visibility='visible';
	document.getElementById('ydOutput').style.visibility='visible';
	document.getElementById('inOutput').style.visibility='visible';
	document.getElementById('ftOutput').style.visibility='hidden';
	
//listens to how many FEET we type in or scroll to!
	let ft = e.target.value; 
	document.getElementById('inOutput').innerHTML= ft*12;
	document.getElementById('cmOutput').innerHTML= ft*30.48;
	document.getElementById('ydOutput').innerHTML= ft/0.33;
	});

document.getElementById("ydInput").addEventListener("input", function(e){ 
	document.getElementById('output').style.visibility='visible';
	document.getElementById('cmOutput').style.visibility='visible';
	document.getElementById('ftOutput').style.visibility='visible';
	document.getElementById('inOutput').style.visibility='visible';
	document.getElementById('ydOutput').style.visibility='hidden';
	
//listens to how many YARD we type in or scroll to!
	let yd = e.target.value; 
	document.getElementById('inOutput').innerHTML= yd*36;
	document.getElementById('cmOutput').innerHTML= yd*91.44;
	document.getElementById('ftOutput').innerHTML= yd/3;
	});

