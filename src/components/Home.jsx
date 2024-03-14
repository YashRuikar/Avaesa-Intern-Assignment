import Header from "./Header";
import Content from "../assets/Content.png";
import profile from "../assets/profile.png";
import "../index.css"; 

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-[#E0E0DB]">
        <div className="container mx-auto px-56 py-10">
          <div className="flex justify-between">
            <div className="w-2/3">
              <img src={Content} alt="content" />
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center relative gradient-effect">
              <div className="w-400 h-400 rounded-3xl overflow-hidden shadow-xl relative">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                    <h2 className="text-white text-3xl font-bold">Welcome!</h2>
                    <p className="text-white text-lg">Explore our courses</p>
                    <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 hover:text-white transition duration-300">
                      Browse Courses
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-sm text-gray-600">Journalist</p>
                <p className="text-sm text-gray-600">
                  Contact: john.doe@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
