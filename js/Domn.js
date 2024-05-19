const respon = document.querySelector('#alert')
const alertBad = document.querySelector('#alert-bad')
const formContac = document.querySelector('#form-contac')
const inputs = document.querySelectorAll('#form-contac input')
const comment = document.querySelector('#area')

const expresiones = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

const fields = {
    name: false,
    email: false,
    comment: false,
}

eventListeners()
function eventListeners() {
    formContac.addEventListener('submit', contac)
    const year = new Date()
    let fullYear = year.getFullYear()
    document.querySelector('#year').innerText = fullYear
}

const checkInput = (e) => {

    switch (e.target.name) {
        case 'name':
            if (e.target.value !== '') fields.name = true                   
            break;

        case 'email':
            if (expresiones.email.test(e.target.value)) fields.email = true
            break;

        case 'comment':
            if (e.target.value !== '') fields.comment = true
            break;

        default:
            break;
    }
}

comment.addEventListener('keyup', checkInput)

inputs.forEach(input => {
    input.addEventListener('keyup', checkInput)
    input.addEventListener('blur', checkInput)
})


async function contac(e) {
    e.preventDefault()


    const form = new FormData(formContac)

    if (fields.name && fields.email && fields.comment) {

        const response =  await fetch('https://formspree.io/f/xgedrvbb',{
            method: 'POST',
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        
        if (response.ok) {

            formContac.reset()

            alerts(true, 'good')
            setTimeout(() => {
                alerts(false, 'good')
            }, 3000)
            
        }
    } else {

        alerts(true, 'bad')
        setTimeout(() => {
            alerts(false, 'bad')
        }, 3000)
    }

}

function alerts(option, message) {

    if (option && message === 'good') {
        respon.classList.add('active')

    } else if (option && message === 'bad') {        
        alertBad.classList.add('active')

    } else if (!option && message === 'good') {
        respon.classList.remove('active')

    } else if (!option && message === 'bad') {       
        alertBad.classList.remove('active')
    }
}