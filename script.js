// ================================
// MELT & SWIRL
// Interactive Features
// ================================


// Mobile Navigation
function toggleMenu() {
  const nav = document.getElementById("navLinks");

  nav.classList.toggle("active");
}


// Close mobile menu when a link is clicked
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("navLinks").classList.remove("active");
  });
});


// ================================
// BUILD YOUR SCOOP
// ================================

function createScoop() {

  const flavour = document.getElementById("flavourSelect").value;
  const topping = document.getElementById("toppingSelect").value;
  const result = document.getElementById("scoopResult");

  if (topping === "No topping") {

    result.innerHTML =
      `🍨 Your scoop: <strong>${flavour}</strong>`;

  } else {

    result.innerHTML =
      `🍨 <strong>${flavour}</strong> with <strong>${topping}</strong> — perfect choice! ✦`;

  }

  // Small animation
  result.style.opacity = "0";

  setTimeout(function () {
    result.style.opacity = "1";
  }, 100);
}


// ================================
// SCROLL REVEAL
// ================================

const sections = document.querySelectorAll(
  ".intro, .flavour-card, .builder-content, .story-content, .quote, .visit"
);

const observer = new IntersectionObserver(
  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.15
  }
);


sections.forEach(function (section) {
  observer.observe(section);
});