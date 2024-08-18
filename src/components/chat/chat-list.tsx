import { useState, useEffect } from "react";
import ChatCard from "./chat-card";
import { Spinner } from "../shared";
import { SearchIcon } from "../icons";

interface ChatListProps {}

export const conversations = [
  {
    id: 1,
    title: "109220-Naturalization",
    name: "Cameron Phillips",
    lastMessage: "Please check this out!",
    time: "02/06/2021 10:45",
    isNew: true,
  },
  {
    id: 2,
    title:
      "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
    name: "Ellen",
    lastMessage: "Hey, please read.",
    time: "02/06/2021 10:45",
    isNew: false,
  },
  {
    id: 3,
    title: "8405-Diana SALAZAR MUNGUIA",
    name: "Cameron Phillips",
    lastMessage:
      "I understand your initial concerns and thats very valid, Elizabeth. But you are in good hands with us. We will make sure to guide you through the process and make it as smooth as possible.",
    time: "02/06/2021 10:45",
    isNew: false,
  },
  {
    id: 4,
    title: "FastVisa Support",
    name: "",
    lastMessage: "Hey there! Welcome to your inbox.",
    time: "02/06/2021 10:45",
    isNew: false,
  },
];

const ChatList: React.FC<ChatListProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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

      {isLoading ? (
        <div className="flex-grow flex flex-col items-center justify-center">
          <Spinner className="mb-2" />
          <span className="text-xs font-semibold text-dark-gray">
            Loading Chats ...
          </span>
        </div>
      ) : (
        <div className="flex flex-col flex-grow overflow-scroll">
          {conversations.map((conv) => (
            <ChatCard key={conv.id} props={conv} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatList;
