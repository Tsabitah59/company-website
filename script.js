var lanjutan = document.getElementById("lanjutan");
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar-mine');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

function lanjut() {
    if (lanjutan.style.display == 'none') {
        lanjutan.style.display = 'block';
    }

    else {
        lanjutan.style.display = 'none';
    }
}

window.addEventListener('scroll', reveal);
      function reveal(){
        var reveals= document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;


        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
        }
    }

function submit(){
   
}

function hai(){
  Swal.fire({
    title: "Thank You",
    text: "Your work has been successfully submitted",
    confirmButtonColor: "#FF9B50",
    icon: "success"
  });
}