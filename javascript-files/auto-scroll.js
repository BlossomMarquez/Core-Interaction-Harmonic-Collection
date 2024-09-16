(function smoothScrollToBottom(duration) {
  const start = window.scrollY;
  const end = document.documentElement.scrollHeight - window.innerHeight;
  const distance = end - start;
  const startTime = Date.now();

  function scroll() {
      const currentTime = Date.now();
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
      const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Ease in-out function
      const scrollY = start + distance * easeInOut(progress);

      window.scrollTo(0, scrollY);

      if (progress < 1) {
          requestAnimationFrame(scroll);
      }
  }

  requestAnimationFrame(scroll);
})(120000); // Adjust duration here (30,000 milliseconds for 30 seconds)
