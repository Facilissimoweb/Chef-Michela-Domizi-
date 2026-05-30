import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface MagnetProps {
  children: React.ReactNode;
}

/**
 * Magnet effect: tracks mouse position relative to the element's center.
 * Divides translation by a strength factor of 3, active within a 150px range.
 * Transition In: 0.3s ease-out, Transition Out: 0.6s ease-in-out.
 */
export function Magnet({ children }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 150) {
      setIsHovered(true);
      setPosition({
        x: distanceX / 3, // strength factor = 3
        y: distanceY / 3
      });
    } else {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y
      }}
      transition={
        isHovered
          ? { type: 'tween', ease: 'easeOut', duration: 0.3 }
          : { type: 'tween', ease: 'easeInOut', duration: 0.6 }
      }
      style={{ transformStyle: 'preserve-3d' }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
}

/**
 * FadeIn component with scroll using whileInView.
 * Uses viewport={{ once: true, margin: "50px" }} and easing [0.25, 0.1, 0.25, 1].
 */
export function FadeIn({ children, delay = 0, y = 0, className = '', id }: FadeInProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50.0px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

/**
 * AnimatedText: reveals character-by-character driven by scroll.
 * Uses useScroll with offset ['start 0.8', 'end 0.2'].
 * Each letter transitions from opacity 0.2 to 1.
 */
export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap leading-relaxed`}>
      {characters.map((char, index) => {
        const start = index / total;
        const end = (index + 1.5) / total; // slightly overlap transitions to make it fluid
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <motion.span
            key={index}
            style={{ opacity }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </p>
  );
}

interface StickyStackCardProps {
  index: number;
  totalCards: number;
  children: React.ReactNode;
}

/**
 * StickyStackCard: cards stick at top-24 and scale down as scroll moves.
 * Target Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
 */
export function StickyStackCard({ index, totalCards, children }: StickyStackCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track this element's scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  // Dynamic scale transform from 1 down to targetScale as we scroll past
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef} 
      className="sticky top-28 w-full flex justify-center py-6"
      style={{
        zIndex: index + 10,
        transformOrigin: 'top center',
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
}
