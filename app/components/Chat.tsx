import React from "react";
import Image from "next/image";

const Chat = () => {
  return (
    <div className="w-full fixed bottom-14 flex justify-center">
      <div className="flex flex-col w-1/2 p-6 border-2 border-gray-500 rounded-lg">
        <input className="mb-3 outline-none focus:outline-none focus:ring-0 focus:border-transparent" placeholder="Ask anything">
        </input>
        <div className="flex justify-between">
          <div></div>
          <button className="rounded-full">
            <Image
              src="/enter.png"
              width={28}
              height={28}
              alt="chat-input-button"
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
