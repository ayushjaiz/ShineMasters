import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import CategoriesSection from "./CategoriesSection";
import SuggestedSection, { ProfileType } from "./ProfileList";

interface User {
  userId: number;
  name: string;
  email: string;
  isWorker: boolean;
}

interface Worker {
  workerId: number;
  userId: number;
  workerType: string;
  experienceYears: number;
  dailyRate: number;
  availability: boolean;
  location: string;
  bio: string;
  imageUrl: string;
  user: User;
}

const BrowsePage = () => {
  const [allWorkers, setAllWorkers] = useState<Worker[]>([]);
  const [cleanerWorkers, setCleanerWorkers] = useState<Worker[]>([]);
  const [gardenerWorkers, setGardenerWorkers] = useState<Worker[]>([]);
  const [painterWorkers, setPainterWorkers] = useState<Worker[]>([]);
  const [cookWorkers, setCookWorkers] = useState<Worker[]>([]);
  const [displayedWorkers, setDisplayedWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const fetchWorkers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/worker");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Worker[] = await response.json();
      setAllWorkers(data);

      setCleanerWorkers(
        data.filter((worker) => worker.workerType === "cleaner")
      );
      setGardenerWorkers(
        data.filter((worker) => worker.workerType === "gardener")
      );
      setPainterWorkers(
        data.filter((worker) => worker.workerType === "painter")
      );
      setCookWorkers(data.filter((worker) => worker.workerType === "cook"));
      console.log("Hello:", allWorkers);
    } catch (error) {
      setError(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <CategoriesSection />
        <SuggestedSection
          profileType={ProfileType.Suggested}
          workers={allWorkers}
        />
        <SuggestedSection
          profileType={ProfileType.Garderner}
          workers={allWorkers}
        />
        <SuggestedSection
          profileType={ProfileType.Painter}
          workers={allWorkers}
        />
        <SuggestedSection
          profileType={ProfileType.Sweeper}
          workers={allWorkers}
        />
      </div>
    </>
  );
};

export default BrowsePage;
export { Worker };
