"use client";

import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  whatsapp?: boolean;
  whatsappMessage?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  whatsapp = false,
  whatsappMessage,
  className,
  onClick,
  type,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg relative overflow-hidden group";

  const variantClasses = {
    primary:
      "bg-gold text-dark-bg hover:bg-gold-light shadow-lg shadow-gold/20 btn-gold-glow",
    secondary:
      "bg-dark-card text-white hover:bg-medium-gray border border-gold/30 hover:border-gold/50",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-dark-bg hover:shadow-lg hover:shadow-gold/20",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/20",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="relative z-10 flex items-center gap-2">
        {whatsapp && <FaWhatsapp />}
        {children}
      </span>
    </>
  );

  if (whatsapp) {
    return (
      <motion.a
        href={getWhatsAppLink("201067894321", whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type || "button"}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
