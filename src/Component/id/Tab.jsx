import { useState, useEffect } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handleTabClick = (e) => {
    setActiveTab(e.target.value);
    console.log(e.target.value);
  };
  console.log(activeTab);
  return (
    <div className="">
      <div className="max-w-5xl mx-auto bg-white shadow-lg overflow-hidden">
        {/* Tab Headers */}
        <div className="flex ">
          <button
            value={"wiki"}
            onClick={handleTabClick}
            className={`flex-1 px-6 py-1 font-medium transition-all border-x-indigo-500 `}
          >
            Character wiki
          </button>
          <button
            value={"videos"}
            onClick={handleTabClick}
            className={`flex-1 px-6 py-1 font-medium transition-all border-x-indigo-500 `}
          >
            Videos
          </button>
          <button
            value={"images"}
            onClick={handleTabClick}
            className={`flex-1 px-6 py-1 font-medium transition-all border-x-indigo-500 `}
          >
            Images
          </button>
          <button
            value={"forum"}
            onClick={handleTabClick}
            className={`flex-1 px-6 py-1 font-medium transition-all border-x-indigo-500 `}
          >
            Forum
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
          <p className="text-gray-600 text-lg leading-relaxed"></p>
        </div>
      </div>
    </div>
  );
};
export default Tab;
