import React from 'react';

export const ChatBar = () => {
  return (
    <div className="w-[100%] fixed bottom-0 bg-black">
      <input type="text" placeholder="Message #Channel" className="bg-black"  />
    </div>
  );
};
