import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Login";

const routes: RouteObject[] = [
{
    path : "/",
    element: <div>First Page</div>
},
{
    path: "/Home",
    element: <div>Prima componeneta</div>
},
{
    path: "/Login",
    element: <Login />
}
]

export const router = createBrowserRouter(routes);