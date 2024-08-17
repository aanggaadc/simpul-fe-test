import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Chat from "./components/chat";
import SpeedDial from "./components/speed-dial";

function App() {
  const [showMenu, setShowMenu] = useState("");

  return (
    <main className="flex h-screen items-center justify-center font-lato bg-[#333333]">
      <AnimatePresence>{showMenu === "inbox" && <Chat />}</AnimatePresence>

      <SpeedDial onSelect={(menu: string) => setShowMenu(menu)} />
    </main>
  );
}

export default App;
