import { useEffect, useState } from 'react';

/**
 * Custom hook to detect scroll position and direction
 * @returns {Object} Object containing scroll information
 */
const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      
      // Update scroll values
      setScrollY(currentScrollY);
      setPrevScrollY(currentScrollY);
      
      // Set whether the page has been scrolled (useful for header styling)
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return {
    scrollY,
    isScrolled,
    scrollDirection
  };
};

export default useScroll;
