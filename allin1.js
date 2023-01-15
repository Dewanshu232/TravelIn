let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.visiting-places');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".place-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
getElementsByName("myDropdown")
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 
  function openPage() {
    var text = document.getElementById("search-box").value;
    let x = text.toLowerCase();
    if (x === "jaipur") {
        window.open("/jaipur.html");
    }

    if (x === "ahemdabad") {
        window.open("/ahmdbd.html");
    }
    if (x === "hawa mahal") {
        window.open("/hawamahal.html");
    }
    if (x === "jal mahal") {
      window.open("/jal mahal.html");
    }
    if (x === "chokhi dhani") {
    window.open("/chokhidhani.html");
    }
    if (x === "amer fort") {
      window.open("/amer.html");
    }
    if (x === "amer") {
      window.open("/amer.html");
  }
  if (x === "albert hall") {
    window.open("/albert hall.html");
  }
  if (x === "birla") {
    window.open("/birla mandir.html");
  }
  if (x === "birla mandir") {
    window.open("/birla mandir.html");
  }
  if (x === "gandhi aashram") {
    window.open("/gndhi.html");
  }
  if (x === "gandhi ashram") {
    window.open("/gndhi.html");
  }
  if (x === "jal mahal") {
    window.open("/jal mahal.html");
  }
  if (x === "jalmahal") {
    window.open("/jal mahal.html");
  }
  if (x === "jami masjid") {
    window.open("/jami.html");
  }
  if (x === "jantar mantar") {
    window.open("/jantar mantar.html");
  }
  if (x === "jal mahal") {
    window.open("/jal mahal.html");
  }
  if (x === "kankaria lake") {
    window.open("/kankaria lake.html");
  }
  if (x === "kankaria") {
    window.open("/kankaria lake.html");
  }
  if (x === "nahargarh fort") {
    window.open("/nahargarh.html");
  }
  if (x === "nahargarh") {
    window.open("/nahargarh.html");
  }
  if (x === "patrika gate") {
    window.open("/patrika gate.html");
  }
  if (x === "sabarmati") {
    window.open("/sabarmati.html");
  }
  if (x === "sabarmati riverfront") {
    window.open("/sabarmati.html");
  }
  if (x === "science city") {
    window.open("/science city.html");
  }
  if (x === "sidi sayed mosque") {
    window.open("/sidi saiyyed.html");
  }
  if (x === "sidi sayed") {
    window.open("/sidi saiyyed.html");
  }
  if (x === "statue of unity") {
    window.open("/statue of unity.html");
  }
  if (x === "teen darwaza") {
    window.open("/teen darwaza.html");
  }
  if (x === "teen darwaja") {
    window.open("/teen darwaza.html");
  }
  if (x === "wtp") {
    window.open("/wtp.html");
  }
  if (x === "ahemdabad") {
    window.open("/ahmdbd.html");
}
  else
  {
    window.open("/othrcity.html");
  }

  

  }



    
