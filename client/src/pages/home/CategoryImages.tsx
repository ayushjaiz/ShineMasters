import React from "react";

import cleaner from "../../img/Cleaner.jpeg";
import painter from "../../img/Cleaner.jpeg";
import electric from "../../img/Cleaner.jpeg";
import repair from "../../img/Cleaner.jpeg";
import cook from "../../img/Cleaner.jpeg";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type CardDetail = {
  caption: string;
  imgLink: string;
  route: string;
};

const cardDetails: CardDetail[] = [
  {
    caption: "Cleaner",
    imgLink: cleaner,
    route: "/services/cleaners",
  },
  {
    caption: "Painter",
    imgLink: painter,
    route: "/services/painters",
  },
  {
    caption: "Electric",
    imgLink: electric,
    route: "/services/electricals",
  },
  {
    caption: "Repair",
    imgLink: repair,
    route: "/services/repairs",
  },
  {
    caption: "Cook",
    imgLink: cook,
    route: "/services/cooks",
    },
];

const CategoryImages = () => {
  return (
    <div className="mx-auto max-w-screen-xl pt-12 pb-[100px]">
      <div className="flex gap-x-4 justify-center">
        {cardDetails.map((detail, index) => (
          <div
            key={index}
            className="border-[1px] rounded-lg p-3 border-gray-300 flex flex-col"
          >
            <img
              key={index}
              src={detail.imgLink}
              alt={`Cleaner ${index + 1}`} // Alt text for accessibility
              width={220} // You can adjust or use Tailwind CSS for consistent sizing
              height={220}
              style={{ width: "207px", height: "219px" }} // Inline styles if needed
              className="object-cover object-center" // Tailwind CSS classes
            />

            <Button size="sm" className="mt-[12px] mx-auto " asChild>
              <Link to={detail.route}>
                {detail.caption}
                <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryImages;
