import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    }, 
    {
        path: '/signup',
        Component: SignUp
    },
    {
        path: 'signin',
        Component: SignIn
    }
])

export default router;