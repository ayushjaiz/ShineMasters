import React from "react";
import ProfileCard from "./ProfileCard";
import { Worker } from "./BrowsePage";

export enum ProfileType {
  Suggested,
  Garderner,
  Painter,
  Sweeper,
}

interface ProfileListProps {
  profileType: ProfileType;
  workers: Worker[];
}

const ProfileList = ({ profileType, workers }: ProfileListProps) => {
  return (
    <div className="py-8">
      <div className="flex items-center gap-3 ">
        <div className="h-10 w-5 bg-primary rounded-sm max-2xl:h-8 max-2xl:w-4"></div>
        <h2 className="text-lg text-primary font-bold capitalize max-2xl:text-base __className_153980">
          {profileType === ProfileType.Suggested
            ? "Only For You"
            : `Top ${ProfileType[profileType] + "s"}`}
        </h2>
      </div>

      <div className="flex gap-10 mt-6">
        {workers
          .map((worker: Worker) => (
            <ProfileCard
              displayType={profileType === ProfileType.Suggested}
              worker={worker}
            />
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
