import { useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import ChatList from "./chat-list";
import ChatRoom from "./chat-room";
interface ChatContextType {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const useChatState = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatState must be used within a ChatContextProvider");
  }
  return context;
};

const Chat = () => {
  const [activeSection, setActiveSection] = useState("list");

  const content: { [key: string]: JSX.Element } = {
    list: <ChatList />,
    room: <ChatRoom />,
  };

  return (
    <ChatContext.Provider value={{ activeSection, setActiveSection }}>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(20px)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        exit={{ opacity: 0, transform: "translateY(20px)" }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-[110px] rounded-md border border-[#BDBDBD] right-[34px] w-[734px] h-[737px] bg-white"
      >
        {content[activeSection]}
      </motion.div>
    </ChatContext.Provider>
  );
};

export default Chat;
export { useChatState };
