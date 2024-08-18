import React from "react";
import { useChatContext } from "@/providers/chat-provider";
import { formatDate } from "../../lib/utils";
import Message from "./message";
import { ArrowRightIcon, CloseIcon, ArrowDownIcon } from "../icons";
import { messages } from "@/fixtures/chat";

const ChatRoom = () => {
  let newMessageHeaderShown = false;
  const { setActiveSection } = useChatContext();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center px-[25px] py-5 justify-between">
        <div className="flex items-center gap-[14px]">
          <button onClick={() => setActiveSection("list")}>
            <ArrowRightIcon />
          </button>

          <span>
            <p className="text-primary font-bold mb-[9px] leading-tight">
              I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </p>
            <p className="text-sm">3 Participants</p>
          </span>
        </div>

        <button onClick={() => setActiveSection("list")}>
          <CloseIcon />
        </button>
      </div>

      <div className="w-full h-[1px] bg-[#BDBDBD]" />

      <div className="px-5 py-[13px] flex-grow overflow-scroll">
        {messages.map((msg, index) => {
          const isNewDate =
            index === 0 || messages[index - 1].date !== msg.date;
          const shouldShowNewMessageHeader =
            msg.isNew && !newMessageHeaderShown;

          if (shouldShowNewMessageHeader) {
            newMessageHeaderShown = true;
          }

          return (
            <React.Fragment key={msg.id}>
              {isNewDate && (
                <div className="relative my-6">
                  <div className="w-full h-[1px] border border-dark-gray" />
                  <span className="w-fit absolute -top-3 right-0 left-0 mx-auto text-center text-dark-grey bg-white px-6">
                    {formatDate(msg.date)}
                  </span>
                </div>
              )}

              {shouldShowNewMessageHeader && (
                <div className="relative my-6">
                  <div className="w-full h-[1px] border border-red" />
                  <div className="w-fit absolute -top-3 right-0 left-0 mx-auto text-center text-red bg-white px-6 flex items-center gap-2">
                    New Message
                    <ArrowDownIcon />
                  </div>
                </div>
              )}

              <Message
                sender={msg.sender}
                content={msg.content}
                timestamp={msg.timestamp}
              />
            </React.Fragment>
          );
        })}

        <button className="rounded-[5px] sticky bottom-0 left-0 right-0 mx-auto p-3 bg-light-blue flex items-center gap-1 text-primary font-bold">
          New Message
          <ArrowDownIcon />
        </button>
      </div>

      <div className="flex px-5 pt-[10px] pb-[19px] justify-between gap-[13px]">
        <input
          type="text"
          placeholder="Type a new message"
          className="flex-grow py-[13px] px-4 border border-[#828282] rounded"
        />

        <button className="py-[14px] px-[21px] bg-primary text-white rounded font-bold">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
