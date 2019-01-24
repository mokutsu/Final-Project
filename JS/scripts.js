console.log("Hello!");

function myClickFunction(e) {
    element = e.target
    element.classList.toggle("change");

    // How can I get this same function to also make the menu change display properties

    var mobileMenuDisplay = document.getElementById("theMobileMenu");
    
    if (mobileMenuDisplay.style.display == "none" || mobileMenuDisplay.style.display == "") {
        // set display proerty to "flex"
        mobileMenuDisplay.style.display = "flex";
    }
        else {
        // set diplay property to "none"
        mobileMenuDisplay.style.display = "none";
    }

    console.log("worked");
}

document.querySelector('.hamburger-icon').addEventListener('click', myClickFunction)