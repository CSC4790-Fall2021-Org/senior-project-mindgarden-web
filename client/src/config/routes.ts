import IRoute from "../interfaces/route";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/Auth/Register";
import LoginPage from "../pages/Auth/Login";
import ForgotPasswordPage from "../pages/Auth/Forgot";
import { ProfilePage } from "../pages/Profile/ProfilePage";

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
];

export default routes;
