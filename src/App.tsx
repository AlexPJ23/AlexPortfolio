import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import EndeavorPage from "./pages/EndeavorPage"
import NotFoundPage from "./pages/NotFoundPage"
import SinglePageEndeavor from "./pages/SingleEndeavorPage"
import ProjectsPage from "./pages/ProjectsPage"
import BlogsPage from "./pages/BlogsPage"
import FeedbackPage from "./pages/FeedbackPage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
         <Route index element={<HomePage />}/>
         <Route path="/endeavors" element={<EndeavorPage />}/>
         <Route path="/endeavors/:id" element={<SinglePageEndeavor />}/>
         <Route path='/projects' element={<ProjectsPage />}/>
         <Route path="/blog" element={<BlogsPage />}/>
         <Route path="/feedback" element={<FeedbackPage />}/>
         <Route path="*" element={<NotFoundPage/>}/>
        </Route>
)
)

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App