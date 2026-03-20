import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseDate(date: string): string {
  const processed_date = new Date(date);
  const short_month = processed_date.toLocaleDateString('default', {month: 'short'})
  const full_year = processed_date.toLocaleString('default', {year: 'numeric'});
  return `${short_month} ${full_year}`;
}