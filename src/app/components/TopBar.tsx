import React from 'react';
import {
  BsMegaphoneFill,
  BsFillBellSlashFill,
  BsFillBellFill,
  BsFillPinAngleFill,
  BsFillPeopleFill,
  BsInboxFill,
  BsFillQuestionCircleFill,
} from 'react-icons/bs';
import { BiHash } from 'react-icons/bi';

export const TopBar = () => {
  return (
    <div className="w-screen bg-gray-700 text-gray-400 flex items-center h-12 z-10">
      <div className="TChannelName flex items-center w-[15%] ml-5 ">
        <BsMegaphoneFill size={22} className='text-gray-500'/>{' '}
        <h2 className="ml-[6%] font-semibold text-[0.94rem] text-white">
          {'Channel Name'.toLowerCase().replace(' ', '-')}
        </h2>
        <div></div>
      </div>
      <div className="TDescription w-[95%]">Description</div>
      <div className="TIcons flex items-center justify-evenly w-[30%] fixed right-0">
        <BiHash size={26} className="TIcon" />
        <BsFillBellFill size={20} className="TIcon" />
        <BsFillPinAngleFill size={20} className="TIcon" />
        <BsFillPeopleFill size={22} className="TIcon" />
        <input
          type="text"
          placeholder="Search"
          className="TIcon bg-gray-900 pl-2 py-[1.5px] rounded-[0.3rem] text-sm mx-3 w-[35%]"
        />
        <BsInboxFill size={22} className="TIcon" />
        <BsFillQuestionCircleFill size={18} className="TIcon" />
      </div>
    </div>
  );
};
