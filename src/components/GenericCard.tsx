import { FaDownload, FaEye } from "react-icons/fa";

interface Entry {
  icon?: React.ReactNode | string;
  title?: string;
  subtitle?: string;
  company?: string;
  time?: string;
  jobRole?: string;
  name?: string;
  atsScore?: number;
  status?: string;
  description?: string;
}

interface GenericCardProps {
  title: string;
  entries: Entry[];
}

export const GenericCard = ({ title, entries }: GenericCardProps) => {
  const renderIcon = (icon?: React.ReactNode | string) => {
    if (typeof icon === "string") {
      return <img src={icon} alt="icon" className="object-cover h-10 w-10 rounded-md" />;
    }
    return icon || "icon";
  };

  const renderContent = (entry: Entry) => {
    // ATS Score layout (Card3)
    if (entry.atsScore !== undefined) {
      const badgeColor = entry.atsScore >= 60 ? "bg-blue-500" : "bg-red-500";
      return (
        <div className="flex justify-between items-center bg-blue-100 p-3 rounded-lg">
          <div className="flex gap-3 items-center">
            {renderIcon(entry.icon)}
            <div className="flex flex-col">
              <span className="font-bold text-sm">{entry.name}</span>
              <span className="text-xs text-gray-600">
                Applied for: <span className="font-medium text-black">{entry.jobRole}</span>
              </span>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[10px] text-gray-700 font-bold">ATS Score(%)</p>
              <div className={`text-white text-xs font-semibold w-7 h-6 flex justify-center items-center rounded-full ${badgeColor}`}>
                {entry.atsScore}
              </div>
            </div>
            <div className="flex justify-center items-center h-6 w-6 text-white rounded-sm bg-green-600">
              <FaEye className="text-white text-sm" />
            </div>
          </div>
        </div>
      );
    }

    // Payroll layout (Card4)
    if (entry.status !== undefined && entry.description !== undefined) {
      const badgeColor = entry.status === "Paid" ? "bg-green-500" : "bg-yellow-500";
      return (
        <div className="flex justify-between items-center bg-blue-100 p-3 rounded-lg">
          <div className="flex gap-3 items-center">
            {renderIcon(entry.icon)}
            <div className="flex flex-col">
              <span className="font-bold text-sm">{entry.name}</span>
              <span className="text-xs text-gray-600">{entry.description}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center  items-center gap-2">
            <p className="text-[10px] text-gray-700 font-semibold">{entry.status}</p>
            <div className={`w-20 h-2 rounded-full ${badgeColor}`}></div>
          </div>
        </div>
      );
    }

    // Saved Jobs layout (Card2)
    if (entry.jobRole && entry.name && !entry.atsScore) {
      return (
        <div className="flex gap-2 bg-blue-100 p-2 items-center rounded-lg">
          <div className="flex justify-center items-center h-12 w-12 rounded-md">
            {renderIcon(entry.icon)}
          </div>
          <div className="flex flex-col w-full">
            <div className="font-bold text-sm">{entry.name}</div>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <div>{entry.jobRole}</div>
              <div className="flex gap-4 justify-center items-center mr-4">
                <div className="flex justify-center items-center h-6 w-6 text-white rounded-sm bg-green-600">
                  <FaEye />
                </div>
                <div className="flex justify-center items-center h-6 w-6 text-white rounded-sm bg-blue-600">
                  <FaDownload />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: Applied Jobs layout (Card)
    return (
      <div className="flex gap-2 bg-blue-100 p-2 items-center rounded-lg">
        <div className="flex justify-center items-center h-12 w-12 rounded-md">
          {renderIcon(entry.icon)}
        </div>
        <div className="flex flex-col w-full">
          <div className="font-bold text-sm">{entry.title}</div>
          <div className="flex justify-between items-center text-xs text-gray-500 mr-2">
            <div>{entry.company}</div>
            <div>{entry.time}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-grow h-auto w-[400px] p-3 bg-white rounded-lg shadow">
      <div className="flex justify-between p-2 items-center">
        <h3 className="text-base font-bold">{title}</h3>
        <button className="text-gray-500 hover:cursor-pointer text-lg">⋮</button>
      </div>
      <div className="space-y-2">
        {entries.map((entry, index) => (
          <div key={index}>{renderContent(entry)}</div>
        ))}
      </div>
    </div>
  );
};
