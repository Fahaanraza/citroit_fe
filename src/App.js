import React, { useReducer } from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Navigate
} from 'react-router-dom';


import PrivateRoute from './layouts/PrivateRoute';
import { RootContext } from './context/RootContext';
import rootReducer from './reducers/rootReducer';


import MainWrapper from './layouts/MainWrapper';

// import Login from './pages/Login';
import HomePage from './components/homePage/homePage';
import Register from './components/Register/register';
import Login from './components/Login/login';
import AdminLogin from './components/Login/adminLogin';
import AdminHomePage from './components/adminHome/adminHomePage';


export default function App() {
 const initalState = {
   auth: {
     isLoggedIn: false,
     user: null
   },
   companies: null,
   currentUserCompany: null,
   roleConfig: null
 };


 const [state, dispatch] = useReducer(rootReducer(initalState), initalState);


 return (
   <RootContext.Provider value={{ ...state, dispatch }}>
     <Router>
     <MainWrapper>
       <Routes>
       <Route
        path="/adminHome"
        element={
          <PrivateRoute>
            <AdminHomePage />
          </PrivateRoute>
        }
      />
         <Route path="/home" element={<HomePage />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/admin-login" element={<AdminLogin />} />
         <Route path="/" element={<Navigate to="/home" replace />} />
       </Routes>
     </MainWrapper>
     </Router>
   </RootContext.Provider>
 );
}


