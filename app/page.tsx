import Image from "next/image";
import Chat from "./components/Chat";
import ChatWindow from "./components/ChatWindow";

export default function Home() {
  return (
    <div className="flex justify-center ml-auto w-4/5 h-screen">
      <ChatWindow />
      <Chat />
    </div>
  );
}
