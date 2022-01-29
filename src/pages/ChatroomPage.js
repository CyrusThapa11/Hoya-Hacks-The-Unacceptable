import React from 'react';
import ChatRoom from "./Chat"

export default function ChatroomPage() {
  return(
    <div className="bg-bgDark">

    <div className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl text-white font-semibold tracking-wide lg:text-6xl">
            Chatroom
        </h1>
        <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
    </div>

    <div className="flex justify-center items-center h-screen mx-4">
        <ChatRoom />
    </div>
</div>
  );
}
