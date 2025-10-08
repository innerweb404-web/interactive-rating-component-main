

const form = document.getElementById('form');
const inputs = document.querySelectorAll('input[type="button"]');
const inputGroup = document.querySelector('.input-group');
let selectedRating;
const successMessage = document.getElementById('success-message');



//If no rating was selected by the user, display a custom alert message
function showAlert() {
  successMessage.style.display = "block";
  requestAnimationFrame(() => {
    successMessage.classList.add("show");
  });

  setTimeout(() => {
    successMessage.classList.remove("show");
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 400); 
  }, 3000);
}

function changeBtnColor(element){
    element.style.backgroundColor = 'hsla(0, 0%, 100%, 1.00)'
}


inputGroup.addEventListener('click', e =>{
    if(e.target.tagName !== 'INPUT'){
        return;
    }
    inputs.forEach(input => {
        input.style.backgroundColor = '';
    });
    changeBtnColor(e.target)
    console.log(e.target.value);
    selectedRating = e.target.value;
});

form.addEventListener('submit', e => {
    e.preventDefault();

    if(!selectedRating){   
        showAlert();             
        return;
    }

    localStorage.setItem('rate', selectedRating);
    window.location.href = "thank-you-card.html";

})

