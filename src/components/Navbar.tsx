import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdBuild, MdEmail } from "react-icons/md";
import { useSidebar } from "../context/SidebarContext";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { toggleSidebar } = useSidebar();
  return (
    <nav className="bg-blue-100 w-full px-4 py-3 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <button className="block text-2xl text-black" onClick={toggleSidebar}>
            <FiMenu />
        </button>

        <div className="flex flex-grow max-w-2xl bg-white rounded-lg shadow overflow-hidden">
          <select className="bg-blue-900 hidden md:block text-white text-sm px-4  py-2 rounded-l-lg outline-none">
            <option>All Candidates</option>
            <option>Shortlisted</option>
            <option >Interviewed</option>
          </select>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="flex-grow px-4 py-2 text-sm outline-none bg-white rounded-r-full"
          />
          <div className="flex items-center px-4 text-gray-400">
            <FiSearch />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <BadgeIcon icon={<IoMdNotificationsOutline className="text-white" />} bg="bg-blue-900" />
          <BadgeIcon icon={<MdBuild className="text-white" />} bg="bg-yellow-400" />
          <BadgeIcon icon={<MdEmail className="text-white" />} bg="bg-green-600" />
        </div>
      </div>
    </nav>
  );
};

const BadgeIcon = ({
  icon,
  bg,
  count = 13,
}: {
  icon: React.ReactNode;
  bg: string;
  count?: number;
}) => (
  <div className="relative">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bg}`}>
      {icon}
    </div>
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
        {count}
      </span>
    )}
  </div>
);

export default Navbar;
