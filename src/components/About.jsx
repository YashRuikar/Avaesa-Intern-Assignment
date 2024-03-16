import Footer from "./Footer"
import Header from "./Header"

const About = () => {
  return (
    <>
    <Header />
    
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

      <Footer />
    </>
  )
}

export default About