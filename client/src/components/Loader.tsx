import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-blue-600 mb-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
          ></path>
        </svg>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Just a moment, loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
