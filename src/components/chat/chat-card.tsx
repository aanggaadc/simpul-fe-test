import { useChatState } from ".";
import { PersonIcon } from "../icons";

const ChatCard = () => {
  const { setActiveSection } = useChatState();
  return (
    <div
      onClick={() => setActiveSection("room")}
      className="flex py-[22px] border-b border-[#828282] last:border-none cursor-pointer"
    >
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
            Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up -
            Brief Service ]
          </p>
          <p className="text-dark-gray text-sm">02/06/2021 10:45</p>
        </div>
        <p className="text-dark-gray font-semibold">Cameron Phillips :</p>
        <p className="max-w-[450px] line-clamp-1 text-dark-gray text-sm">
          I understand your initial concerns and thats very valid, Elizabeth.
          But you fdsfsddsfsfdsfdsfdsfds
        </p>
      </div>
    </div>
  );
};

export default ChatCard;
