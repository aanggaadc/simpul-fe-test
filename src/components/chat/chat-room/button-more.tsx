import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MoreIcon } from "../../icons";

const ButtonMore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const dropdownVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.1, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.075, ease: "easeIn" },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreIcon />
      </button>

      <motion.div
        className="absolute left-0 z-10 w-[126px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
        variants={dropdownVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <button
          className="w-full px-[18px] py-[11px] text-sm text-left text-[#2F80ED] border-b border-[#BDBDBD]"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-0"
        >
          Edit
        </button>
        <button
          className="w-full px-[18px] py-[11px] text-sm text-left text-[#EB5757]"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-1"
        >
          Delete
        </button>
      </motion.div>
    </div>
  );
};

export default ButtonMore;
