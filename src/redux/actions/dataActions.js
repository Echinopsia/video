import {
  SET_VIDEOS,
  SET_LATEST,
  SET_POPULAR,
  SET_SEARCH,
  SET_CATEGORY,
  LOADING_DATA,
  LIKE_VIDEO,
  UNLIKE_VIDEO,
  DELETE_VIDEO,
  SET_ERRORS,
  POST_VIDEO,
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_USER,
  SET_VIDEO,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
  SET_USER
} from '../types';
import axios from 'axios';

// Get all videos
export const getVideos = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/videos')
    .then((res) => {
      dispatch({
        type: SET_VIDEOS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_VIDEOS,
        payload: []
      });
    });
};
export const getCategory = (category) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/categories/${category}`)
    .then((res) => {
      dispatch({
        type: SET_CATEGORY,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_CATEGORY,
        payload: []
      });
    });
};
// Get latest videos
export const getLatest = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/latest')
    .then((res) => {
      dispatch({
        type: SET_LATEST,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_LATEST,
        payload: []
      });
    });
};
// Get popular videos
export const getPopular = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/popular')
    .then((res) => {
      dispatch({
        type: SET_POPULAR,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_POPULAR,
        payload: []
      });
    });
};
// Search videos
export const searchVideo = (searchData) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post('/search', searchData)
    .then((res) => {
      dispatch({
        type: SET_SEARCH,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_SEARCH,
        payload: []
      });
    });
};
//
export const getVideo = (videoId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/video/${videoId}`)
    .then((res) => {
      dispatch({
        type: SET_VIDEO,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};
// Post a video
export const postVideo = (newVideo) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/video', newVideo)
    .then((res) => {
      dispatch({
        type: POST_VIDEO,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
// Send a message
export const postMessage = (newMessage) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/message', newMessage)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};
// Like a video
export const likeVideo = (videoId) => (dispatch) => {
  axios
    .get(`/video/${videoId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_VIDEO,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
// Unlike a video
export const unlikeVideo = (videoId) => (dispatch) => {
  axios
    .get(`/video/${videoId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_VIDEO,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
// Submit a comment
export const postComment = (videoId, commentData) => (dispatch) => {
  axios
    .post(`/video/${videoId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
export const deleteVideo = (videoId) => (dispatch) => {
  axios
    .delete(`/video/${videoId}`)
    .then(() => {
      dispatch({ type: DELETE_VIDEO, payload: videoId });
    })
    .catch((err) => console.log(err));
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

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
