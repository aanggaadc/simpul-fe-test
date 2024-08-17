import { cn } from "../../lib/utils";

export const ArrowDownIcon: React.FC<IconProps> = ({ className, color }) => {
  return (
    <svg
      className={cn("w-[17px] h-[16px]", className)}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1652 7.99999L13.2252 7.05999L9.49853 10.78V2.66666H8.1652V10.78L4.4452 7.05332L3.49854 7.99999L8.83187 13.3333L14.1652 7.99999Z"
        fill={color ?? "#F2F2F2"}
      />
    </svg>
  );
};
