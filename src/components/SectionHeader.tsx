import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  titleAr: string;
  subtitleAr?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  titleAr,
  subtitleAr,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn("mb-16", centered && "text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4 text-glow-strong">
        {titleAr}
      </h2>
      {subtitleAr && (
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitleAr}
        </p>
      )}
      <motion.div
        className="golden-line w-24 mx-auto mt-6"
        initial={{ width: 0 }}
        whileInView={{ width: centered ? "6rem" : "3rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}
