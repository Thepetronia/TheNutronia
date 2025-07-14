let navbut = document.getElementsByClassName("nav-img-button");
let imgs = document.getElementsByClassName("header-img");

let coll = document.getElementsByClassName("faq-q-box");
let cont = document.getElementsByClassName("faq-a-box");

/*let emailSent = document.getElementById("submit");
let inputFields = document.getElementsByClassName("input-field");*/

let changephotosloop = setInterval(changephotos, 5000);
let index = 0;
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
    if (cont[i].style.display === "block") {
      cont[i].style.display = "none";
    } else {
      cont[i].style.display = "block";
    }
  });
}

/*emailSent.addEventListener("click", function () {
  for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
  }
});*/

window.onload = () => {
  changephotosloop;
};
