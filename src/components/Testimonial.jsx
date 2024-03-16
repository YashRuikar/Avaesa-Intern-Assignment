import Footer from "./Footer"
import Header from "./Header"
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";

const Testimonial = () => {
  return (
    <>
    <Header />

    
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

    <Footer />
    </>
  )
}

export default Testimonial