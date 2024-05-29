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
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
         <Route index element={<HomePage />}/>
         <Route path="/endeavors" element={<EndeavorPage />}/>
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