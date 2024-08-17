import { motion } from "framer-motion";
import { SearchIcon } from "../icons";

const Chat = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(20px)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      exit={{ opacity: 0, transform: "translateY(20px)" }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-[110px] rounded-md border border-[#BDBDBD] right-[34px] w-[734px] h-[737px] bg-white py-6 px-8"
    >
      <div className="w-full h-8 rounded-[5px] mb-[22px] border border-[#828282] py-[10px] px-[59px] flex items-center justify-between">
        <input type="text" placeholder="Search" className="flex-grow text-sm" />
        <SearchIcon />
      </div>

      <ul>
        {conversations.map((conv) => (
          <li key={conv.id} className="mb-4">
            <div className="flex items-center">
              <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                {conv.name[0]}
              </div>
              <div className="ml-4">
                <div className="font-semibold">{conv.name}</div>
                <div className="text-gray-500 text-sm">{conv.lastMessage}</div>
              </div>
              <div className="ml-auto text-gray-400 text-xs">{conv.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Chat;
