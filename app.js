document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("login-toggle");
const menu = document.getElementById("login-menu");

toggle.addEventListener("click", () => {
  const isOpen = !menu.hidden;
  menu.hidden = isOpen;
  toggle.setAttribute("aria-expanded", String(!isOpen));
});

document.addEventListener("click", (event) => {
  if (!menu.hidden && !event.target.closest(".login")) {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.hidden) {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }
});
