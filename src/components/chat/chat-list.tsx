import { useState, useEffect } from "react";
import ChatCard from "./chat-card";
import { Spinner } from "../shared";
import { SearchIcon } from "../icons";
import { conversations } from "@/fixtures/chat";

const ChatList = () => {
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
        <div className="flex flex-col flex-grow overflow-scroll pr-2">
          {conversations.map((conv) => (
            <ChatCard key={conv.id} props={conv} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatList;
