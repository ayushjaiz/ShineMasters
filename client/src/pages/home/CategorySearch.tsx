import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const CategorySearch = () => {
  return (
    <div className="mx-auto max-w-screen-xl flex flex-col gap-y-4 items-center py-5">
      <h3 className="text-2xl">Our featured Services</h3>
      <h1 className="text-3xl font-bold sm:text-4xl text-center">
        Hire <span className="text-primary">professionals</span>,<br></br>{" "}
        trained <span className="text-primary">specifically</span> for your
        needs
      </h1>
      <p className="mt-4 text-secondary text-xl">
        Shinemasters offers completely certified workers with an complimentary
        replacement policy
      </p>
      <Button className="mt-6" asChild>
        <Link to="/services">Explore Now</Link>
      </Button>
    </div>
  );
};

export default CategorySearch;
