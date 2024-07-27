import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Worker } from "./BrowsePage";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

interface ProfileCardProps {
  displayType: Boolean;
  worker: Worker;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ displayType, worker }) => {
  return (
    <div className="w-56 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden flex flex-col hover:cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
      <Link to={`/worker/${worker.workerId}`}>
        {worker.imageUrl ? (
          <img
            src={worker.imageUrl}
            alt={worker.user.name}
            className="h-60 w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-60 w-full bg-gray-200">
            <span className="text-gray-500">No Image</span>
          </div>
        )}

        <div className="px-2 py-2 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-800">
              {worker.user.name}
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
              <span className="text-sm">5.0</span>
            </div>
          </div>

          {displayType && (
            <div className="text-lg font-medium text-primary">
              {worker.workerType
                ? capitalizeFirstLetter(worker.workerType)
                : "Unknown Type"}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;
