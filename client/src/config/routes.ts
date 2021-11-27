import IRoute from "../interfaces/route";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/Auth/Register";
import LoginPage from "../pages/Auth/Login";
import ForgotPasswordPage from "../pages/Auth/Forgot";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { StorePage } from "../pages/StorePage";
import { PlayPage } from "../pages/Play/PlayPage";
import { FinishedPage } from "../pages/FinishedPage";

const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    component: HomePage,
    name: "Home Page",
    protected: true,
  },
  {
    path: "/register",
    exact: true,
    component: RegisterPage,
    name: "Register Page",
    protected: false,
  },
  {
    path: "/login",
    exact: true,
    component: LoginPage,
    name: "Login Page",
    protected: false,
  },
  {
    path: "/forgot",
    exact: true,
    component: ForgotPasswordPage,
    name: "Change Password Page",
    protected: false,
  },
  {
    path: "/profile",
    exact: true,
    component: ProfilePage,
    name: "Profile Page",
    protected: true,
  },
  {
    path: "/store",
    exact: true,
    component: StorePage,
    name: "Store Page",
    protected: true,
  },
  {
    path: "/play",
    exact: true,
    component: PlayPage,
    name: "Store Page",
    protected: true,
  },
  {
    path: "/finished",
    exact: true,
    component: FinishedPage,
    name: "Finished Page",
    protected: true,
  },
];

export default routes;
