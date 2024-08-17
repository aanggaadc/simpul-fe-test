import React from "react";
import { useChatState } from "..";
import { formatDate } from "../../../lib/utils";
import Message from "./message";
import { ArrowRightIcon, CloseIcon, ArrowDownIcon } from "../../icons";

const dummyMessages = [
  {
    id: 1,
    sender: "You",
    content: "Untuk digunakan didalam ruangan bisa sampai sekitar 8jam pak",
    timestamp: "01-07-24:14:20",
    date: "2024-08-16",
    isNew: false,
  },
  {
    id: 2,
    sender: "BPK. DEDI",
    content:
      "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
    timestamp: "01-07-24:14:22",
    date: "2024-08-16",
    isNew: false,
  },
  {
    id: 3,
    sender: "You",
    content:
      "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
    timestamp: "01-07-24:14:23",
    date: "2024-08-16",
    isNew: false,
  },
  {
    id: 4,
    sender: "BPK. DEDI",
    content: "Terima kasih atas informasinya",
    timestamp: "01-07-24:14:26",
    date: "2024-08-16",
    isNew: false,
  },
  {
    id: 5,
    sender: "You",
    content: "Sama-sama, jika ada pertanyaan lain silakan tanyakan",
    timestamp: "01-07-24:14:28",
    date: "2024-08-17",
    isNew: false,
  },
  {
    id: 6,
    sender: "BPK. DEDI",
    content: "Baik, terima kasih",
    timestamp: "01-07-24:14:30",
    date: "2024-08-17",
    isNew: false,
  },
  {
    id: 7,
    sender: "You",
    content: "Selamat datang",
    timestamp: "01-07-24:14:32",
    date: "2024-08-17",
    isNew: false,
  },
  {
    id: 8,
    sender: "BPK. DEDI",
    content: "Ada berapa lama waktu pengiriman?",
    timestamp: "01-07-24:14:35",
    date: "2024-08-17",
    isNew: false,
  },
  {
    id: 9,
    sender: "You",
    content: "Untuk pengiriman dalam kota biasanya 1-2 hari kerja",
    timestamp: "01-07-24:14:37",
    date: "2024-08-17",
    isNew: true,
  },
  {
    id: 10,
    sender: "BPK. DEDI",
    content: "Baik, terima kasih atas informasinya",
    timestamp: "01-07-24:14:40",
    date: "2024-08-17",
    isNew: true,
  },
];

const ChatRoom = () => {
  let newMessageHeaderShown = false;
  const { setActiveSection } = useChatState();

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
        {dummyMessages.map((msg, index) => {
          const isNewDate =
            index === 0 || dummyMessages[index - 1].date !== msg.date;
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
