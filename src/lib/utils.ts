import { format } from "date-fns";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (
  dateString: string | Date | undefined,
  formatString: string = "do MMMM yyyy"
) => {
  if (!dateString) return;

  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;
  return format(date, formatString);
};
