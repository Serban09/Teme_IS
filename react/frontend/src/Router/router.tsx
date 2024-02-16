import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import { HomePage }  from "../Components/HomePage";
import { ProfilePage }  from "../Components/ProfilePage";
import { Friends } from "../Components/Friends";
import { SeeProfileFriend } from "../Components/SeeProfileFriend";
import { ADMIN } from "../Components/ADMIN";
import { Posts } from "../Components/Posts";


const routes: RouteObject[] = [
{
    path: "/Friends",
    element: <Friends/>
},
{
    path : "/HomePage",
    element: <HomePage/>
},
{
    path: "/ProfilePage",
    element: <ProfilePage/>
},{
path: "/SeeProfileFriend",
element: <SeeProfileFriend idFriend={undefined} />
},
{
    path: "/Register",
    element: <Register />
},
{
    path: "/Login",
    element: <Login />
},
{
    path: "/ADMIN",
    element: <ADMIN />
},
{
    path: "/POSTS",
    element: <Posts />
}
]

export const router = createBrowserRouter(routes);