import { FiLogOut, FiX } from "react-icons/fi";
import { MdDashboard, MdMessage, MdWork, MdPeople, MdArticle } from "react-icons/md";
import { FaUsersCog, FaBookOpen, FaBalanceScale, FaMoneyBill } from "react-icons/fa";
import { useSidebar } from "../context/SidebarContext";
import { useUser } from "../hooks/useUser";
import { Link, useLocation } from "react-router-dom";

const menu = [
    {
      label: "Features",
      items: [
        { icon: <MdDashboard />, label: "Dashboard", path: "/dashboard" },
        { icon: <MdMessage />, label: "Messages", path: "/messages", badge: 13 },
      ],
    },
    {
      label: "Recruitment",
      items: [
        { icon: <MdWork />, label: "Jobs", path: "/jobs" },
        { icon: <MdPeople />, label: "Candidates", path: "/candidates" },
        { icon: <MdArticle />, label: "Resumes", path: "/resumes" },
      ],
    },
    {
      label: "Organization",
      items: [
        { icon: <FaUsersCog />, label: "Employee Management", path: "/employees" },
        { icon: <FaBookOpen />, label: "Leave Management", path: "/leaves" },
        { icon: <FaBalanceScale />, label: "Performance Management", path: "/performance" },
      ],
    },
    {
      label: "KRIS Pay",
      items: [
        { icon: <FaMoneyBill />, label: "Payroll Management", path: "/payroll" },
      ],
    },
  ];
  
  export const SideBar = () => {
    const { sidebarOpen, toggleSidebar } = useSidebar();
    const { user } = useUser();
    const location = useLocation();
  
    const firstLetter = user?.email?.charAt(0).toUpperCase() || "A";
  
    return (
        <div
        className={`fixed top-0 left-0 h-screen  sm:w-[40%] lg:w-[20%] w-[50%] bg-gray-100 text-white transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static`}
      >
        <div className="bg-[#0D1B2A] lg:hidden p-2 flex justify-end">
          <button onClick={toggleSidebar}>
            <FiX className="text-white text-xl" />
          </button>
        </div>
      
        <div className="w-full h-[95vh] lg:h-screen bg-[#0D1B2A] text-white flex flex-col">
          <div className="overflow-y-auto px-2 lg:px-4 flex-1">
            
            <div className="flex items-center gap-4 mb-6 lg:mt-6">
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
                {firstLetter}
              </div>
              <div>
                <p className="text-white font-semibold">{"KRIS Admin"}</p>
                <p className="text-sm text-gray-300">{user?.email || "Admin"}</p>
              </div>
            </div>
      
            {menu.map((section, sIdx) => (
              <div key={sIdx} className="mb-4">
                <p className="text-gray-400 text-xs uppercase mb-2 px-2">{section.label}</p>
                {section.items.map((item, iIdx) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      to={item.path}
                      key={iIdx}
                      className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-800 transition ${
                        isActive ? "bg-yellow-400 text-black font-semibold" : "text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
      
          <div className="p-4 border-t border-gray-700">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold md:p-4 p-2 rounded-lg flex items-center justify-center gap-2">
              <FiLogOut />
              Log Out
            </button>
          </div>
        </div>
      </div>
      
    );
  };
  
