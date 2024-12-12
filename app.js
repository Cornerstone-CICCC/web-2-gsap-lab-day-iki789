gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const section1TL = gsap.timeline();

section1TL
  .from(".section1 h1 span:first-child", {
    x: "-100vw",
    duration: 1.25,
  })
  .from(
    ".section1 h1 span:last-child",
    {
      x: "100vw",
      duration: 1.25,
    },
    "<"
  )
  .from(".section1 p", {
    rotate: 180,
    duration: 1,
    opacity: 0,
    transformOrigin: "top left",
  })
  .from(".section1 img", {
    y: "100vh",
    opacity: 0,
  });

const section2TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top bottom",
    end: "bottom bottom",
    // markers: true,
    toggleActions: "play none reverse none", // Actions for onEnter, onLeave, onEnterBack, onLeaveBack
  },
});
section2TL
  .from(".section2 h2 span", {
    y: "-100vh",
    opacity: 0,
    stagger: 0.25,
    delay: 1,
  })
  .from(".section2 p", {
    scaleX: 0,
    opacity: 0,
    transformOrigin: "center center",
  });

const hTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    end: "300% top",
    pin: true,
    scrub: true,
    // markers: true,
  },
});

hTL
  .from(".horizontal-sections .section3 h2", {
    scale: 10,
    x: "-100vw",
    duration: 1,
  })
  .to(".horizontal-sections .section3 p span", {
    backgroundColor: "white",
    color: "black",
  })
  .from(".horizontal-sections .section3 p span", {
    y: "100vw",
    stagger: 0.1,
  });

hTL
  .to(".horizontal-sections", {
    x: `-${
      document.querySelector(".horizontal-sections .section3").offsetWidth
    }`,
  })
  .from(".section4 .portfolio-item", {
    x: "50%",
    opacity: 0,
    stagger: 1,
  });

const section5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top -20vh",
    end: "200% 100vh",
    pin: true,
    scrub: true,
    // markers: true,
  },
});

const heading = document.querySelector(".section5 h2");
const text = heading.textContent;
const spannedText = text
  .split("")
  .map((char) =>
    char === " " ? "<span>&nbsp;</span>" : `<span>${char}</span>`
  )
  .join("");
heading.innerHTML = spannedText;

section5
  .from(".section5 h2 span", {
    y: "-100vh",
    stagger: 1,
    opacity: 0,
  })
  .from(".section5 p", {
    y: "100vh",
    opacity: 0,
    delay: 1,
  })
  .from(".section5 .contact-btn", {
    scale: "0",
    opacity: 0,
    delay: 1,
  })
  .to(".section5", {
    backgroundColor: "#000",
  })
  .from(".section5", {
    backgroundPositionX: "190%",
  });
