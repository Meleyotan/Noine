//JavaScript Code
	function display() {
	alert('Welcome to Noine')// body...
	}
	// document.write(""+Date())
	console.log(Date())

	function validateName() {
		var field=document.getElementById('vali').value;
		var regex=/^[A-Za-z]{2,15}$/;

		if (regex.test(field)) {
			document.getElementById('message1').style.color="Green"
			document.getElementById('message1').innerHTML="<strong>Good!</strong>";
		}
		else{
			document.getElementById('message1').style.color="Red"
			document.getElementById('message1').innerHTML="<strong>Invalid</strong>";
		}
    }
    
    // function validateAge(){
    //     var field=document.getElementById('age').value;
    //     var regex=/^[A-Za-z]/;

    //     if (regex.test(field)){
    //         document.getElementById('message5').style.color="Green"
    //         document.getElementById('message5').innerHTML="<strong>Good!</strong>";
    //         console.log("I am fine!")
    //     }

    //     else{
    //         document.getElementById('message5').style.color="Red"
    //         document.getElementById('message5').innerHTML="<strong>Invalid</strong>";
    //     }
    //I will prolly find out what is wrong with this code 9th Jan 2021
    }


	function validateSurname() {
		var field=document.getElementById('space').value;
		var regex=/^[A-Za-z]{2,15}$/;

		if (regex.test(field)){
		    document.getElementById('message2').style.color="Green" 
			document.getElementById('message2').innerHTML="<img>Good!</strong>";}
		else{
			document.getElementById('message2').style.color="Red";
			document.getElementById('message2').innerHTML="<strong>Invalid<strong>";}
		}

	function validate() {
		var field=document.getElementById('long').value;
		var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (regex.test(field)){
		document.getElementById('message3').style.color="Green";
		document.getElementById('message3').innerHTML="<strong>Good!</strong>";}

		else{
		document.getElementById('message3').style.color="Red"
		document.getElementById('message3').innerHTML="<strong>Invalid</strong>";}
	}

    function validatePass() {
    	var field=document.getElementById('password').value;
    	var regex=/^[A-Za-z]{8,10}/

    	if (regex.test(field)){
    	document.getElementById('message4').style.color="Green"
    	document.getElementById('message4').innerHTML="<strong>Good!</strong>";}

    	else{
    	document.getElementById('message4').style.color="Red"	
    	document.getElementById('message4').innerHTML="<strong>Invalid</strong>";}
    }


    function Submitted() {
    	var firstName=document.getElementById('vali').value;
    	var lastName=document.getElementById('space').value;
    	var emailAdress=document.getElementById('long').value;
    	var userName=firstName+ " " + lastName;
    	
    	document.getElementById('loginDetails').innerHTML ="<h2>You have successfully submitted!</h2>";//The login Details is computed
    	document.getElementById('loginDetails').innerHTML+="<p>" + userName.toUpperCase();
    	document.getElementById('loginDetails').innerHTML+="<br>"+ emailAdress;
    }


    function SubmittedL() {
    	var emailAdress=document.getElementById('email').value;
    	var passWord=document.getElementById('pass').value;
    	var userName=emailAdress+ " " + passWord;

    	document.getElementById('loginDetails').innerHTML = "<h2>Login sucessful!</h2>"
    	document.getElementById('loginDetails').innerHTML+="<p>" + userName.toUpperCase();}
