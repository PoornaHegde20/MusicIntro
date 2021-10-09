
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
    
    if(!validateDate(formInput[1]))
    {
      alert('Invalid date format!');
      return false;
    }

    formInput[2]=document.forms["myForm"]["mail"].value;
    if (formInput[2] == "") {
      alert("Email must be filled out!");
      return false;
    }
    if(!validateEmail(formInput[2]))
    {
      alert("Invalid email!");
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
    
    alert("Form Submitted Successfully!");
  }

  function validateEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.mail.value))
      return true;
    return false;
}

  function validateDate(dateString){     
    if(dateString.match(/[a-z]/)!=null ||  dateString.match(/[A-Z]/)!=null)
      return false;
       
          
    // Match the date format through regular expression      
        
        let operator = dateString.split('/');      
      
        //string into month, date and year      
        let datepart = [];      
        if (operator.length>1){      
            datepart = dateString.split('/');      
        }      
        let day= parseInt(datepart[0]);      
        let month = parseInt(datepart[1]);      
        let year = parseInt(datepart[2]);      
              
        //list of days of a month      
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
        if (month==1 || (month>2 && month<13)){      
            if (day>ListofDays[month-1]){      
                ///This check is for Confirming that the date is not out ofrange      
                return false;      
            }      
        }else if (month==2){      
            let leapYear = false;      
            if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                leapYear = true;      
            }      
            if ((leapYear == false) && (day>=29)){      
                return false;      
            }else      
            if ((leapYear==true) && (day>29)){           
                return false;      
            }      
        } 
        else
          return false;
        if(year>2021)
          return false;
        else if(year==2021)
        {
          if(month>10)
            return false;
        }     
      
    return true;      
}   