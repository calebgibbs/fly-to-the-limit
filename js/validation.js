var bookingForm = document.querySelector("#booking"); 

bookingForm.onsubmit = function(event) { 

	var totalErrors = 0;

	var namePattern = new RegExp("^[A-Za-z' ]{1,30}$"); 
	// var emailPattern = new Regexp("^[a-zA-Z@._0-9'-]{6,40}$");
	var phonePattern = new RegExp("^[0-9()+]{5,20}$");  

	var nameInput = document.querySelector("#name"); 
	var nameMessage = document.querySelector("#name-message"); 

	var emailInput = document.querySelector("#email"); 
	var emailMesage = document.querySelector("email-message");

	var phoneInput = document.querySelector("#phonenum"); 
	var phoneMessage = document.querySelector("#phone-message");

	var dateOption = document.querySelectorAll("[name=date-pick]"); 
	var dateMessage = document.querySelector("#date-message"); 

	var dateIsSelected = false;

	if( namePattern.test( nameInput.value ) ) {
		console.log("Valid");
		nameMessage.innerHTML = "";
	} else { 
		console.log("invalid"); 
		nameMessage.innerHTML = "*Please enter a valid name"; 
		totalErrors++;
	} 

	// if( namePattern.test( emailInput.value ) ) {
	// 	emailMesage.innerHTML = ""; 
	// } else { 
	// 	emailMesage.innerHTML = "*Please enter a valid emial address"; 
	// 	totalErrors++;
	// }

	if( phonePattern.test( phoneInput.value )){ 
		phoneMessage.innerHTML = "";	
	} else { 
		phoneMessage.innerHTML = "*Please enter a valid phone number";
		totalErrors++;
	} 

	for(var i = 0; i < dateOption.length; i++ ) { 
		if( dateOption[ i ].selected){ 
			dateIsSelected = true;
		}
	} 

	if(dateIsSelected == false) {
		dateMessage.innerHTML = "*Please select a date";
		totalErrors++;
	} else { 
		dateMessage.innerHTML = "";
	}

	if(totalErrors > 0) {
		event.preventDefault(); 
	}
}  


