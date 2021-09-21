import IRoute from "../interfaces/route";
import HomePage from "../pages/HomePage"
import RegisterPage from "../pages/Auth/Register"
import LoginPage  from "../pages/Auth/Login";
import ChangePasswordPage from "../pages/Auth/ChangePassword";
import ForgotPasswordPage from "../pages/Auth/Forgot";

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    name: 'Home Page',
    protected: true
},
    {
      path: '/register',
      exact: true,
      component: RegisterPage,
      name: 'Register Page',
      protected: false
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    name: 'Login Page',
    protected: false
},
{
  path: '/changepassword',
  exact: true,
  component: ChangePasswordPage,
  name: 'Change Password Page',
  protected: true 
},
{
  path: '/forgot',
  exact: true,
  component: ForgotPasswordPage,
  name: 'Change Password Page',
  protected: false 
},
];

export default routes;