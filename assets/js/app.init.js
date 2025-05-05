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
      link.setAttribute("active", "true");
    });
  });

  const menu = document.getElementById("menu");
  menu.addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar");
    sidebar.setAttribute("active", "true");
    e.preventDefault();
  });

  const menuClose = document.getElementById("menu-close");
  menuClose.addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar");
    sidebar.setAttribute("active", "false");
    // setTimeout(() => {
    //   sidebar.style.pointerEvents = "none";
    //   sidebar.style.visibility = "hidden";
    // }, 500);
    e.preventDefault();
  });

  // const sidebar = document.getElementById("sidebar");
  // sidebar.addEventListener("transitionend", function hideSidebar() {
  //   if (!sidebar.classList.contains("active")) {
  //     sidebar.style.display = "none";
  //   }
  //   sidebar.removeEventListener("transitionend", hideSidebar);
  // });

  // const menu = document.getElementById("menu");
  // menu.addEventListener("click", (e) => {
  //   const sidebar = document.getElementById("sidebar");
  //   sidebar.setAttribute("active", "true");
  //   e.preventDefault();
  // });
  // const menuClose = document.getElementById("menu-close");
  // console.log("close is: ", menuClose);
  // menuClose.addEventListener("click", () => {
  //   const sidebar = document.getElementById("sidebar");
  //   console.log("sidebar is: ", sidebar);
  //   sidebar.setAttribute("active", "false");
  // });

  // sidebar.addEventListener('transitionend', function hideSidebar() {
  //   if (!sidebar.classList.contains('active')) {
  //     sidebar.style.display = 'none';
  //   }
  //   sidebar.removeEventListener('transitionend', hideSidebar);
  // });
});
