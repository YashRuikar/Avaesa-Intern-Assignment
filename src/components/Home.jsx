import Header from "./Header";
import Content from "../assets/Content.png";
import profile from "../assets/profile.png";
import "../index.css";
import courseProfile from "../assets/course.jpg";
import Testimonial1 from "../assets/testimonial/test1.jpg";
import Testimonial2 from "../assets/testimonial/test2.jpg";
import Testimonial3 from "../assets/testimonial/test3.jpg";
import Testimonial4 from "../assets/testimonial/test4.jpg";
import Testimonial5 from "../assets/testimonial/test5.jpg";
import Testimonial6 from "../assets/testimonial/test6.jpg";
import Testimonial7 from "../assets/testimonial/test7.jpg";
import Testimonial8 from "../assets/testimonial/test8.jpg";
import Testimonial9 from "../assets/testimonial/test9.jpg";
import Testimonial10 from "../assets/testimonial/test10.jpg";
import Testimonial11 from "../assets/testimonial/test11.jpg";
import Testimonial12 from "../assets/testimonial/test12.jpg";
import playIcon from "../assets/playIcon.png";
import laptopPlay from "../assets/laptopPlay.svg";
import mobile from "../assets/mobile.svg";
import download from "../assets/download.svg";
import trophy from "../assets/trophy.svg";
import { useState } from "react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import Footer from "./Footer";

const Home = () => {
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

      {/* Hero Section */}
      <div className="w-full pb-24 bg-[#E0E0DB]">
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
                <h2 className="text-lg font-semibold">Arun Sharma</h2>
                <p className="text-sm text-gray-600">Journalist</p>
                <p className="text-sm text-gray-600">
                  Contact: arunsharma@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white py-12 px-56">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <h2 className="text-4xl tracking-wide font-bold text-gray-800 mb-6">
                Little About Me!
              </h2>
            </div>
            <div className="w-1/2">
              <div className=" p-6">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-lg text-gray-700">
                  My journey as a journalist has been both challenging and
                  rewarding. It all started with a curiosity to explore the
                  world through stories. I have been fortunate to witness
                  history unfold before my eyes and to share those experiences
                  with readers.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Each story I write is a reflection of my commitment to
                  integrity and truth. I strive to bring light to issues that
                  matter, to amplify voices that are often unheard, and to
                  inspire change through storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-72 flex pt-10">
        <ul className="w-full">
          <li className="flex flex-wrap justify-center">
            <img src={Testimonial1} alt="" className="pt-20 px-4" />
            <img src={Testimonial2} alt="" className="pb-20 px-4" />
            <img src={Testimonial3} alt="" className="pb-20 px-4" />
            <img src={Testimonial4} alt="" className="pt-20 px-4" />
            <img src={Testimonial5} alt="" className="pb-20 px-4" />
            <img src={Testimonial6} alt="" className="pt-20 px-4" />
            <img src={Testimonial7} alt="" className="pb-20 px-4" />
            <img src={Testimonial8} alt="" className="pt-20 px-4" />
            <img src={Testimonial9} alt="" className="pb-20 px-4" />
            <img src={Testimonial10} alt="" className="pt-20 mx-5" />
            <img src={Testimonial11} alt="" className="pb-20 mx-5" />
            <img src={Testimonial12} alt="" className="pt-20 mx-5" />
          </li>
        </ul>
      </div>

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

      {/* Review */}
      <div>
        <h2 className="px-48 underline mt-10 text-3xl font-bold">
          Testimonial
        </h2>
        <div className="flex pt-10 mx-48 gap-x-10">
          <div className="border border-black p-10 rounded-3xl bg-gray-50 flex items-center">
            <div className="w-1/4">
              <img
                src={profile1}
                alt="profileImage"
                className="w-32 h-32 rounded-[50%]"
              />
            </div>
            <div className="w-2/3 pl-10">
              <h2 className="text-2xl font-bold">Yash Ruikar</h2>
              <p className="text-gray-400">Student</p>
              <p className="pt-5">
                I recently completed the Arun on Journalism course, and I must
                say it was an eye-opening and enriching experience. As an
                aspiring journalist, learning from one of the industry most
                iconic figures was a dream come true.
              </p>
            </div>
          </div>

          <div className="border border-black p-10 rounded-3xl bg-gray-50 flex items-center">
            <div className="w-1/4">
              <img
                src={profile2}
                alt="profileImage"
                className="w-32 h-32 rounded-[50%]"
              />
            </div>
            <div className="w-2/3 pl-10">
              <h2 className="text-2xl font-bold">Juila Kane</h2>
              <p className="text-gray-400">Intern</p>
              <p className="pt-5">
                The course online community was a treasure trove of knowledge
                and support. I enjoyed interacting with fellow journalists from
                around the world, sharing insights and feedback on each other
                work. The discussions and forums added an enriching layer to the
                learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
