document.addEventListener("DOMContentLoaded", () => {
  // scrol event listner
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.setAttribute("sticked", "true");
    } else {
      header.setAttribute("sticked", "false");
    }
  });
  // sidebar nav link event listener
  const links = document.querySelectorAll(".sidebar-nav-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.removeAttribute("active"));
      const sidebar = document.getElementById("sidebar");
      sidebar.setAttribute("active", "false");
      const overlay = document.getElementById("overlay");
      overlay.classList.remove("active");
      link.setAttribute("active", "true");
    });
  });

  const menu = document.getElementById("menu");
  menu.addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.setAttribute("active", "true");
    overlay.classList.add("active");
    e.preventDefault();
  });

  const menuClose = document.getElementById("menu-close");
  menuClose.addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar");
    sidebar.setAttribute("active", "false");
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("active");
    e.preventDefault();
  });
  const overlay = document.getElementById("overlay");
  overlay.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.setAttribute("active", "false");
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("active");
  });
});
