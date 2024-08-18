import { useContext, createContext, useState } from "react";

interface ChatContextType {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

interface ChatProviderProps {
  children: React.ReactNode;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("list");

  return (
    <ChatContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatState must be used within a ChatContextProvider");
  }
  return context;
};

export default ChatProvider;
