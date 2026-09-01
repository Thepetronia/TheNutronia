const navbut = document.getElementsByClassName("nav-img-button");
const imgs = document.getElementsByClassName("header-img");

/*let coll = document.getElementsByClassName("faq-q-box");
let cont = document.getElementsByClassName("faq-a-box");*/

let changephotosloop = setInterval(changephotos, 5000);
let photoIndex = 0;

const testimonialBoxes = document.getElementsByClassName(
  "testimonial-show-box",
);
let testimonialIndex = 0;

let leftArrow = document.getElementById("arrow-left");
let rightArrow = document.getElementById("arrow-right");
let navTestimonialsButtons = document.getElementsByClassName(
  "testimonial-show-button",
);

const openerMenu = document.getElementById("nav-opener");
const smallMenu = document.getElementById("nav-container-compact");
//TEMP
const boxOfSmallMenu = document.getElementsByClassName("nav-box-compact");

const Copyright = document.getElementById("footer-copyright");

const langContainer = document.getElementById("lang-container");
const langOpener = document.getElementById("lang-box-opener");
const langSwapper = document.getElementById("lang-box");
let isLangMenuOpen = false;

const user = "thenutronia";
const subjectEN = "Excited to Start My Journey with You";
const subjectCZ = "Jsem připraven/a začít svou cestu s vám";
const domain = "gmail.com";
const email = user + "@" + domain;
const emailLink = `<a href="mailto:${email}">${email}</a>`;
document.getElementById("contact-email").innerHTML = emailLink;

/*Lang switch*/

langOpener.addEventListener("click", () => {
  if (!isLangMenuOpen) {
    langContainer.style.right = "20px";
    langSwapper.style.right = "0px";
  } else {
    langContainer.style.right = "-60px";
    langSwapper.style.right = "-100px";
  }
  isLangMenuOpen = !isLangMenuOpen;
});

/*IMAGE*/
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
    "active",
  ); /*nav button active*/
  testimonialBoxes[testimonialIndex].classList.remove(
    "testimonial-show-box-left-side",
  );
  testimonialBoxes[testimonialIndex].classList.remove(
    "testimonial-show-box-right-side",
  );

  for (let index = 0; index < testimonialBoxes.length; index++) {
    if (testimonialIndex > index) {
      testimonialBoxes[index].classList.remove(
        "testimonial-show-box-right-side",
      );
      testimonialBoxes[index].classList.add("testimonial-show-box-left-side");
    } else if (testimonialIndex < index) {
      testimonialBoxes[index].classList.remove(
        "testimonial-show-box-left-side",
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

/*Responsive menu smaller*/ //TEMP
let isOpened = false;

function closeSmallMenu() {
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
}

openerMenu.addEventListener("click", closeSmallMenu);

for(let index = 0; index < boxOfSmallMenu.length; index++){
  boxOfSmallMenu[index].addEventListener("click", closeSmallMenu);
}

/*Copyright year*/
let currYear = new Date();
let copyrightText = "© 2025-" + currYear.getFullYear() + " TheNutronia";
Copyright.innerText = copyrightText;

/*Language changer*/

window.onload = () => {
  changephotosloop;
  //loadLangData();
};
