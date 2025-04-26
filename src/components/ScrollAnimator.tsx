
import { useEffect, useRef } from 'react';

const ScrollAnimator = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Setup the Intersection Observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add the 'animated' class when the element is in the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Stop observing the element after it's been animated
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible

    // Get all elements that should be animated
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Start observing each element
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Cleanup function
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimator;
