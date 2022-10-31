function res1() {
	document.getElementById('res1').innerHTML = Number(document.getElementById('x1').value) + Number(document.getElementById('y1').value);
}

function res2() {
	document.getElementById('res2').innerHTML = Number(document.getElementById('x2').value) - Number(document.getElementById('y2').value);
}

function res3() {
	document.getElementById('res3').innerHTML = Number(document.getElementById('x3').value) * Number(document.getElementById('y3').value);
}

function res4(){
	if(Number(document.getElementById('y4').value) != 0){
		document.getElementById('res4').innerHTML = Number(document.getElementById('x4').value) / Number(document.getElementById('y4').value);
	}else{
		document.getElementById('res4').innerHTML = 'На ноль делить нельзя!'
	}
}

function res5() {
	document.getElementById('res5').innerHTML = Math.pow(Number(document.getElementById('x5').value), Number(document.getElementById('y5').value));
}


