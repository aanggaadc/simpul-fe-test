import { useState } from "react";
import ChatProvider from "./providers/chat-provider";
import TaskProvider from "./providers/task-provider";
import Chat from "./components/chat";
import Task from "./components/task";
import SpeedDial from "./components/speed-dial";

function App() {
  const [activePopup, setActivePopup] = useState("");

  const content: { [key: string]: JSX.Element } = {
    inbox: (
      <ChatProvider>
        <Chat />
      </ChatProvider>
    ),
    task: (
      <TaskProvider>
        <Task />
      </TaskProvider>
    ),
  };

  return (
    <main className="font-lato">
      <div className="h-screen flex justify-center items-center lg:hidden">
        <h1 className="text-center text-white font-bold text-2xl">
          This app is only available on desktop screens
        </h1>
      </div>

      <div className="hidden h-screen lg:flex items-safe-end justify-end pb-[110px] pr-[34px]">
        {content[activePopup]}
        <SpeedDial onSelect={(menu: string) => setActivePopup(menu)} />
      </div>
    </main>
  );
}

export default App;
