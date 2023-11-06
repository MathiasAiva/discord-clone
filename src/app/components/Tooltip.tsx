import React from "react";
import {BsFillPersonFill, BsFillCompassFill, BsPlus, BsDownload} from "react-icons/bs";

export const Tooltip = () => {
    return (
        <div className="h-screen w-[5%] m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <Icons icon={<BsFillPersonFill size={26}/>} isDot={false}/>
            <Icons icon={<BsPlus size={32}/>}isDot={false}/>
            <Icons icon={<BsFillCompassFill size={22}/>} isDot={true}/>
            <Icons icon={<BsDownload size={23}/>} isDot={true}/>
        </div>
    );
};

type IconsProps = {
    icon: React.ReactNode;
    isDot: React.ReactNode;
}

const Icons = ({icon}: IconsProps, isDot = false) => {
    return (
        <div className={`sidebar-icon  group-hover:scale-100 ${'sidebar-icon-dot' ? isDot : ''}`}>
            {icon}
        </div>
    );
}