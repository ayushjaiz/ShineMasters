import React from "react";

{
  /* <FontAwesomeIcon icon={faBroom} /> */
}
{
  /* <FontAwesomeIcon icon={faPaintbrush} /> */
}
{
  /* <FontAwesomeIcon icon={faUserNurse} /> */
}

import cleanerLogo from "../../img/cleaner_logo.png"; // Adjust paths as needed
import painterLogo from "../../img/painter_logo.png";
import electricLogo from "../../img/electrical_logo.png";
import repairLogo from "../../img/repair_logo.png";
import cookLogo from "../../img/cook.svg";

import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <div className="py-8">
      <div className="flex items-center  gap-3 ">
        <div className="h-10 w-5 bg-primary rounded-sm max-2xl:h-8 max-2xl:w-4"></div>
        <h2 className="text-lg text-primary capitalize font-bold max-2xl:text-base __className_153980">
          Categories
        </h2>
      </div>

      <div className="text-4xl pt-5 pb-8 font-bold">Browse by Category</div>

      <div className="flex gap-10">
        <Link to="cleaners" className="block">
          <div className="w-36 h-32 border-2 border-gray-300 rounded-md bg-white  flex flex-col items-center justify-center  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <img
              src={cleanerLogo}
              alt="Cleaner"
              className="w-16 h-16 mb-2 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800 ">Cleaner</span>
          </div>
        </Link>

        <Link to="painters" className="block">
          <div className="w-36 h-32 border-2 border-gray-300 rounded-md bg-white  flex flex-col items-center justify-center  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <img
              src={painterLogo}
              alt="Painter"
              className="w-16 h-16 mb-2 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800 ">Painter</span>
          </div>
        </Link>

        <Link to="electricals" className="block">
          <div className="w-36 h-32 border-2 border-gray-300 rounded-md bg-white  flex flex-col items-center justify-center  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <img
              src={electricLogo}
              alt="Electric"
              className="w-16 h-16 mb-2 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800 ">Electric</span>
          </div>
        </Link>

        <Link to="repairs" className="block">
          <div className="w-36 h-32 border-2 border-gray-300 rounded-md bg-white  flex flex-col items-center justify-center  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <img
              src={repairLogo}
              alt="Repair"
              className="w-16 h-16 mb-2 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800 ">Repair</span>
          </div>
        </Link>

        <Link to="cooks" className="block">
          <div className="w-36 h-32 border-2 border-gray-300 rounded-md bg-white flex flex-col items-center justify-center  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <img
              src={cookLogo}
              alt="Cook"
              className="w-16 h-16 mb-2 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800 ">Cook</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesSection;
