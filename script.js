const form = document.querySelector('form');
const userName = document.getElementById('Name');
const email = document.getElementById('Email');
const message = document.getElementById('Message');
const messageBody = "Name : "+ userName
        + "<br> From : "+ email
        + "<br> Message : "+ message;

function sendEmail(){

        Email.send({
        Host : "smtp.elasticemail.com",
        Username : "manubimsara000@gmail.com",
        Password : "0517AB829F92BB04BDDFF288FE5977D8F303",
        To : 'manubimsara000@gmail.com',
        From : "manubimsara000@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
    message => alert("Message sent Succesfully")
    
    );

}
form.addEventListener("submit", (e) =>{

    e.preventDefault();
    sendEmail();

});


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

// const scriptURL = 'https://script.google.com/macros/s/AKfycby30vqEOTv7gV6ngCjEJHZ-xqlhVcBTbyi4avEc0mdFjHs89scKcdkWH0MQpKYkjRea/exec'
//     const form = document.forms['submit-to-google-sheet']
  
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