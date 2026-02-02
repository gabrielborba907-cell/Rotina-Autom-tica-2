
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className = '',
  ...props 
}) => {
  // Fix for framer-motion type inference issues in some environments
  const MotionButton = motion.button as any;
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-lg overflow-hidden group";
  
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] border border-cyan-400",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    outline: "bg-transparent hover:bg-cyan-500/10 text-cyan-400 border border-cyan-500/50"
  };

  const widthStyles = fullWidth ? "w-full py-4 text-lg" : "px-8 py-3";
  const pulseStyles = pulse ? "animate-pulse-fast" : "";

  return (
    <MotionButton
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${pulseStyles} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
      )}
    </MotionButton>
  );
};

export default Button;
