
function resetForm() {
    document.getElementById("regForm").reset();
}

function NumSpace(ikhan) {
    if (ikhan.value.match(/[^A-Za-z\s ]/))   /* Only Alphabets Allowed */
    {
        ikhan.value = ikhan.value.replace(/[^A-Za-z\s ]/, '');
    }
}

function AlphaAllow(ikhan) {
    if (ikhan.value.match(/\s/g))   /* Space Not Allowed */
    {
        ikhan.value = ikhan.value.replace(/\s/g, '');
    }
    if (ikhan.value.match(/[^A-Za-z\s ]/))   /* Only Alphabets Allowed */
    {
        ikhan.value = ikhan.value.replace(/[^A-Za-z\s ]/, '');
    }
}

function AlphaAllowWithSpace(ikhan) {
    if (ikhan.value.match(/[^A-Za-z\s ]/))   /* Only Alphabets Allowed */
    {
        ikhan.value = ikhan.value.replace(/[^A-Za-z\s ]/, '');
    }
}

function NumberAllow(ikhan) {
    if (ikhan.value.match(/\s/g))  /* Space Not Allowed */
    {
        ikhan.value = ikhan.value.replace(/\s/g, '');
    }
    if (ikhan.value.match(/[^0-9]/))   /*  only Numbers Allowed*/
    {
        ikhan.value = ikhan.value.replace(/[^0-9]/, '');
    }
}

function DateSyntax(ikhan) {
    if (ikhan.value.match(/\s/g))  /* Space Not Allowed */
    {
        ikhan.value = ikhan.value.replace(/\s/g, '');
    }
    if (ikhan.value.match(/[^0-9-]/))   /*  only Numbers Allowed*/
    {
        ikhan.value = ikhan.value.replace(/[^0-9-]/, '');
    }
}

function EmailSyntax(ikhan) {
    if (ikhan.value.match(/\s/g))  /* Space Not Allowed */
    {
        ikhan.value = ikhan.value.replace(/\s/g, '');
    }
    if (ikhan.value.match(/[`^~|":<>?\/!#$%&*+\=\\';()[\]{},"']/))   /*   special characters Not Allowed  except _ .@*/
    {
        ikhan.value = ikhan.value.replace(/[`^~|":<>?\/!#$%&*+\=\\';()[\]{},"']/, '');
    }
}

function NoSpecialChar(ikhan) {
    if (ikhan.value.match(/[`^~|":<>?\/!#$%*+=\-\\';[\]{}"']/))   /*   special characters Not Allowed  except _ .@*/
    {
        ikhan.value = ikhan.value.replace(/[`^~|":<>?\/!#$%*+=\-\\';[\]{}"']/, '');
    }
}

function NoSpaceNoSpecial(ikhan) {
    if (ikhan.value.match(/\s/g)) {
        ikhan.value = ikhan.value.replace(/\s/g, '');
    }
    if (ikhan.value.match(/[`^~|":<_>()&?\/!#$%*+@.=\-\\';[\]{}"']/))   /*   special characters Not Allowed  except _ .@*/
    {
        ikhan.value = ikhan.value.replace(/[`^~|":<_>()&?\/!#$%*+@.=\-\\';[\]{}"']/, '');
    }
}

function detail(ikhan) {
    if (ikhan.value.match(/[`^~|":<>?\/!#$%*+=\-\\';[\]{}"']/))   /*   special characters Not Allowed  except _ .@*/
    {
        ikhan.value = ikhan.value.replace(/[`^~|":<>?\/!#$%*+=\-\\';[\]{}"']/, '');
    }
}

function NoSpace(ikhan) {
    if (ikhan.value.match(/\s/g)) {
        ikhan.value = ikhan.value.replace(/\s/g, '');
    }
}

/*
 ^         start of string
 [a-z0-9]  a or b or c or ... z or 0 or 1 or ... 9
 +         one or more times (change to * to allow empty string)
 $         end of string
 /i        case-insensitive
 
 Email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 
 /[^0-9]/   -> only Numbers Are Allowed
 
 */

function checkValue() {
    var message = "";
    var regForm = document.regForm;

    // Check Password & ConfirmPassword
    if (regForm.password.value != regForm.ConfirmPassword.value) {
        alert("Password did not match, please enter a  confirm Password");
        regForm.ConfirmPassword.focus( );
        return false;
    }

    // Check E-mail & ConfirmEmail
    if (regForm.email.value != regForm.ConfirmEmail.value) {
        alert("E-mail address did not match, please enter a  confirm E-mail");
        regForm.ConfirmEmail.focus( );
        return false;
    }

    if (regForm.email.value != "") {
        var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!reg.test(regForm.email.value))
        {
            alert("Please enter a valid email id");
        }
    }

    // Check Roll No Length
    if (regForm.RollNo.value.length < 10) {
        alert("Roll Number must be atleast 10 Digit.");
        regForm.RollNo.focus( );
        return false;
    }

    // Check Zipcode Length
    if (regForm.Zip.value.length < 6) {
        alert("Zip Code must be atleast 6 Digit.");
        regForm.Zip.focus( );
        return false;
    }
    // Check mobile Length
    if (regForm.mobile.value.length < 10) {
        alert("Mobile Number must be atleast 10 Digit.");
        regForm.mobile.focus( );
        return false;
    }
    // Check Password Length
    if (regForm.password.value.length < 6) {
        alert("Password must be atleast 6 Characters.");
        regForm.password.focus( );
        return false;
    }

    var Chkhereby = document.getElementById("Chkhereby");
    if (Chkhereby.checked == false) {
        message = message + "Please check terms and condition !" + "\n";
    }

    if (message != "") {
        alert(message);
        return false;
    } else {
        if (confirm("Are you sure, you want to submit? ")) {
            return true;
        }
        else {
            return false;
        }
    }

    /*
     // Check Gender field
     if ( !regForm.gender[0].checked && !regForm.gender[1].checked)
     {   message;	}
     
     Check Date of Birth field
     if (regForm.dobMonth.options[regForm.dobMonth.selectedIndex].text=="-Month-")	
     {   message;	} */
}


function openWin() {
    myWindow = window.open("terms&condition.html", "Terms", "width=650,height=700");
}
function closeWin() {
    myWindow.close();
}