todaysDate();
telefonskaStevilkaPresledki();

function todaysDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() +1;
	var yyyy = today.getFullYear();

	if(dd<10)
		dd='0'+dd;

	else if(mm<10)
		mm='0'+mm

	today= yyyy+'-'+mm+'-'+dd;
	document.getElementById("birthday").setAttribute("max", today);
}

function calculateBmi(){
	var weight = parseInt(document.getElementById("weight").value);
	var height = parseInt(document.getElementById("height").value);
	var result = (weight / ((height*height)/10000)).toFixed(2);
	
	if(isNaN(weight))
		void(0);	
	else if(isNaN(height))
		void(0);
	else
		document.getElementById("bmi").value = result;
	
}

function telefonskaStevilkaPresledki(){
	document.getElementById("phone").addEventListener("keyup", function(){
		txt=this.value;
		if(txt.length==3 || txt.length==7)
			this.value=this.value+" ";
	})
}

function sweetalert(){
	event.returnValue=false;
	Swal.fire({
		title: 'Form sent!',
		confirmButtonColor: '#b3b3cc',
		icon: 'success',
		html: 'We will contact you in the next 24 hours!',
	}).then(function() {
		document.getElementById("form").submit();
	})
}
