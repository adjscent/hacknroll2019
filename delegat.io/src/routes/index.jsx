
import LandingPage from 'views/Landing/LandingPage.jsx';
import ProfilePage from 'views/Login/ProfilePage.jsx';
import LoginPage from 'views/Login/LoginPage.jsx';


var indexRoutes = [
  { path: '/profile-page', name: 'ProfilePage', component: ProfilePage},
  { path: '/login-page', name: 'LoginPage', component: LoginPage },
  { path: '/home', name: 'LandingPage', component: LandingPage },
  { path: '/', name: 'LandingPage', component: LandingPage }
];

export default indexRoutes;