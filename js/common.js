// Smooth scroll

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800, // Scroll speed in milliseconds
  offset: 100, // Offset from the top of the target element
});

// Spy scroll
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-list .nav-item a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active-link");
        document
          .querySelector(".nav-list .nav-item a[href*=" + id + "")
          .classList.add("active-link");
      });
    }
  });
};

// Navbar hamburger

const navCollapse = document.querySelector(".nav-collapse");
const navToggler = document.querySelector(".nav-toggler");
const htmlElement = document.querySelector("html");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("active");
  htmlElement.classList.toggle("active");
  navToggler.classList.toggle("active");
});

// CountUp

const items = document.querySelectorAll(".data");

gsap.from(items, {
  textContent: 0,
  duration: 6,
  ease: Power0.easeNone,
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: "#section3",
    start: "top 50%",
  },
});

// Headers GSAP

const s1 = document.querySelectorAll(".text-reveal.g1");
const s2 = document.querySelectorAll(".text-reveal.g2");
const s3 = document.querySelectorAll(".text-reveal.g3");
const s4 = document.querySelectorAll(".text-reveal.g4");

gsap.from(s1, {
  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: Expo.esaeOut,
  stagger: 0.3,
});
gsap.from(s2, {
  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: Expo.esaeOut,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#section2",
    start: "top+=10% bottom",
  },
});
gsap.from(s3, {
  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: Expo.esaeOut,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#section3",
    start: "top+=10% bottom",
  },
});
gsap.from(s4, {
  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: Expo.esaeOut,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#section4",
    start: "top+=10% bottom",
  },
});

// Section 4

const s4b1 = document.getElementById("s4-b1");
const s4b2 = document.getElementById("s4-b2");
const s4b3 = document.getElementById("s4-b3");

ScrollTrigger.matchMedia({
  "(min-width: 992px)": function () {
    gsap.from(s4b1, {
      y: 15,
      duration: 1,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: "#section4",
        start: "top+=80% bottom",
      },
    });
    gsap.from(s4b2, {
      y: -15,
      duration: 1,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: "#section4",
        start: "top+=80% bottom",
      },
    });
    gsap.from(s4b3, {
      y: 15,
      duration: 1,
      ease: Linear.easeNone,
      scrollTrigger: {
        trigger: "#section4",
        start: "top+=80% bottom",
      },
    });
  },
});
