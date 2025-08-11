let navbut = document.getElementsByClassName("nav-img-button");
let imgs = document.getElementsByClassName("header-img");

let coll = document.getElementsByClassName("faq-q-box");
let cont = document.getElementsByClassName("faq-a-box");

let changephotosloop = setInterval(changephotos, 5000);
let index = 0;

let openerMenu = document.getElementById("nav-opener");
let smallMenu = document.getElementById("nav-container-compact");



/*let textFields = document.getElementsByClassName("lang")
const data = await fetch("./res/data/lang.json");
const lang = await data.json(data);*/

function changephotos() {
  if (index == imgs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    navbut[i].style.opacity = 0.5;
  }
  imgs[index].style.opacity = 1;
  navbut[index].style.opacity = 1;
}

/*IMAGE*/

for (let i = 0; i < navbut.length; i++) {
  navbut[i].addEventListener("click", function () {
    clearInterval(changephotosloop);
    if (imgs[i].style.opacity == 0) {
      for (let all = 0; all < imgs.length; all++) {
        imgs[all].style.opacity = 0;
        navbut[all].style.opacity = 0.5;
      }
      imgs[i].style.opacity = 1;
      navbut[i].style.opacity = 1;
      index = i;
      changephotosloop = setInterval(changephotos, 5000);
    }
  });
}

/*FAQ collapsibles*/
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    cont[i].classList.toggle("expanded");
    /*if (cont[i].style.display == "block") {
      cont[i].style.display = "none";
      //cont[i].style.height = 0;
      cont[i].style.opacity = 0;
    } else {
      cont[i].style.display = "block";
      //cont[i].style.height = "auto";
      cont[i].style.opacity = 1;
    }*/
  });
}

/*emailSent.addEventListener("click", function () {
  for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
  }
});*/

/*Responsive menu smaller*/
let isOpened = false
openerMenu.addEventListener("click", function () {
  if (isOpened === true){
    /*smallMenu.style.display = "none"*/
    smallMenu.style.top = "-1500px"
    openerMenu.style.rotate = "0deg"
  }
  else{
    /*smallMenu.style.display = "flex"*/
    smallMenu.style.top = "60px"
    openerMenu.style.rotate = "90deg"
  }
  isOpened = !isOpened
})

/*Language changer*/


window.onload = () => {
  changephotosloop;
};