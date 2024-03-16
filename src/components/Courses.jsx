import Footer from "./Footer";
import Header from "./Header";
import courseProfile from "../assets/course.jpg";
import playIcon from "../assets/playIcon.png";
import laptopPlay from "../assets/laptopPlay.svg";
import mobile from "../assets/mobile.svg";
import download from "../assets/download.svg";
import trophy from "../assets/trophy.svg";
import { useState } from "react";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleSection = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <>
      <Header />

      {/* Explore Courses Section */}
      <div className="py-16 px-36 bg-[#E0E0DB]">
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 underline">
            Explore Our Course
          </h2>

          <div className="flex justify-between pt-10 mr-18">
            <div>
              <h2 className="text-3xl font-bold text-gray-700">
                Arun on Journalism & Finding the Truth in the News
              </h2>
              <p className="mr-10 pt-10 text-xl font-semibold">
                Learn to ask the right questions & tell captivating stories.
                <p>Practical advice for journalists & avid news consumers.</p>
              </p>
            </div>

            <div className="relative cursor-pointer">
              <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center rounded-l-lg border-gray-400 shadow-lg">
                <span className="text-white text-lg font-bold z-10">
                  Preview Course
                </span>
              </div>
              <img
                src={courseProfile}
                alt="courseProfile"
                className="w-96 h-52 object-cover rounded-l-lg"
              />
              <img
                src={playIcon}
                alt="Play Icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ opacity: 0.6 }}
              />
            </div>

            <div className="flex flex-col px-3  bg-gray-200 shadow border-gray-500 rounded-r-lg">
              <div className="text-gray-800 text-xl pt-3 font-bold">
                Course Details
              </div>
              <div className="flex justify-between items-start mt-4 w-80">
                <div className="">
                  <div className="text-gray-600">Pricing:</div>
                  <div className="line-through text-gray-600">₹4999</div>
                  <div className="text-lg font-bold">₹3999</div>
                </div>
                <div>
                  <div className="text-gray-600">Duration:</div>
                  <div className="text-lg font-bold">6 weeks</div>
                </div>
                <div>
                  <div className="text-gray-600">Discount:</div>
                  <div className="text-lg font-bold">20% off</div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">
                  Buy this Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Information */}
      <div>
        <div className="py-12 px-52">
          <h2 className="text-3xl font-bold mb-6">This course includes:</h2>

          <div className="grid grid-cols-2">
            <div className="flex mb-5">
              <img
                src={laptopPlay}
                alt="LaptopPlay"
                className="w-10 h-10 mr-4"
              />
              <div className="flex items-center font-semibold">
                36 hours on-demand video
              </div>
            </div>

            <div className="flex mb-5">
              <img src={mobile} alt="mobile" className="w-10 h-10 mr-4" />
              <div className="flex items-center font-semibold">
                Access on mobile and TV
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex mb-5 ">
              <img src={download} alt="download" className="w-10 h-10 mr-4" />
              <div className="flex items-center font-semibold">
                6 downloadable resources
              </div>
            </div>

            <div className="flex mb-5">
              <img src={trophy} alt="trophy" className="w-10 h-10 mr-4" />
              <div className="flex items-center font-semibold">
                Certificate of completion
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="py-12 px-52">
        <div className="text-3xl font-bold mb-6">Course Content</div>
        <div className="border border-black ">
          <div
            className="border-b px border-black text-xl font-bold cursor-pointer bg-gray-50"
            onClick={() => toggleSection(1)}
            style={{
              transition: "all 0.3s ease",
              padding: "20px",
              paddingLeft: "20px",
            }}
          >
            1. Introduction
          </div>
          {isOpen === 1 && (
            <div
              className="border-b border-black p-4"
              style={{
                transition: "all 0.3s ease",
                maxHeight: "500px",
                overflow: "hidden",
              }}
            >
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">Arun journey in journalism</p>
                </div>
              </div>
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    The importance of journalism in society
                  </p>
                </div>
              </div>
            </div>
          )}

          <div
            className="border-b border-black text-xl font-bold cursor-pointer bg-gray-50"
            onClick={() => toggleSection(2)}
            style={{
              transition: "all 0.3s ease",
              padding: "20px",
              paddingLeft: "20px",
            }}
          >
            2. Asking the Right Questions
          </div>
          {isOpen === 2 && (
            <div
              className="border-b border-black p-4"
              style={{
                transition: "all 0.3s ease",
                maxHeight: "500px",
                overflow: "hidden",
              }}
            >
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Developing critical thinking skills
                  </p>
                </div>
              </div>
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">Formulating probing questions</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Interview techniques for extracting valuable information
                  </p>
                </div>
              </div>
            </div>
          )}

          <div
            className="border-b border-black text-xl font-bold cursor-pointer bg-gray-50"
            onClick={() => toggleSection(3)}
            style={{
              transition: "all 0.3s ease",
              padding: "20px",
              paddingLeft: "20px",
            }}
          >
            3. Crafting Captivating Stories
          </div>
          {isOpen === 3 && (
            <div
              className="border-b border-black p-4"
              style={{
                transition: "all 0.3s ease",
                maxHeight: "500px",
                overflow: "hidden",
              }}
            >
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    The art of storytelling in journalism
                  </p>
                </div>
              </div>
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Techniques for engaging your audience
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Writing styles for different media platforms
                  </p>
                </div>
              </div>
            </div>
          )}

          <div
            className="border-b border-black text-xl font-bold cursor-pointer bg-gray-50"
            onClick={() => toggleSection(4)}
            style={{
              transition: "all 0.3s ease",
              padding: "20px",
              paddingLeft: "20px",
            }}
          >
            4. Ethics and Integrity in Journalism
          </div>
          {isOpen === 4 && (
            <div
              className="border-b border-black p-4"
              style={{
                transition: "all 0.3s ease",
                maxHeight: "500px",
                overflow: "hidden",
              }}
            >
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Arun principles of ethical journalism
                  </p>
                </div>
              </div>
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Fact-checking and verifying sources
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Handling biases and maintaining objectivity
                  </p>
                </div>
              </div>
            </div>
          )}

          <div
            className="text-xl font-bold cursor-pointer bg-gray-50"
            onClick={() => toggleSection(5)}
            style={{
              transition: "all 0.5s ease-in",
              padding: "20px",
              paddingLeft: "20px",
            }}
          >
            5. The Future of Journalism
          </div>
          {isOpen === 5 && (
            <div
              className="border-b border-black p-4 border-y"
              style={{
                transition: "all 0.3s ease",
                maxHeight: "500px",
                overflow: "hidden",
              }}
            >
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Trends and innovations in the industry
                  </p>
                </div>
              </div>
              <div>
                <div className="flex pb-3">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    The role of citizen journalism
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <img
                    src={laptopPlay}
                    alt="LaptopPlay"
                    className="w-6 h-6 mr-3"
                  />
                  <p className="font-semibold">
                    Advancing diversity and inclusivity in newsrooms
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
