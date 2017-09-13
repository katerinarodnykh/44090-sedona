var hotelsButton = document.querySelector(".hotels-button");
var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var aduls = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var input = popup.querySelectorAll("input");
var storageAdults = localStorage.getItem("adults");
var storageChildren = localStorage.getItem("children");

hotelsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.add("modal-close");
  } else {
        popup.classList.remove("modal-close");
        popup.classList.add("modal-show");
        if (storageAdults && storageChildren) {
          adults.value = storageAdults;
          children.value = storageChildren;
        }
       }
});

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adults.value || !children.value) {
    evt.preventDefault();
    if (!dateIn.value) {
      dateIn.classList.add("modal modal-error");
    } else {
      dateIn.classList.remove("modal-error");
    }
    if (!dateOut.value) {
      dateOut.classList.add("modal-error");
    } else {
      dateOut.classList.remove("modal-error");
    }
    if (!adults.value) {
      adults.classList.add("modal-error");
    } else {
      adults.classList.remove("modal-error");
    }
    if (!children.value) {
      children.classList.add("modal-error");
    } else {
      children.classList.remove("modal-error");
    }
  } else {
    evt.preventDefault();
    dateIn.classList.remove("modal-error");
    dateOut.classList.remove("modal-error");
    adults.classList.remove("modal-error");
    children.classList.remove("modal-error");
    localStorage.setItem("adults", aduls.value);
    localStorage.setItem("children", children.value);
  }
});

/*просто переключение без modal-close
var hotelsButton = document.querySelector(".hotels-button");
var popup = document.querySelector(".modal-search");
hotelsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});*/
