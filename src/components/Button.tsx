"use client";

import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

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
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg cursor-pointer active:scale-[0.98] hover:-translate-y-0.5";

  const variantClasses = {
    primary:
      "bg-gold text-dark-bg hover:bg-gold/95 shadow-lg shadow-gold/20 hover:shadow-gold/35",
    secondary:
      "bg-dark-gray text-white hover:bg-medium-gray border border-gold/30 hover:border-gold/60",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-dark-bg hover:shadow-lg hover:shadow-gold/15",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35",
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

  if (whatsapp) {
    return (
      <a
        href={getWhatsAppLink("201067894321", whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <FaWhatsapp className="ml-2" />
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
