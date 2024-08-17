import ButtonMore from "./button-more";

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

        <ButtonMore />
      </div>
    </div>
  );
};

export default Message;
