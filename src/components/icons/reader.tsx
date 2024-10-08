import { cn } from "../../lib/utils";

export const ReaderIcon: React.FC<IconProps> = ({ className, color }) => {
  return (
    <svg
      className={cn("w-[26px] h-[20px]", className)}
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.11114 0.66626H23.1111C24.3334 0.66626 25.3334 1.66626 25.3334 2.88848V17.3329C25.3334 18.5551 24.3334 19.5551 23.1111 19.5551H3.11114C1.88892 19.5551 0.888916 18.5551 0.888916 17.3329V2.88848C0.888916 1.66626 1.88892 0.66626 3.11114 0.66626ZM3.11114 2.88848V17.3329H12V2.88848H3.11114ZM23.1111 17.3329H14.2222V2.88848H23.1111V17.3329ZM22 6.77737H15.3334V8.44404H22V6.77737ZM15.3334 9.55515H22V11.2218H15.3334V9.55515ZM22 12.3329H15.3334V13.9996H22V12.3329Z"
        fill={color ?? "#F8B76B"}
      />
    </svg>
  );
};
