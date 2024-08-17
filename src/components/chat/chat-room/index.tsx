import { useChatState } from "..";
import Message from "./message";
import { ArrowRightIcon, CloseIcon, ArrowDownIcon } from "../../icons";

const dummyMessages = [
  {
    id: 1,
    sender: "You",
    content: "Untuk digunakan didalam ruangan bisa sampai sekitar 8jam pak",
    timestamp: "01-07-24:14:20",
  },
  {
    id: 2,
    sender: "BPK. DEDI",
    content:
      "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
    timestamp: "01-07-24:14:22",
  },
  {
    id: 3,
    sender: "You",
    content:
      "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
    timestamp: "01-07-24:14:23",
  },
  {
    id: 4,
    sender: "BPK. DEDI",
    content: "Terima kasih atas informasinya",
    timestamp: "01-07-24:14:26",
  },
  {
    id: 5,
    sender: "You",
    content: "Sama-sama, jika ada pertanyaan lain silakan tanyakan",
    timestamp: "01-07-24:14:28",
  },
  {
    id: 6,
    sender: "BPK. DEDI",
    content: "Baik, terima kasih",
    timestamp: "01-07-24:14:30",
  },
  {
    id: 7,
    sender: "You",
    content: "Selamat datang",
    timestamp: "01-07-24:14:32",
  },
  {
    id: 8,
    sender: "BPK. DEDI",
    content: "Ada berapa lama waktu pengiriman?",
    timestamp: "01-07-24:14:35",
  },
  {
    id: 9,
    sender: "You",
    content: "Untuk pengiriman dalam kota biasanya 1-2 hari kerja",
    timestamp: "01-07-24:14:37",
  },
  {
    id: 10,
    sender: "BPK. DEDI",
    content: "Baik, terima kasih atas informasinya",
    timestamp: "01-07-24:14:40",
  },
];

const ChatRoom = () => {
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
        {dummyMessages.map((msg) => (
          <Message
            key={msg.id}
            sender={msg.sender}
            content={msg.content}
            timestamp={msg.timestamp}
          />
        ))}

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
