// ===========================
// Navbar Shadow Saat Scroll
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "#111827";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

    }else{

        navbar.style.background = "#0D1117";
        navbar.style.boxShadow = "none";

    }

});


// ===========================
// Active Menu Saat Scroll
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});