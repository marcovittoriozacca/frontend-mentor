//funziona che valida la mail
function validation(email){

    if(email == 0){
        sendBtm.setAttribute('disabled', 'true');
        emailForm.classList.add('formError', );
        errorMessage.innerHTML = 'Valid email required'

        const timer = setInterval(() => {
            errorMessage.innerHTML = ''
            emailForm.classList.remove('formError');
            sendBtm.removeAttribute('disabled', 'true');
            clearInterval(timer);
        }, 1000);

    }else{
        return flag = true;
    }
}

const features = [
    {
        icon: './assets/img/images/icon-list.svg',
        alternative: 'check-icon',
        description: 'Product discovery and building what matters'
    },
    {
        icon: './assets/img/images/icon-list.svg',
        alternative: 'check-icon',
        description: 'Measuring to ensure updates are a success'
    },
    {
        icon: './assets/img/images/icon-list.svg',
        alternative: 'check-icon',
        description: 'And much more!'
    },
] 

//prendiamo ul
const list = document.querySelector('ul');

features.forEach(element => {

        //creiamo gli elementi li, figure, img, p
        const listElement = document.createElement('li');
        const figureElement = document.createElement('figure');
        const imgElement = document.createElement('img');
        const pElement = document.createElement('p');
        
        //aggiungiamo la class m-0 e p-' al figure
        figureElement.classList.add('m-0','p-0');
        imgElement.classList.add('img-fluid', 'w-100');
        listElement.classList.add('d-flex', 'align-items-start', 'column-gap-3');
        pElement.classList.add('p-0', 'm-0');
        //aggiungiamo src e alt con i rispettivi elementi presi dall'array di oggetti
        imgElement.setAttribute('src', `${element.icon}`);
        imgElement.setAttribute('alt', `${element.alternative}`);
    
        pElement.innerHTML = `${element.description}`
    
        //aggiungiamo effettivamente all'HTML
        list.append(listElement);
        listElement.append(figureElement, pElement);
        figureElement.append(imgElement)
});

const sendBtm = document.getElementById('sendBtn');
const emailForm = document.getElementById('emailForm');
const errorMessage = document.getElementById('errorMessage');

sendBtm.addEventListener('click', function(){

    let flag = false;
    flag = validation(emailForm.value);

    if(flag == true){
        let mail = emailForm.value;
        localStorage.setItem("emailValue", mail);
        
    }
});



