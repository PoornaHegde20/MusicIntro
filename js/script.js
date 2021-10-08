
function validateForm() {
    let formInput = [];
    formInput[0]=document.forms["myForm"]["fname"].value;
    if (formInput[0] == "") {
      alert("Name must be filled out!");
      return false;
    }
    formInput[1]=document.forms["myForm"]["DOB"].value;
    if (formInput[1] == "") {
      alert("Date of Birth must be filled out!");
      return false;
    }
    if(!formInput[1].getTime()==formInput[1].getTime())
    {
        alert("Please enter a valid date!");
        return false;
    }
    formInput[2]=document.forms["myForm"]["mail"].value;
    if (formInput[2] == "") {
      alert("Email must be filled out!");
      return false;
    }
    formInput[3]=document.forms["myForm"]["num"].value;
    if (formInput[3] == "") {
      alert("Contact Number must be filled out!");
      return false;
    }
    if(formInput[3].match(/[^0-9]/)!=null || formInput[3].length!=10)
    {
        alert("Please enter a valid phone number with 10 digits!");
        return false;
    }
    formInput[4]=document.forms["myForm"]["music"].value;
    if (formInput[4] == "") {
      alert("Music genre must be filled out!");
      return false;
    }
    
  }