var hotelsButton = document.querySelector(".hotels-button");
var popup = document.querySelector(".modal-search");
var form = popup.querySelector("form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var storageAdults = localStorage.getItem("adults");
var storageChildren = localStorage.getItem("children");

popup.classList.add("modal-hidden");
hotelsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  if (storageAdults && storageChildren) {
    adults.value = storageAdults;
    children.value = storageChildren;
  }
});


form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adults.value || !children.value) {
    evt.preventDefault();
    if (!dateIn.value) {
      dateIn.classList.add("modal-error");
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
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});
