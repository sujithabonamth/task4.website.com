function updatePromoCode() {
    var stateDropdown = document.getElementById("state");
    var promoCodeField = document.getElementById("promoCode");
 
   
    var selectedState = stateDropdown.value;
 
   
    promoCodeField.value = selectedState.toUpperCase() + "-PROMO";
  }
function showGreeting() {
    var genderRadioButtons = document.getElementsByName("gender");
    var selectedGender;
 
    for (var i = 0; i < genderRadioButtons.length; i++) {
        if (genderRadioButtons[i].checked) {
            selectedGender = genderRadioButtons[i].value;
            break;
        }
    }
 
    if (selectedGender === "Male") {
        alert("Hello Sir");
    } else if (selectedGender === "Female") {
        alert("Hello Lady");
    }
}
function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

document.getElementById("myname").addEventListener("input", clearNameError);
document.getElementById("email").addEventListener("input", clearEmailError);
document.getElementById("orgname").addEventListener("input",clearOrgError);

function validationform() {
    
    
   
    var myname = document.forms["detailsform"]["myname"].value;
    var email = document.forms["detailsform"]["email"].value;
    var orgname = document.forms["detailsform"]["orgname"].value;
    var errorMessageDiv = document.getElementById("errorMessage");
    var successMessageDiv = document.getElementById("successMessage");
 
 
    var nameError = document.getElementById("nameerror");
    var emailError = document.getElementById("emailerror");
    var orgError = document.getElementById("orgerror");
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    orgError.innerHTML = "";
    errorMessageDiv.innerHTML = "";
    successMessageDiv.innerHTML = "";
   
    if (myname.trim() === "") {
        nameError.innerHTML = "Name is required.";
    } else if (!isValidName(myname)) {
        nameError.innerHTML = "Numbers are not allowed in the name.";
 
    }
 
    if (email.trim() === "") {
        emailError.innerHTML = "Email is required.";
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid email.";
    }
 
    if (orgname.trim() === "") {
        orgError.innerHTML = "Organization Name is required.";
    } else if (!isValidOrgname(orgname)) {
        orgError.innerHTML = "Invalid Organization Name.";
    }
 
    if (myname === "" || !isValidEmail(email) || orgname === "") {
        // Display the error message
        errorMessageDiv.innerHTML = "Please fill all the required fields below";
       
        return false; // Prevent form submission
    } else {
        errorMessageDiv.innerhtml=""
        // Display the success message
        successMessageDiv.innerHTML = "Form submitted successfully!";
        console.log("Validation form completed successfully");
        return false; // Allow the form submission
    }

    function isValidName(myname) {
        var nameRegex = /^[a-zA-Z\-]+$/;
        return nameRegex.test(myname);
    }
 
 
function isValidOrgname(orgname) {
    var nameRegex = /^[a-zA-Z\-]+$/;
    return nameRegex.test(orgname);
}
 
}
function clearNameError() {
    document.getElementById("nameerror").textContent = "";
}
function clearEmailError() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailerror");
 
    if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid email.";
        return false; // Email is invalid
    } else {
        emailError.innerHTML = "";
        return true; // Email is valid
    }
}
function clearOrgError(){
    document.getElementById("orgerror").innerHTML = "";

}
 function clearForm() {
 
    
   document.getElementById("form").reset();
   document.getElementById("successMessage").innerHTML = "";

 }
