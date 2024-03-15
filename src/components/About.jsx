import Header from "./Header"

const About = () => {
  return (
    <>
    <Header />
    <div className="bg-white py-12">
        <div className="container mx-auto px-56">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Little About Me!</h2>
          <p className="text-lg text-gray-700">
            Hey, Arun Sharma is a seasoned journalist with over a decade of experience in reporting on
            global events. He has covered stories from around the world, providing insightful
            analysis and in-depth reporting on a wide range of topics.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Arun is passionate about storytelling and believes in the power of journalism to
            make a difference. His work has been recognized with several awards, including the
            prestigious Pulitzer Prize for Investigative Reporting.
          </p>
        </div>
      </div>
    </>
  )
}

export default About