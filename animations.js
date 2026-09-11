window.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const motionToggle = document.getElementById("motion-toggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealTargets = document.querySelectorAll("[data-reveal], .portfolio-card");
  let motionPaused = false;
  let revealObserver;

  const reveal = (element) => {
    element.classList.add("is-visible");
    if (revealObserver) {
      revealObserver.unobserve(element);
    }
  };

  const syncMotion = () => {
    root.classList.toggle("motion-paused", motionPaused || reducedMotion.matches);
    motionToggle.hidden = reducedMotion.matches;
    motionToggle.textContent = motionPaused ? "Resume motion" : "Pause motion";

    if (motionPaused || reducedMotion.matches) {
      revealTargets.forEach(reveal);
    }
  };

  motionToggle.addEventListener("click", () => {
    motionPaused = !motionPaused;
    syncMotion();
  });
  reducedMotion.addEventListener("change", syncMotion);
  syncMotion();
  root.classList.add("motion-ready");

  // Observe after the other DOMContentLoaded handlers have rendered the cards.
  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    revealTargets.forEach((element, index) => {
      // Keep above-the-fold content visible and stagger only upcoming cards.
      if (element.getBoundingClientRect().top < window.innerHeight) {
        return;
      }
      if (element.classList.contains("portfolio-card")) {
        element.style.setProperty("--reveal-delay", `${(index % 3) * 80}ms`);
      }
      element.classList.add("reveal-pending");
      revealObserver.observe(element);
    });

    document.addEventListener("focusin", (event) => {
      const target = event.target.closest(".reveal-pending");
      if (target) {
        reveal(target);
      }
    });
  }
});
