/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// validate if constant exists
// menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}
// menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when click on each nav__link, remove  the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper(".projects__container", {
  // Optional parameters

  loop: true,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});
/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactRequire = document.getElementById("contact-require"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  //   contactMessage.classList.add("color-red");
  //check ì the field há a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactRequire.value === ""
  ) {
    // add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    //show mesage
    contactMessage.textContent = "write all the input fields";
  } else {
    // emailjs.init("LBcbZYth5getBsKeC");
    // contactMessage.classList.add("color-blue");
    // serviceID - temlateID - #form-publickey

    emailjs
      .sendForm(
        "service_tthbxk7",
        "template_cje5ve6",
        "#contact-form",
        "LBcbZYth5getBsKeC"
      )
      .then(
        () => {
          //show message and add color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent";

          //removw message after 5s
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("Some think has Failed.....", error);
        }
      );
    // clearthe input field
    contactName.value = "";
    contactEmail.value = "";
    contactRequire.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // khi scrol is cao hon 350
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// console.log(themeButton);
//
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
//
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
//
if (selectedTheme) {
  //
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}
//
themeButton.addEventListener("click", () => {
  //
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  //
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true /*animation repear*/,
});
sr.reveal(`.home__data, .projects__container, .footer__container`);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(`.skills__content:nth-child(1),.contact__content:nth-child(1)`, {
  origin: "left",
});
sr.reveal(`.skills__content:nth-child(2),.contact__content:nth-child(2)`, {
  origin: "right",
});

sr.reveal(`.qualification__content, .services__card`, { interval: 100 });
