import { cn } from "@/lib/utils";

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
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
        {titleAr}
      </h2>
      {subtitleAr && (
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {subtitleAr}
        </p>
      )}
      <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded-full" />
    </div>
  );
}
