import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(
  phone: string = "201067894321",
  message: string = "مرحبًا، أريد طلب عرض سعر من مركز الزعيم الدولي"
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
