function showModal(message){
    document.querySelector('.overlay .modal .modal-message').innerHTML = '';
    document.querySelector('.overlay .modal .modal-message').innerHTML = message;
    document.querySelector('.overlay .modal .btn').classList.remove('hidded');
    document.querySelector('.overlay').classList.add('opened');
}


function showLoadingModal(message){
    document.querySelector('.overlay .modal .modal-message').innerHTML = '';
    document.querySelector('.overlay .modal .modal-message').innerHTML = message;
    document.querySelector('.overlay .modal .btn').classList.add('hidded');
    document.querySelector('.overlay').classList.add('opened');
}

function showSendModal(message){
    document.querySelector('.overlay .modal .modal-message').innerHTML = '';
    document.querySelector('.overlay .modal .modal-message').innerHTML = message;
    document.querySelector('.overlay .modal .btn').classList.remove('hidded');
    document.querySelector('.overlay .modal .btn').addEventListener('click', () => {
        window.location.pathname = '/home.html';
    });
    document.querySelector('.overlay').classList.add('opened');
}

function showPhoto(){
    document.querySelector('.profile-img img').src = localStorage.getItem('userphoto');
}

function closeModal() {
    document.querySelector('.overlay').classList.remove('opened');
}

function login() {
    myHeaders = new Headers({
        "Content-Type": "application/json",
      });
    fetch('http://localhost:3333/login', {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify({
          cpf: document.querySelector('#login input.cpf').value,
          password: document.querySelector('#login input.password').value,
      })
    }).then(function(response) {
        return response.json();
    }).then(function(response){
        console.log(response);
        if(response.error){
            showModal(response.error);
        }else{
            localStorage.setItem('token', response.token);
            localStorage.setItem('name', response.name);
            localStorage.setItem('permission', response.permission);
            localStorage.setItem('cpf', response.cpf);
            localStorage.setItem('userphoto', response.userphoto);
            window.location.pathname = '/home.html';
        }
    });
  }

  function logout(){
    localStorage.removeItem('token');
    window.location.pathname = '/';
  }

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.overlay').addEventListener('click', (e) => {
        e.stopPropagation();
        if(e.target === document.querySelector('.overlay')){
            closeModal();
        }
    });

    showPhoto();
});