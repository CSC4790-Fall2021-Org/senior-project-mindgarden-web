import IRoute from "../interfaces/route";
import HomePage from "../pages/HomePage"
import RegisterPage from "../pages/Auth/Register"
import LoginPage  from "../pages/Auth/Login";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: false
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
];

export default routes;