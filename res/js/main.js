let navbut = document.getElementsByClassName("nav-img-button");
let imgs = document.getElementsByClassName("header-img");

let coll = document.getElementsByClassName("faq-q-box");
let cont = document.getElementsByClassName("faq-a-box");

let changephotosloop = setInterval(changephotos, 5000);
let photoIndex = 0;

let testimonialBoxes = document.getElementsByClassName("testimonial-show-box");
let testimonialIndex = 0;

let leftArrow = document.getElementById("arrow-left");
let rightArrow = document.getElementById("arrow-right");
let navTestimonialsButtons = document.getElementsByClassName(
  "testimonial-show-button"
);

let openerMenu = document.getElementById("nav-opener");
let smallMenu = document.getElementById("nav-container-compact");

/*let textFields = document.getElementsByClassName("lang")
const data = await fetch("./res/data/lang.json");
const lang = await data.json(data);*/

/*Lang*/
let translations = null;
let supportedLangs = ["en", "cs"];
const langButton = document.getElementsByClassName("lang-button");

const navText = document.getElementsByClassName("nav-lang");

const aboutText = document.getElementsByClassName("about-lang");

const offerText = document.getElementsByClassName("offer-lang");

const faqTextQ = document.getElementsByClassName("faq-lang-q");
const faqTextA = document.getElementsByClassName("faq-lang-a");
const faqText = document.getElementsByClassName("faq-lang");

const testimonialText = document.getElementsByClassName("testimonial-lang");
const testimonailBoxText = document.getElementsByClassName("testimonial-lang-text");

const contactsTitle = document.getElementsByClassName("footer-lang-title")
const contactsCont = document.getElementsByClassName("footer-lang-contacts")
const contactsForm = document.getElementsByClassName("footer-lang-form")
const contactsPlace = document.getElementsByClassName("footer-lang-placeholder")

/*const textToChange = document.querySelectorAll(".nav-lang");*/

/*Function to load data from JSON (Languages)*/
async function loadLangData() {
  const res = await fetch("./res/data/lang.json");
  const data = await res.json();
  translations = data;

  detectLang()
}

/*Function to change language at website*/
function switchLang(lang) {
  document.documentElement.lang = lang;
  for (let i = 0; i < translations[lang].nav.length; i++) {
    navText[i].innerHTML = translations[lang].nav[i];
    navText[i + translations[lang].nav.length].innerHTML =
      translations[lang].nav[i];
  }

  aboutText[0].innerHTML = translations[lang].about.title;
  for (let i = 0; i < translations[lang].about.text.length; i++) {
    aboutText[i + 1].innerHTML = translations[lang].about.text[i];
  }

  offerText[0].innerHTML = translations[lang].offer.title;
  for (let i = 0; i < translations[lang].offer.text.length; i++) {
    offerText[i + 1].innerHTML = translations[lang].offer.text[i];
  }

  faqText[0].innerHTML = translations[lang].faq.title;
  for (let i = 0; i < translations[lang].faq.text.length; i++) {
    faqText[i + 1].innerHTML = translations[lang].faq.text[i];
  }
  for (let i = 0; i < translations[lang].faq.faqq.length; i++) {
    faqTextQ[i].innerHTML = translations[lang].faq.faqq[i];
  }
  for (let i = 0; i < translations[lang].faq.faqa.length; i++) {
    faqTextA[i].innerHTML = translations[lang].faq.faqa[i];
  }

  testimonialText[0].innerHTML = translations[lang].testimonials.title;
  for (let i = 0; i < translations[lang].testimonials.text.length; i++) {
    testimonailBoxText[i].innerHTML = translations[lang].testimonials.text[i];
  }

  for (let i = 0; i < translations[lang].contacts.title.length; i++) {
    contactsTitle[i].innerHTML = translations[lang].contacts.title[i];
  }
  for (let i = 0; i < translations[lang].contacts.contacts.length; i++) {
    contactsCont[i].innerHTML = translations[lang].contacts.contacts[i];
  }
  for (let i = 0; i < translations[lang].contacts.form.length; i++) {
    contactsForm[i].innerHTML = translations[lang].contacts.form[i];
  }
  for (let i = 0; i < translations[lang].contacts.placeholder.length; i++) {
    contactsPlace[i].placeholder = translations[lang].contacts.placeholder[i];
  }
}

/*Function to detect users language used in browser*/
function detectLang() {
  const userLang = navigator.language || navigator.userLanguage;
  let detected = userLang.split("-")[0];
  for (let i = 0; i < supportedLangs.length; i++) {
    if (detected == supportedLangs[i]) {
      langButton[i].classList.add("active");
      switchLang(detected);
      return;
    }
  }
  langButton[0].classList.add("active");
  switchLang("en");
}

/*Function to active lang button*/
for (let indexClick = 0; indexClick < langButton.length; indexClick++){
  langButton[indexClick].addEventListener("click", () => {
    for (let index = 0; index < langButton.length; index++){
      langButton[index].classList.remove("active");
    }
    langButton[indexClick].classList.add("active");
    switchLang(langButton[indexClick].value)
  })
}

/**/

function changephotos() {
  if (photoIndex == imgs.length - 1) {
    photoIndex = 0;
  } else {
    photoIndex++;
  }
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    navbut[i].style.opacity = 0.5;
  }
  imgs[photoIndex].style.opacity = 1;
  navbut[photoIndex].style.opacity = 1;
}

/*IMAGE*/

for (let i = 0; i < navbut.length; i++) {
  navbut[i].addEventListener("click", () => {
    clearInterval(changephotosloop);
    if (imgs[i].style.opacity == 0) {
      for (let all = 0; all < imgs.length; all++) {
        imgs[all].style.opacity = 0;
        navbut[all].style.opacity = 0.5;
      }
      imgs[i].style.opacity = 1;
      navbut[i].style.opacity = 1;
      photoIndex = i;
      changephotosloop = setInterval(changephotos, 5000);
    }
  });
}

/*FAQ collapsibles*/
//for (let i = 0; i < coll.length; i++) {
//  coll[i].addEventListener("click", function () {
//    cont[i].classList.toggle("expanded");
//    /*if (cont[i].style.display == "block") {
//      cont[i].style.display = "none";
//      //cont[i].style.height = 0;
//      cont[i].style.opacity = 0;
//    } else {
//      cont[i].style.display = "block";
//      //cont[i].style.height = "auto";
//      cont[i].style.opacity = 1;
//    }*/
//  });
//}

/*emailSent.addEventListener("click", function () {
  for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
  }
});*/

/*
testimonial-show-box-left-side
testimonial-show-box-right-side
*/

/*Testimonials*/
function showBox(newIndex) {
  testimonialBoxes[testimonialIndex].classList.remove("active");

  testimonialIndex =
    (newIndex + testimonialBoxes.length) % testimonialBoxes.length;

  testimonialBoxes[testimonialIndex].classList.add("active"); /*box active*/
  navTestimonialsButtons[testimonialIndex].classList.add(
    "active"
  ); /*nav button active*/
  testimonialBoxes[testimonialIndex].classList.remove(
    "testimonial-show-box-left-side"
  );
  testimonialBoxes[testimonialIndex].classList.remove(
    "testimonial-show-box-right-side"
  );

  for (let index = 0; index < testimonialBoxes.length; index++) {
    if (testimonialIndex > index) {
      testimonialBoxes[index].classList.remove(
        "testimonial-show-box-right-side"
      );
      testimonialBoxes[index].classList.add("testimonial-show-box-left-side");
    } else if (testimonialIndex < index) {
      testimonialBoxes[index].classList.remove(
        "testimonial-show-box-left-side"
      );
      testimonialBoxes[index].classList.add("testimonial-show-box-right-side");
    }
  }
  for (let index = 0; index < navTestimonialsButtons.length; index++) {
    if (index != testimonialIndex) {
      navTestimonialsButtons[index].classList.remove("active");
    }
  }
}

/*for (let index = 0; index < navTestimonialsButtons.length; index++){
  navTestimonialsButtons[index].addEventListener("click", () => {
    if (navTestimonialsButtons[index] != testimonialIndex){
      showBox(index)
      navTestimonialsButtons[index].classList.add("active")
    }
    })
    navTestimonialsButtons[index].classList.remove("active")
  }*/
for (let index = 0; index < navTestimonialsButtons.length; index++) {
  navTestimonialsButtons[index].addEventListener("click", () => {
    showBox(index);
  });
}

leftArrow.addEventListener("click", () => {
  showBox(testimonialIndex - 1);
});
rightArrow.addEventListener("click", () => {
  showBox(testimonialIndex + 1);
});
/**/

/*Responsive menu smaller*/
let isOpened = false;
openerMenu.addEventListener("click", () => {
  if (isOpened === true) {
    /*smallMenu.style.display = "none"*/
    smallMenu.style.top = "-1500px";
    //openerMenu.style.rotate = "0deg"
  } else {
    /*smallMenu.style.display = "flex"*/
    smallMenu.style.top = "60px";
    //openerMenu.style.rotate = "90deg"
  }
  openerMenu.classList.toggle("change");
  isOpened = !isOpened;
});

/*Language changer*/

window.onload = () => {
  changephotosloop;
  loadLangData();
};
