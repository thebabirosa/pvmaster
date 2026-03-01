import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
  href?: string;
}

export default function Button({ children, onClick, className = "", variant = "primary", href }: ButtonProps) {
  const baseStyles = "px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 font-medium inline-block text-center";
  const variants = {
    primary: "bg-venus-gold text-white hover:bg-opacity-90 hover:scale-105",
    outline: "border border-venus-black text-venus-black hover:bg-venus-black hover:text-white",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      href={href}
    >
      {children}
    </Component>
  );
}
