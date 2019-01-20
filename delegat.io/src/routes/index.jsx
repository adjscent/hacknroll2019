import LandingPage from "views/Landing/LandingPage.jsx";
import UserPage from "views/Landing/UserPage.jsx";
import MainPage from "views/Main/MainPage.jsx";
import ProfilePage from "views/Login/ProfilePage.jsx";
import LoginPage from "views/Login/LoginPage.jsx";
import Page404 from "views/Others/Page404.jsx";
// import CallPage from "views/HTML/CallPage.jsx";

var indexRoutes = [
  // { path: "/call-page", name: "CallPage", component: CallPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  // { path: "/home", name: "MainPage", component: MainPage },
  { path: "/home", name: "UserPage", component: UserPage },
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "*", component: Page404 }
];

export default indexRoutes;
