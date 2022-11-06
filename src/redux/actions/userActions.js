import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  MARK_NOTIFICATIONS_READ
} from '../types';
import axios from 'axios';

export const loginUser = (loginData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/login', loginData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({ type: CLEAR_ERRORS });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
    };

export const signupUser = (newUser) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/signup', newUser)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
  window.location.reload();
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get('/user')
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
export const uploadImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/image', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const uploadVideoImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/uploadVideoImage', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const uploadVideoFile = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/uploadVideoFile', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const postVideo = (formData, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/postVideo', formData)
    .then(() => {
      dispatch(getUserData());
      history.push('/');
    })
    .catch((err) => console.log(err));
};

export const uploadVideo = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/video', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const editUserDetails = (userDetails) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user', userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const editMessage = (sendmessage) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/setmessage', sendmessage)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const markNotificationsRead = (notificationIds) => (dispatch) => {
  axios
    .post('/notifications', notificationIds)
    .then((res) => {
      dispatch({
        type: MARK_NOTIFICATIONS_READ
      });
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
