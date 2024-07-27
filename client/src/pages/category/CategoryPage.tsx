import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProfileCard from "../browse/ProfileCard";
import { Worker } from "../browse/BrowsePage";
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { type } = useParams<{ type: string }>();

  console.log('Hello from category page');

  const searchType = type!.slice(0, -1)

  const [allWorkers, setAllWorkers] = useState<Worker[]>([]);
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

      setDisplayedWorkers(
        data.filter((worker) => worker.workerType === searchType)
      );

      
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

  console.log("Hello:", allWorkers);

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-screen-xl my-16">
        <div className="flex items-center gap-3">
          <div className="h-10 w-5 bg-primary rounded-sm max-2xl:h-8 max-2xl:w-4"></div>
          <h2 className="text-lg text-primary font-bold capitalize max-2xl:text-base __className_153980">
            {type}
          </h2>
        </div>
        <div className="flex gap-10 mt-10">
          {displayedWorkers.map((worker: Worker) => (
            <ProfileCard displayType={false} worker={worker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
