//Dropdown Effect
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  const dropdownOverlay = document.querySelector('.dropdown_overlay');

  select.addEventListener('click', () => {
    caret.classList.toggle('rotate');
    menu.classList.toggle('open');
    dropdownOverlay.classList.remove('closed');
  });

  dropdownOverlay.addEventListener("click", () => {
    caret.classList.remove('rotate');
    menu.classList.remove("open"); 
    dropdownOverlay.classList.add('closed');
  });
  
  window.addEventListener('scroll', () => {
    caret.classList.remove('rotate');
    menu.classList.remove('open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      caret.classList.remove('rotate');
      menu.classList.remove('open');
      options.forEach(option => {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
});

//Currency Change Effect 
let currency = document.querySelector('#currency');
let currencyType = document.querySelectorAll('.currency_type');

currencyType.forEach(currencyValue => {
    const currencyValueHTML = currencyValue.querySelector('.currency');

    const checkCurrency = () => {
    if(currency.innerHTML == "USD") {
        currencyValueHTML.innerHTML = "$";
    } else if(currency.innerHTML == "EUR") {
        currencyValueHTML.innerHTML = "€";
    } else if(currency.innerHTML == "GBP") {
        currencyValueHTML.innerHTML = "£";
    } else if(currency.innerHTML == "NGN") {
        currencyValueHTML.innerHTML = "₦";
    } else if(currency.innerHTML == "JPY") {
        currencyValueHTML.innerHTML = "¥";
    } else if(currency.innerHTML == "CHF") {
        currencyValueHTML.innerHTML = "₣";
    } else if(currency.innerHTML == "INR") {
        currencyValueHTML.innerHTML = "₹";
    }
}

    setInterval(checkCurrency, 1000);
})

//Navbar Scroll Effect
let nav = document.querySelector('#nav');
let headerContent = document.querySelector('#header_content');

window.addEventListener('scroll', () => {
    nav.classList.toggle('navbar-chng', window.scrollY > 0);
    headerContent.classList.toggle('mt-[5.1rem]', window.scrollY > 0);
});

//Cart SLide Effect 
let cartOverlay = document.querySelector('.side_bar_overlay');
let cart = document.querySelector('.shopping_cart');
let cartBtn = document.querySelector('.cart_icon');
let closeIcon = document.querySelector('.shopping_cart .close_icon');

cartBtn.addEventListener('click', () => {
    cart.classList.add('show');
    cartOverlay.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    cart.classList.remove('show');
    cartOverlay.classList.remove('show');
});

//Wishlist SLide Effect 
let wishlist = document.querySelector('.wishlist');
let wishlistBtn = document.querySelector('.wishlist_icon');
let wishlistCloseBtn = document.querySelector('.wishlist .close_icon');

wishlistBtn.addEventListener('click', () => {
    wishlist.classList.add('show');
    cartOverlay.classList.add('show');
});

wishlistCloseBtn.addEventListener('click', () => {
    wishlist.classList.remove('show');
    cartOverlay.classList.remove('show');
});

cartOverlay.addEventListener('click', () => {
    wishlist.classList.remove('show');
    cartOverlay.classList.remove('show');
    cart.classList.remove('show');
});

//Navbar SLide Effect 
let navbar = document.querySelector('.side_navbar');
let overlay = document.querySelector('.side_navbar_overlay');
let navbarOpenBtn = document.querySelector('#menuIcon');
let navbarCloseBtn = document.querySelector('#menuCloseBtn');

navbarOpenBtn.addEventListener('click', () => {
    navbar.classList.add('show');
    overlay.classList.add('show');
});

navbarCloseBtn.addEventListener('click', () => {
    navbar.classList.remove('show');
    overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
    navbar.classList.remove('show');
    overlay.classList.remove('show');
});

//Time Countdown Effect
let hoursValue = document.querySelector('#hours');
let minutesValue = document.querySelector('#minutes');
let secondsValue = document.querySelector('#seconds');
let countDownDateTime = new Date(2025, 1, 1, 0, 0, 0).getTime();

const countDown = () => {
    let dateTimeCurrent = new Date().getTime();
    let difference = countDownDateTime - dateTimeCurrent;

    //Hours
    let hoursValueNumber = Math.floor(difference / (1000 * 60 * 60) % 24);
    hoursValue.innerHTML = hoursValueNumber;
    //Minutes
    let minutesValueNumber = Math.floor(difference / (1000 * 60) % 60);
    minutesValue.innerHTML = minutesValueNumber;

    //Seconds
    let secondsValueNumber = Math.floor(difference / (1000) % 60);
    secondsValue.innerHTML = secondsValueNumber;
}

setInterval(countDown, 1000);

if(hoursValue.innerHTML = 0) {
    clearInterval();
    console.log('test passed');
}

//Products Sort Effect
let discounted = document.getElementsByName('.discounted');
let newlyproduced = document.getElementsByName('.newly_produced');
let sortAllBtn = document.querySelector('#sortAll');
let sortDiscountedBtn = document.querySelector('#sortDiscounted');
let sortNewBtn = document.querySelector('#sortNew');

sortDiscountedBtn.addEventListener('click', () => {
    newlyproduced.classList.add('hidden');
    discounted.classList.remove('hidden');
    sortAllBtn.classList.remove('active');
    sortNewBtn.classList.remove('active');
    sortDiscountedBtn.classList.add('active');
});

sortNewBtn.addEventListener('click', () => {
    discounted.classList.add('hidden');
    newlyproduced.classList.remove('hidden');
    sortAllBtn.classList.remove('active');
    sortDiscountedBtn.classList.remove('active');
    sortNewBtn.classList.add('active');
});

sortAllBtn.addEventListener('click', () => {
    discounted.classList.remove('hidden');
    newlyproduced.classList.remove('hidden');
    sortAllBtn.classList.add('active');
    sortDiscountedBtn.classList.remove('active');
    sortNewBtn.classList.remove('active');
});

