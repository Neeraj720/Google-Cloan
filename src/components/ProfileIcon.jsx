import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile.png";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return <div className="flex gap-2 ">
        <span className="w-10 h-10 flex items-center rounded-full justify-center cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368"/>
        </span>
        <span className="h-10 w-10 relative flex justify-center items-center cursor-pointer">
            <img className="absolute" src={ProfileRing} alt="" />
            <span className="h-8 w-8 rounded-full overflow-hidden">
                <img className="h-full w-full object-cover" src={Profile} />
            </span>
        </span>
    </div>;
};

export default ProfileIcon;
