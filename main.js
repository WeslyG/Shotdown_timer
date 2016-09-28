function timer(){
		$('#start').addClass('hidden');
		$('#stop').removeClass('hidden');
		var obj=document.getElementById('Rt');
		obj1 = obj.innerHTML;
		window.Timeout = setInterval(
	function(){ 
		obj.innerHTML--;
			if(obj.innerHTML==-1){
			obj.innerHTML=obj1;
			}
			else if (obj.innerHTML==0){
			document.getElementById('player').play();
			}
	}, 1000);
}

function Stop () {
	clearTimeout(Timeout);
	document.getElementById('Rt').innerHTML = 0;
	$('#stop').addClass('hidden');
	$('#start').removeClass('hidden');
}

function two () {
 var obj=document.getElementById('Rt');
 obj.innerHTML=2;
}

function three () {
 var obj=document.getElementById('Rt');
 obj.innerHTML=3;
}

function four () {
 var obj=document.getElementById('Rt');
 obj.innerHTML=4;
}

function five () {
 var obj=document.getElementById('Rt');
 obj.innerHTML=5;
}

function six () {
 var obj=document.getElementById('Rt');
 obj.innerHTML=6;
}

function seven () {
 var obj=document.getElementById('Rt');
 obj.innerHTML=7;
}

if (Call == false) {
	$('#stop').addClass('hidden');
	}
else if (Call == true) {
	$('#start').addClass('hidden');
}





