import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { LightningIcon, ReaderIcon, QAIcon } from "./icons";

interface Action {
  name: string;
  background: string;
  icon: (active?: boolean) => JSX.Element;
}

const initialAction: Action = {
  name: "menu",
  background: "bg-primary",
  icon: () => <LightningIcon />,
};

const actions: Action[] = [
  {
    name: "task",
    background: "bg-orange",
    icon: (active = true) => (
      <ReaderIcon
        className={active ? "w-[30px] h-[30px]" : ""}
        color={active ? "#fff" : undefined}
      />
    ),
  },
  {
    name: "inbox",
    background: "bg-purple",
    icon: (active = true) => {
      return (
        <QAIcon
          className={active ? "w-[30px] h-[30px]" : ""}
          color={active ? "#fff" : undefined}
        />
      );
    },
  },
];

const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<Action>(initialAction);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleActionClick = (action: Action) => {
    setSelectedAction(action);
    setIsOpen(false);
  };

  const ActionButton = ({ action }: { action: Action }) => (
    <motion.button
      onClick={() => handleActionClick(action)}
      className="relative w-[60px] h-[60px] bg-light-gray text-white rounded-full flex items-center justify-center shadow-lg"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{
        opacity: [0, 1, 1, 1],
        scale: [0.3, 1.05, 0.9, 1],
      }}
      exit={{
        opacity: [1, 1, 1, 0],
        scale: [1, 1.05, 1, 0.3],
      }}
      transition={{ duration: 0.4 }}
    >
      <span className="absolute -top-7 left-0 right-0 mx-auto capitalize">
        {action.name}
      </span>
      {action.icon(selectedAction.name === action.name)}
    </motion.button>
  );

  return (
    <div className="fixed bottom-4 right-4 flex items-center">
      <AnimatePresence>
        {isOpen && (
          <div className="flex items-center gap-[26px] mr-[26px]">
            {actions
              .filter((action) => action.name !== selectedAction.name)
              .map((action) => (
                <ActionButton key={action.name} action={action} />
              ))}
          </div>
        )}
      </AnimatePresence>

      <div className="relative w-[68px] h-[68px] rounded-full">
        <button
          onClick={toggleOpen}
          className={cn(
            "relative z-[2] w-full h-full rounded-full flex items-center justify-center shadow-lg",
            selectedAction.background
          )}
        >
          {selectedAction.icon()}
        </button>

        {selectedAction.name !== "menu" && (
          <div className="absolute top-0 right-1 w-full h-full rounded-full bg-light-gray" />
        )}
      </div>
    </div>
  );
};

export default SpeedDial;
