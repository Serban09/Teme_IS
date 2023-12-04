import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

const routes: RouteObject[] = [
{
    path : "/",
    element: <div>First Page</div>
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