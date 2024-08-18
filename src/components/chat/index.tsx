import { useState, createContext, useContext } from "react";
import ChatList from "./chat-list";
import ChatRoom from "./chat-room";
import { PopupContainer } from "../shared";
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
      <PopupContainer>{content[activeSection]}</PopupContainer>
    </ChatContext.Provider>
  );
};

export default Chat;
export { useChatState };
