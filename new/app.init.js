const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.querySelectorAll("#navLinks li");

function closeSidebar() {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
}

function openSidebar() {
  sidebar.classList.add("show");
  overlay.classList.add("show");
}

menuBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    closeSidebar();
  });
});
