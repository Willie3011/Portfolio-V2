import { createBrowserRouter, RouterProvider } from "react-router-dom"
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Homepage from "./pages/Homepage"
import ProjectPage from "./pages/ProjectPage"
import MainLayout from "./layouts/MainLayout"
import ProjectsPage from "./pages/ProjectsPage"

gsap.registerPlugin(ScrollTrigger, SplitText);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: "/project/:id",
        element: <ProjectPage/>
      },
      {
        path: "projects",
        element: <ProjectsPage/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
