import {BrowserRouter as Router, Routes, Route, RouterProvider} from 'react-router-dom'
import {createBrowserRouter} from "react-router-dom";

//Routing
import PrivateRoute from './components/routing/PrivateRoute';

//Screens
import PrivateScreen from './components/screens/PrivateScreen'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen'
import ResetPasswordScreen from './components/screens/ResetPasswordScreen'
import SendVerificationEmail from './components/screens/SendVerificationEmail'
import VerifyEmail from './components/screens/VerifyEmail'
import ProfileScreen from './components/screens/ProfileScreen';

//Dashboard
import Dashboard from './components/DashBoard/components/screens/Home/dashboard'
import Productsdb from "./components/DashBoard/Products/productsdb";
import Userspagedb from "./components/DashBoard/components/screens/Users/userspagedb";
import Layout from "./components/DashBoard/layout"
import Navbardb from "./components/DashBoard/components/navbar/navbardb";
import User from "./components/DashBoard/components/screens/user/User";
import Product from "./components/DashBoard/components/screens/product/Product";



const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/dashboard" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="usersdb" element={<Userspagedb />} />
                        <Route path="productsdb" element={<Productsdb />} />
                        <Route path="users/:id" element={<User />} />
                        <Route path="products/:id" element={<Product />} />
                    </Route>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<RegisterScreen />} />
                    <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
                    <Route path="/passwordreset/:resetToken" element={<ResetPasswordScreen />} />
                    <Route path="/sendVerificationEmail" element={<SendVerificationEmail />} />
                    <Route path="/verifyEmail/:verificationToken" element={<VerifyEmail />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/layout" element={<Layout />} />
                    <Route path="/" element={<PrivateRoute />}>
                        <Route index element={<PrivateScreen />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;