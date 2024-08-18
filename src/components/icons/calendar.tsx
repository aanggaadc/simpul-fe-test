import { cn } from "../../lib/utils";

export const CalendarIcon: React.FC<IconProps> = ({ className, color }) => {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="calendar_today_24px">
        <path
          id="icon/action/calendar_today_24px"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3334 2.00001H12.6667V0.666672H11.3334V2.00001H4.66671V0.666672H3.33337V2.00001H2.66671C1.93337 2.00001 1.33337 2.6 1.33337 3.33334V14C1.33337 14.7333 1.93337 15.3333 2.66671 15.3333H13.3334C14.0667 15.3333 14.6667 14.7333 14.6667 14V3.33334C14.6667 2.6 14.0667 2.00001 13.3334 2.00001ZM13.3334 14H2.66671V6.66667H13.3334V14ZM2.66671 5.33334H13.3334V3.33334H2.66671V5.33334Z"
          fill={color ?? "#4F4F4F"}
        />
      </g>
    </svg>
  );
};
