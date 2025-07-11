let coll = document.getElementsByClassName("faq-q-box");
let cont = document.getElementsByClassName("faq-a-box");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    if (cont[i].style.display === "block") {
      cont[i].style.display = "none";
    } else {
      cont[i].style.display = "block";
    }
  });
}
