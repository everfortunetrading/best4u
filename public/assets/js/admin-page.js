function show(element) {
    document.getElementById(element).style.visibility = "visible";
    document.getElementById(element).style.height = "auto";
    document.getElementById(element).style.width = "auto";
    document.getElementById(element).style.padding = "20px";
}

function hide(element) {
    document.getElementById(element).style.visibility = "hidden";
    document.getElementById(element).style.height = "0";
    document.getElementById(element).style.width = "0";
    document.getElementById(element).style.padding = "0";
}

function showHide(element) {
    document.getElementById(element).style.visibility == "visible" ? hide(element) : show(element);
}

// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
        } 
    else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
        }
    }

//Function To Display Popup
function div_show(id) {
    document.getElementById(id).style.display = "block";
}

//Function to Hide Popup
function div_hide(id){
    document.getElementById(id).style.display = "none";
}
