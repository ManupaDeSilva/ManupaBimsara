
//  whatsapp message from form

function sendWA(){
    let number = "+94713641531";
    let userName = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let message = document.getElementById('Message').value; 

    var url = "https://wa.me/"+ number + "?text="
    + "Name : "+ userName + "%0a"
    + "Email : "+ email + "%0a"
    + "Message : " + message +"%0a%0a";

    window.open(url, '_blank').focus();
}


// form to google sheet

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxYj2ovnbvX5sQi0zs1QkH7whM1ub-_7qSNmNBWe2TL7O0P6Xrk7EVF9VinjOxHNdg/exec'
// const form = document.forms['google-form']
  
//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => console.log('Success!', response))
//         .catch(error => console.error('Error!', error.message))
//     })



//side_menu
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.left="0";
}
function closemenu(){
    sidemenu.style.left="-200px";
}



// education tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
        
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display = "none";
})
