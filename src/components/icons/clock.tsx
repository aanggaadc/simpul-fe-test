import { cn } from "../../lib/utils";

export const ClockIcon: React.FC<IconProps> = ({ className, color }) => {
  return (
    <svg
      className={cn("w-[20px] h-[20px]", className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="schedule_24px">
        <path
          id="icon/action/schedule_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99187 1.66667C5.39187 1.66667 1.66687 5.40001 1.66687 10C1.66687 14.6 5.39187 18.3333 9.99187 18.3333C14.6002 18.3333 18.3335 14.6 18.3335 10C18.3335 5.40001 14.6002 1.66667 9.99187 1.66667ZM10.0004 16.6667C6.31703 16.6667 3.3337 13.6833 3.3337 10C3.3337 6.31667 6.31703 3.33334 10.0004 3.33334C13.6837 3.33334 16.667 6.31667 16.667 10C16.667 13.6833 13.6837 16.6667 10.0004 16.6667ZM9.16687 5.83334H10.4169V10.2083L14.1669 12.4333L13.5419 13.4583L9.16687 10.8333V5.83334Z"
          fill={color ?? "#4F4F4F"}
        />
      </g>
    </svg>
  );
};
