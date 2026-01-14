
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is clickable (button, link, input, or has cursor-pointer class)
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
        {/* Main Dot - Extremely high Z-index to beat Modals (usually z-[9999]) */}
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-cyan-500 rounded-full pointer-events-none z-[100000] mix-blend-difference"
            animate={{
                x: mousePosition.x - 4,
                y: mousePosition.y - 4,
                scale: isHovering ? 0 : 1
            }}
            transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.1
            }}
        />
        
        {/* Trailing Ring - Extremely high Z-index */}
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full pointer-events-none z-[99999]"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
                borderColor: isHovering ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.3)'
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.5
            }}
        />
    </>
  );
};

export default CustomCursor;
