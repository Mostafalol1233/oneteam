import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Smooth scroll function
export function smoothScrollTo(elementId: string) {
  const element = document.querySelector(elementId);
  if (element) {
    window.scrollTo({
      top: (element as HTMLElement).offsetTop - 80,
      behavior: "smooth",
    });
  }
}
