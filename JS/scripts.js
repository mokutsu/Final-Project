console.log("Hello!");

function myClickFunction(x) {
    x.classList.toggle("change");

    // How can I get this same function to also make the menu change display properties

    var mobileMenuDisplay = document.getElementById("theMobileMenu").style.display;
    
    if (mobileMenuDisplay == "none") {
        // set display proerty to "flex"
        mobileMenuDisplay.style.display = "flex";
    }
        else {
        // set diplay property to "none"
        mobileMenuDisplay.style.display = "none";
    }

    console.log("worked");
}

