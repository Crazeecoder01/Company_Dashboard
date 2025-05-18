
import { MdEmail } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { GenericCard } from "../components/GenericCard";

const jobData = [
  {
    title: "Applied Jobs",
    entries: [
      { icon: "image.png",title: "Sales Executive", company: "Access Bank", time: "20min ago" },
      { icon: "/avatars/avatar1.png",title: "Marketing Intern", company: "Google", time: "1hr ago" },
      { icon: "/avatars/avatar1.png",title: "UI Designer", company: "Figma", time: "3hr ago" },
    ],
  },
  {
    title: "Saved Jobs",
    entries: [
      { icon: "/avatars/avatar1.png",jobRole: "Software Engineer", name: "John Doe" },
      { icon: "/avatars/avatar1.png",jobRole: "Data Analyst", name: "Ginna Loe" },
      { icon: "/avatars/avatar1.png",jobRole: "Product Manager", name: "John Dore" },
    ],
  },
  {
    title: "Candidates",
    entries: [
      {
        icon: "/avatars/avatar1.png",
        name: "John Doe",
        jobRole: "Product Manager",
        atsScore: 80,
      },
      {
        icon: "/avatars/avatar2.png",
        name: "Ginna Loe",
        jobRole: "Sales Executive",
        atsScore: 30,
      },
      {
        icon: "/avatars/avatar1.png",
        name: "James Foe",
        jobRole: "Product Manager",
        atsScore: 80,
      },
    ],
  },
  {
    title: "April Payrolls",
    entries: [
      {
        icon: "/avatars/avatar1.png",
        name: "John Doe",
        status: "Paid",
        description: "Salary Amount: $5000",
      },
      {
        icon: "/avatars/avatar2.png",
        name: "Ginna Loe",
        status: "Pending",
        description: "Salary Amount: $10000",
      },
      {
        icon: "/avatars/avatar1.png",
        name: "James Foe",
        status: "Paid",
        description: "Applied for: Product Manager",
      },
    ],
  },
];

export const Dashboard = () => {
  return (
    <div className="flex transition-all duration-300 ease-in-out bg-[#0D1B2A]">
      <SideBar />
      <div className="w-full flex flex-col justify-center items-center bg-blue-100">
        <Navbar />
        <div className="h-full min-h-screen w-full lg:px-[100px]">
          <div>
            <p className="m-4 px-4 lg:px-10 font-bold">Dashboard</p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row max-w-screen gap-4 sm:w-[100%] lg:w-[50%] md:w-[60%] w-[100%] justify-center items-center lg:justify-start lg:ml-[40px] px-4">
            <div className="flex md:w-2/4 w-[40%] h-[12vh] justify-around items-center rounded-lg bg-yellow-400 shadow-lg p-2">
              <div className="flex justify-center items-center">
                <MdEmail className="w-16 h-16 text-black" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl">138</h1>
                <p className="font-bold text-xs">Messages</p>
              </div>
            </div>
            <div className="flex md:w-2/4 w-[40%] h-[12vh] justify-around items-center rounded-lg bg-blue-900 shadow-lg p-4">
              <div className="flex justify-center items-center">
                <FaBriefcase className="w-14 h-14 text-white" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-white text-3xl">50</h1>
                <p className="font-bold text-white text-xs">Jobs</p>
              </div>
            </div>
            <div className="flex md:w-2/4 w-[40%] h-[12vh] justify-around items-center rounded-lg bg-green-600 shadow-lg p-4">
              <div className="flex justify-center items-center">
                <BsFillPeopleFill className="w-14 h-14 text-white" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-white text-3xl">100</h1>
                <p className="font-bold text-white text-xs">Candidates</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap p-4 gap-6 lg:justify-start lg:ml-10">
            {jobData.map((section, idx) => (
              <GenericCard key={idx} title={section.title} entries={section.entries} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
