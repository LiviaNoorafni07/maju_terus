
function validateForm(event){
    event.preventDefault();

    var email = document.forms["kt_sign_in_form"]["email"].value;
    var password = document.forms["kt_sign_in_form"]["password"].value;

    if(email === "" || password === ""){
        alert("Silahkan isi email dan password!");
        return false;
    } else {
        window.location.href = "/dashboard";
        return true;
    }
};