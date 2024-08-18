import { useState } from "react";
import ChatProvider from "./providers/chat-provider";
import TaskProvider from "./providers/task-provider";
import Chat from "./components/chat";
import Task from "./components/task";
import SpeedDial from "./components/speed-dial";

function App() {
  const [showMenu, setShowMenu] = useState("");

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
      {content[showMenu]}
      <SpeedDial onSelect={(menu: string) => setShowMenu(menu)} />
    </main>
  );
}

export default App;
