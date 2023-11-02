const navbarBtn = document.getElementById("navbar-btn");

navbarBtn.onclick = () => {
  const navbar = document.getElementById("navbar");

  navbar.classList.toggle("navbar--open");
};

function toggleSubmenu(submenuId, iconId, linkId) {
  const submenu = document.getElementById(submenuId);
  submenu.style.display = submenu.style.display === "none" ? "block" : "none";

  const programIcon = document.getElementById(iconId);
  programIcon.style.transform =
    submenu.style.display === "none" ? "rotate(0deg)" : "rotate(90deg)";
}
