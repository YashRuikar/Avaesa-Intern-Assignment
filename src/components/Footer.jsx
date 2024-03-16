const Footer = () => {
  return (
    <>
      <div className="px-48 mt-20 bg-[#E0E0DB] pt-10">
        <div className="container mx-auto">
          <div className="flex justify-between gap-8">
            <div className="w-2/5">
              <div>
                <h2 className="text-3xl font-bold">Journalism</h2>
                <h2 className="text-3xl font-bold">Mastery</h2>
                <p className=" pt-8 text-gray-600">
                  At Journalism Mastery, we are dedicated to providing
                  high-quality journalism courses that empower individuals to
                  excel in the field of media and storytelling. Our diverse
                  range of courses covers topics such as investigative
                  journalism, broadcast journalism, digital media ethics, and
                  more.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold pb-4">Quick Links</h3>
              <ul className="mt-4 list-disc pl-5">
                <li>
                  <a href="#" className="text-gray-700  hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold pb-4">Contact Us</h3>
              <p className="mt-4 text-gray-700">
                Email: info@journalismmastery.com
              </p>
              <p className="text-gray-700">Phone: +123 456 7890</p>
              <p className="text-gray-700">
                Address: Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-700 pb-3">
            <p>&copy; 2024 Journalism Mastery. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
