import { motion, AnimatePresence } from "framer-motion";

interface PopupContainerProps {
  children: React.ReactNode;
}

export const PopupContainer: React.FC<PopupContainerProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(20px)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        exit={{ opacity: 0, transform: "translateY(20px)" }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-[110px] rounded-md border border-[#BDBDBD] right-[34px] w-[734px] h-[737px] bg-white"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
