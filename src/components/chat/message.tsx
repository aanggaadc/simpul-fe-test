import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreIcon } from "@/components/icons";

interface MessageProps {
  sender: string;
  content: string;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ sender, content, timestamp }) => {
  const isSentByUser = sender === "You";
  return (
    <div
      className={`flex flex-col ${
        isSentByUser ? "items-end" : "items-start"
      } mb-[10px]`}
    >
      <p
        className={`font-semibold ${
          isSentByUser ? "text-dark-purple" : "text-dark-orange"
        }`}
      >
        {isSentByUser ? "You" : sender}
      </p>
      <div
        className={`flex ${
          isSentByUser && "flex-row-reverse"
        } items-start gap-[7px]`}
      >
        <div
          className={`p-[10px] rounded-lg text-black ${
            isSentByUser
              ? "bg-light-purple max-w-[411px]"
              : "bg-light-orange max-w-[518px]"
          }`}
        >
          <div className="text-sm text-dark-gray mb-3 font-medium">
            {content}
          </div>
          <p className="text-xs text-dark-gray text-gray-500">{timestamp}</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button id="menu-button" aria-expanded="true" aria-haspopup="true">
              <MoreIcon />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[126px] p-0">
            <DropdownMenuItem className="p-0">
              <button
                className="w-full px-[18px] py-[11px] text-sm text-left text-[#2F80ED] border-b border-[#BDBDBD]"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Edit
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <button
                className="w-full px-[18px] py-[11px] text-sm text-left text-[#EB5757]"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Delete
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Message;
