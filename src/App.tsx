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
    <main className="flex h-screen items-center justify-center font-lato bg-[#333333]">
      {content[activePopup]}
      <SpeedDial onSelect={(menu: string) => setActivePopup(menu)} />
    </main>
  );
}

export default App;
