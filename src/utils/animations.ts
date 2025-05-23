// Simple utility to trigger animations based on scroll position
export const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
};

// Fade in animation with optional direction
export const fadeIn = (element: HTMLElement, direction: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0) => {
  element.style.opacity = '0';
  element.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
  
  switch (direction) {
    case 'up':
      element.style.transform = 'translateY(20px)';
      break;
    case 'down':
      element.style.transform = 'translateY(-20px)';
      break;
    case 'left':
      element.style.transform = 'translateX(20px)';
      break;
    case 'right':
      element.style.transform = 'translateX(-20px)';
      break;
  }
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translate(0)';
  }, 100);
};

// Smooth scroll to element
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Offset for fixed header
      behavior: 'smooth'
    });
  }
};