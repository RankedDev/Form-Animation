console.log('hello world');
const ErrorText = document.querySelector('.err-text');


function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //check for validation

            if (input.type === 'text' && validateUser(input)) {
                // console.log('everything is okay');
                nextSlide(parent, nextForm)
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextForm)

            } else if (input.type === 'password' && validateUser(input)) {
                nextSlide(parent, nextForm)
            } else {
                parent.style.animation = 'shake 0.3s ease'
            }

            // get rid on animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            })

        })
    })

}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log('not enough characthers');
        error('rgb(189,87,87)', 'Enter at least six(6) Charcters');
    } else {
        error('rgb(87, 189, 130)', '')
        return true
    }
}

function validateEmail(email) {
    const validation = /\S+@\S+\.\S+/;
    if (validation.test(email.value)) {
        error('rgb(87, 189, 130)', '')
        return true
    } else {
        error('rgb(189,87,87)', 'Enter Valid Email');

    }
}

function error(color, errmsg) {
    document.body.style.backgroundColor = color;
    ErrorText.innerHTML = errmsg;
    // console.log(ErrorText.innerHTML)
}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active')
}


animatedForm();