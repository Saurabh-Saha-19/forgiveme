/* =========================
   Romantic Website Script
========================= */

const heartBtn = document.querySelector(".heart-btn");
const note = document.querySelector(".note");

/* Hide note initially */
note.style.opacity = "0";
note.style.transform = "translateY(40px)";
note.style.transition = "1s ease";

/* Reveal note */

heartBtn.addEventListener("click", () => {
  note.style.opacity = "1";
  note.style.transform = "translateY(0)";
  note.scrollIntoView({
    behavior: "smooth"
  });
});

/* =========================
   Floating Hearts
========================= */

const floatingContainer = document.createElement("div");
floatingContainer.classList.add("floating-hearts");

document.body.appendChild(floatingContainer);

function createHeart() {

  const heart = document.createElement("span");

  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration =
    Math.random() * 6 + 5 + "s";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  floatingContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

setInterval(createHeart, 400);

/* =========================
   Shooting Stars
========================= */

function createStar() {

  const star = document.createElement("div");

  star.classList.add("shooting-star");

  star.style.left =
    Math.random() * window.innerWidth + "px";

  star.style.top =
    Math.random() * 200 + "px";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
}

setInterval(createStar, 2500);

/* =========================
   Sparkles
========================= */

function createSparkle() {

  const sparkle = document.createElement("div");

  sparkle.classList.add("sparkle");

  sparkle.style.left =
    Math.random() * window.innerWidth + "px";

  sparkle.style.top =
    Math.random() * window.innerHeight + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

setInterval(createSparkle, 300);

/* =========================
   Background Music Optional
========================= */

// Uncomment if you add music.mp3

/*
const music = new Audio("music.mp3");

music.loop = true;

window.addEventListener("click", () => {
  music.play();
}, { once: true });
*/