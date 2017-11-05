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
