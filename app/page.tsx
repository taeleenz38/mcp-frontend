import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <div className="flex justify-center ml-auto w-4/5 h-screen">
      <Chat />
    </div>
  );
}
