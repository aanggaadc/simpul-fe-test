import ChatCard from "./chat-card";
import { SearchIcon } from "../icons";

interface ChatListProps {}

const conversations = [
  {
    id: 1,
    name: "Person One",
    lastMessage: "Last message text...",
    time: "12:30 PM",
  },
  {
    id: 2,
    name: "Person Two",
    lastMessage: "Last message text...",
    time: "11:00 AM",
  },
  {
    id: 3,
    name: "Person Three",
    lastMessage: "Last message text...",
    time: "Yesterday",
  },
  {
    id: 4,
    name: "Person Four",
    lastMessage: "Last message text...",
    time: "2 days ago",
  },
];

const ChatList: React.FC<ChatListProps> = () => {
  return (
    <div className="py-6 px-8 flex flex-col h-full">
      <div className="w-full h-8 rounded-[5px] border border-[#828282] py-[10px] px-[59px] flex items-center justify-between">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow text-[#333333]"
        />
        <SearchIcon />
      </div>

      <div className="flex flex-col flex-grow overflow-scroll">
        {conversations.map((conv) => (
          <ChatCard key={conv.id} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
