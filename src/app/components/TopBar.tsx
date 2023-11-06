import React from 'react';
import {
  BsMegaphoneFill,
  BsHash,
  BsFillBellSlashFill,
  BsFillBellFill,
  BsFillPinAngleFill,
  BsFillPeopleFill,
  BsInboxFill,
  BsFillQuestionCircleFill,
} from 'react-icons/bs';

export const TopBar = () => {
  return (
    <div className="w-screen bg-gray-700 text-white flex items-center h-16 z-10">
      <div className="TChannelName flex items-center w-[10%]">
        <BsMegaphoneFill /> <div>Channel Name</div>
        <div></div>
      </div>
      <div className="TDescription w-[50%]">Description</div>
      <div className="TIcons flex items-center w-[10%]">
        <BsHash />
        <BsFillBellFill />
        <BsFillPinAngleFill />
        <BsFillPeopleFill />
        <BsInboxFill />
        <BsFillQuestionCircleFill />
      </div>
    </div>
  );
};
