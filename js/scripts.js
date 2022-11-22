const menuse = document.getElementById("menuse");
const details = document.getElementById("details");

const menuseArray = Array.from(menuse.children);
const detailsArray = Array.from(details.children);

for (let i = 0; i < menuseArray.length; i++) {
  menuseArray[i].addEventListener("click", () => {
    for (let j = 0; j < detailsArray.length; j++) {
      if (i == j) {
        menuseArray[j].classList.add("active");
        detailsArray[j].classList.remove("d-none");
      } else {
        menuseArray[j].classList.remove("active");
        detailsArray[j].classList.add("d-none");
      }
    }
  });
}
