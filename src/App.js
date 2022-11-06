import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useParams, Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// Components
import AuthRoute from './routes/AuthRoute';
import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import Footer from './components/layout/footer/Footer';
import MobileHeader from './components/layout/mobile/MobileHeader';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import VideoPage from './components/videopage/VideoPage';
import Login from './components/account/Login';
import Register from './components/account/Register';
//
import { connect, Provider} from 'react-redux';
import PropTypes from 'prop-types';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

axios.defaults.baseURL =
  'https://europe-west1-mmaowl.cloudfunctions.net/api';

const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.reload();
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App(props) {

  const { category, videoId } = useParams();
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  function StandardLayout() {
    return (
      <Fragment>
        <Header />
        <Sidebar/> 
      </Fragment>
    );
  };

  function MobileLayout() {
    return (
      <Fragment>
        <MobileHeader />
      </Fragment>
    );
  };

  return (
   <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          {isMobile ? <MobileLayout /> : <StandardLayout />} 
          <Routes>
            <Route 
              exact path="/"
              element={ <Home /> }
            />
            <Route 
              path="/category/:category"
              element={
                <Categories key={category} />
              }
            />
            <Route 
              exact path="/video/:videoId"
              element={
                <VideoPage key={videoId} />
              }
            />
            <Route 
              exact path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route 
              exact path="/register"
              element={
                <AuthRoute>
                  <Register />
                </AuthRoute>
              }
            />
          </Routes> 
          <div className="darkmode"/>
          <Footer />    
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App