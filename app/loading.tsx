import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
      <div className="text-center space-y-6">
        {/* Spinner with enhanced size and color */}
        <div className="relative inline-flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75 animate-ping"></span>
          <FaSpinner className="animate-spin text-white text-7xl relative z-10" />
        </div>
        
        {/* Loading message */}
        <h1 className="text-white text-3xl font-extrabold drop-shadow-md">
          Loading, please wait...
        </h1>

        {/* Subtle decorative animation */}
        <div className="h-2 w-24 bg-white rounded-full mx-auto animate-pulse"></div>
      </div>
    </div>
  );
}
