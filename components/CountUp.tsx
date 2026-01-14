
import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

interface CountUpProps {
  value: string;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ value, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix (e.g., "500+" -> 500 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setCurrentValue(latest);
    });
    return () => unsubscribe();
  }, [displayValue]);

  return (
    <span ref={ref} className={className}>
      {currentValue}{suffix}
    </span>
  );
};

export default CountUp;
