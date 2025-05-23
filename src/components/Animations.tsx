import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 800,
  type = 'fade-up'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);
  
  let animationClass = '';
  
  switch (type) {
    case 'fade-up':
      animationClass = 'opacity-0 translate-y-10';
      break;
    case 'fade-down':
      animationClass = 'opacity-0 -translate-y-10';
      break;
    case 'fade-left':
      animationClass = 'opacity-0 translate-x-10';
      break;
    case 'fade-right':
      animationClass = 'opacity-0 -translate-x-10';
      break;
    case 'zoom-in':
      animationClass = 'opacity-0 scale-95';
      break;
    default:
      animationClass = 'opacity-0';
  }
  
  return (
    <div 
      ref={elementRef} 
      className={`transition-all ${animationClass} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};