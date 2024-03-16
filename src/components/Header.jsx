import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between w-full relative py-5 px-16 bg-[#E0E0DB]">
      <div className="px-5 w-[60%]">
        <NavLink to="/">
          <p className="tracking-wider font-bold text-2xl text-gray-400">
            Journalism
          </p>
          <p className="tracking-wider font-bold text-2xl text-gray-600">
            Mastery
          </p>
        </NavLink>
      </div>
      <div className="w-[40%]">
        <ul className="flex justify-around gap-3 pt-2 text-gray-700 text-lg font-semibold items-center">
          <NavLink to="/Courses">
            <li className="cursor-pointer hover:text-gray-500">Courses</li>
          </NavLink>
          <NavLink to="/About">
            <li className="cursor-pointer hover:text-gray-500">About</li>
          </NavLink>
          <NavLink to="/Testimonial">
            <li className="cursor-pointer hover:text-gray-500">Testimonial</li>
          </NavLink>
          <li className="cursor-pointer hover:text-gray-500">Cart</li>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
