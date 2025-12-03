"use strict";

function openModal(){
    document.querySelector('.background-modal').style.display = "block";
    document.querySelector('.modal').classList.add('modal-open')
}

function closeModal(){
    document.querySelector('.background-modal').style.display = "none";
    document.querySelector('.modal').classList.remove('modal-open')

}

let form = document.querySelector('#contactForm');

form.email.addEventListener('change', function(){
    emailValid(this)
});

function emailValid(inputEmail){
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;
        let testEmail = emailRegex.test(inputEmail.value);
        let small = inputEmail.nextElementSibling;
// ^ nextElementSibling sert à attraper la balise qui est juste après


            if(testEmail){
                small.innerHTML = 'Adresse Valide';
                small.classList.remove('emailFailed')
                small.classList.add('emailSuccess')
            } 
            else{
                small.innerHTML = 'Adresse non valide';
                small.classList.remove('emailSuccess')
                small.classList.add('emailFailed')
            };


};






// if(email == regex){
//     document.addEventListener(validation)
// }

// ____________________________________________________________________________________________________________________________
// alert('Je suis JavaScript')

// Alerte avec variable

// let message; 
// message ='Jason'
// alert(message);


    
            

