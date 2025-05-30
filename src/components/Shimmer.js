import { useOutletContext } from "react-router-dom";

const ShimmerCard = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg overflow-hidden shadow-md animate-pulse h-72`}>
      <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} h-40 w-full`}></div>
      <div className="p-4 space-y-3">
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} h-5 w-2/3 rounded`}></div>
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} h-4 w-1/2 rounded`}></div>
        <div className="flex justify-between">
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} h-4 w-1/4 rounded`}></div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} h-4 w-1/4 rounded`}></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  const [darkMode] = useOutletContext() || [false];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} py-8 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Search and filter shimmer */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} h-10 w-full sm:w-80 rounded-full animate-pulse`}></div>
          <div className="flex gap-4 w-full sm:w-auto">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} h-10 w-40 rounded-lg animate-pulse`}></div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} h-10 w-24 rounded-lg animate-pulse`}></div>
          </div>
        </div>

        {/* Restaurant cards shimmer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(12).fill("").map((_, index) => (
            <ShimmerCard key={index} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;