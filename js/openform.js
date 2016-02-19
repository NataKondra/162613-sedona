var link = document.querySelector(".index-hotel-search a");
var form = document.querySelector(".hotel-search");
var inputCheckIn = form.querySelector("[name=checkin-date]");
var inputCheckOut = form.querySelector("[name=checkout-date]");
var inputAdultsNumber = form.querySelector("[name=adults-number]");
var inputKidsNumber = form.querySelector("[name=kids-number]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  if (form.classList.contains("hotel-search-show")) {
    form.classList.remove("hotel-search-show");
    form.classList.remove("hotel-search-error");
  } else {
    form.classList.add("hotel-search-show");
  }
});

form.addEventListener("submit", function(event) {
  if (!inputCheckIn.value || !inputCheckOut.value ||
      !inputAdultsNumber.value || !inputKidsNumber.value) {
    event.preventDefault();
    form.classList.remove("hotel-search-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("hotel-search-error");
  }
});
