import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About"
import Home from "./components/Home";
import Courses from "./components/Courses";
import Testimonial from "./components/Testimonial";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/testimonial",
      element: <Testimonial />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
