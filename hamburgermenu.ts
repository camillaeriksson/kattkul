const menuIcon = document.querySelector(".hamburger-menu") as HTMLDivElement;
menuIcon.addEventListener("click", burgerMenu);

function burgerMenu(): void {
  const mobileNav = document.querySelector(".navbar") as HTMLDivElement;
  mobileNav.classList.toggle("change");
  menuIcon.classList.toggle("move");
}
