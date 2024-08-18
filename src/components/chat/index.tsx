import { useChatState } from "@/providers/chat-provider";
import ChatList from "./chat-list";
import ChatRoom from "./chat-room";
import { PopupContainer } from "../shared";

const Chat = () => {
  const { activeSection } = useChatState();

  const content: { [key: string]: JSX.Element } = {
    list: <ChatList />,
    room: <ChatRoom />,
  };

  return <PopupContainer>{content[activeSection]}</PopupContainer>;
};

export default Chat;
