import { cn } from "../../lib/utils";

export const QAIcon: React.FC<IconProps> = ({ className, color }) => {
  return (
    <svg
      className={cn("w-[26px] h-[27px]", className)}
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0371 0.926147H1.66673C0.974137 0.926147 0.407471 1.49281 0.407471 2.18541V19.815L5.44451 14.778H18.0371C18.7297 14.778 19.2964 14.2113 19.2964 13.5187V2.18541C19.2964 1.49281 18.7297 0.926147 18.0371 0.926147ZM16.7779 3.44458V12.2594H4.39933L3.65637 13.0024L2.926 13.7327V3.44458H16.7779ZM21.8149 5.96321H24.3334C25.026 5.96321 25.5927 6.52987 25.5927 7.22247V26.1114L20.5556 21.0743H6.70376C6.01117 21.0743 5.4445 20.5077 5.4445 19.8151V17.2965H21.8149V5.96321Z"
        fill={color ?? "#8885FF"}
      />
    </svg>
  );
};
