const buttons = document.querySelectorAll(".buttons button");
const items = document.querySelectorAll(".catalog-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    items.forEach((item) => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});



let burgerIcon = document.querySelector(".burger_menu");
let burger = document.querySelector(".burger");
burgerIcon.addEventListener("click", ()=>{
    burger.classList.toggle("active")
})