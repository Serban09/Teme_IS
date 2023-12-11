import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import { HomePage }  from "../Components/HomePage";

const routes: RouteObject[] = [
{
    path : "/HomePage",
    element: <HomePage/>
},
{
    path: "/Register",
    element: <Register />
},
{
    path: "/Login",
    element: <Login />
}
]

export const router = createBrowserRouter(routes);