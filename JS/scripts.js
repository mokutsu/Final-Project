console.log("Hello!");

function myClickFunction(x) {
    x.classList.toggle("change");

    // How can I get this same function to also make the menu change display properties

    var mobileMenuDisplay = document.getElementById("theMobileMenu").style.display;
    
    if (mobileMenuDisplay == "none") {
        // set display proerty to "block"
        mobileMenuDisplay.style.display = "block";
    }
        else {
        // set diplay property to "none"
        mobileMenuDisplay.style.dispaly = "none";
    }

    console.log("worked");
}

