import { useChatState } from ".";
import { conversations } from "./chat-list";
import { PersonIcon } from "../icons";

interface ChatCardProps {
  props: (typeof conversations)[0];
}

const ChatCard: React.FC<ChatCardProps> = ({ props }) => {
  const { title, name, lastMessage, time, isNew } = props;
  const { setActiveSection } = useChatState();

  return (
    <div
      onClick={() => setActiveSection("room")}
      className="relative flex py-[22px] border-b border-[#828282] last:border-none cursor-pointer"
    >
      {isNew && (
        <div className="absolute bottom-7 right-0 w-[10px] aspect-square rounded-full bg-red" />
      )}

      <div className="flex">
        <div className="w-[34px] h-[34px] rounded-full bg-light-gray flex items-center justify-center">
          <PersonIcon color="#000" opacity="0.54" />
        </div>
        <div className="w-[34px] h-[34px] rounded-full bg-primary flex items-center justify-center -translate-x-4">
          <PersonIcon />
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex gap-[16px]">
          <p className="text-primary font-bold max-w-[414px] text-[17px]">
            {title}
          </p>
          <p className="text-dark-gray text-sm">{time}</p>
        </div>

        {name && <p className="text-dark-gray font-semibold">{name} :</p>}

        <p className="max-w-[450px] line-clamp-1 text-dark-gray text-sm">
          {lastMessage}
        </p>
      </div>
    </div>
  );
};

export default ChatCard;
