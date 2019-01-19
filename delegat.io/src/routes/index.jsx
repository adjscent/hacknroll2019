import LandingPage from "views/Landing/LandingPage.jsx";
import UserPage from "views/Landing/LandingPage.jsx";
import MainPage from "views/Main/MainPage.jsx";
import ProfilePage from "views/Login/ProfilePage.jsx";
import LoginPage from "views/Login/LoginPage.jsx";
import Page404 from "views/Others/Page404.jsx";

var indexRoutes = [
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/home", name: "MainPage", component: MainPage },
  { path: "/home2", name: "UserPage", component: UserPage },
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "*", component: Page404 }
];

export default indexRoutes;
