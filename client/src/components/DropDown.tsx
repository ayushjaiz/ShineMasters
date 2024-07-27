import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/reducers/userSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout =  async() => {
    try {
        dispatch(removeUser());
      const response = await axios.post("localhost:4000/api/auth/logout");
      window.location.href = "/";
      console.log('Succesful logout')
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full focus:outline-none"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            <Link
              to="/bookings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Bookings
            </Link>

            <Link
              to="/"
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
              <FontAwesomeIcon
                className="ml-[6px]"
                icon={faArrowRightFromBracket}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
