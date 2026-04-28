// counter down
const counters = document.querySelectorAll(".counter");

const animateCounter = (el) => {
  const target = +el.dataset.target;
  let count = 0;

  const update = () => {
    const increment = target / 200;

    if (count < target) {
      count += increment;
      el.innerText = Math.floor(count).toLocaleString("de-DE");
      requestAnimationFrame(update);
    } else {
      el.innerText = target.toLocaleString("de-DE");
    }
  };

  update();
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
// counter down end

// faq start 

const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    if (isOpen) {
      // Close
      content.style.maxHeight = null;
      btn.classList.remove("active");
    } else {
      // Open
      content.style.maxHeight = content.scrollHeight + "px";
      btn.classList.add("active");
    }
  });
});
  // faq end
  