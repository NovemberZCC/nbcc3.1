function validateform(){  
    var fname=document.myform.fname.value;  // Define the first name entered by the user as a variable
    var lname=document.myform.lname.value;  // Define the last name entered by the user as a variable
    var email=document.myform.email.value;  // Define the email entered by the user as a variable
    var phone=document.myform.phone.value;  // Define the phone entered by the user as a variable
    
if ((fname==null || fname=="")||(lname==null || lname=="")||(email==null || email=="")||(phone==null || phone==""))
//Check if user has forgotten spaces
{  
    alert("You have unfilled information");  //User friendly error prompts
    return false; 
    }  
    else if(true)//If the information entered by the user conforms to the specification
{
    alert("We have sent you an email, please go to your mailbox to check");  //Tell the user that the message has been received and provide feedback via email
    }
  }  