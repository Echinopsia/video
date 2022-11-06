import {
  SET_VIDEOS,
  SET_LATEST,
  SET_SEARCH,
  SET_POPULAR,
  LIKE_VIDEO,
  UNLIKE_VIDEO,
  LOADING_DATA,
  DELETE_VIDEO,
  POST_VIDEO,
  SET_VIDEO,
  SUBMIT_COMMENT,
  SET_CATEGORY
} from '../types';

const initialState = {
  videos: [],
  latest: [],
  popular: [],
  results: [],
  category:[],
  video: {},
  loading: false
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      };
      case SET_CATEGORY:
      return{
        ...state,
        category: action.payload,
        loading: false,
      };
      case SET_LATEST:
      return {
        ...state,
        latest: action.payload,
        loading: false
      };
      case SET_POPULAR:
      return {
        ...state,
        popular: action.payload,
        loading: false
      };
      case SET_SEARCH:
      return {
        ...state,
        results: action.payload,
        loading: false
      };
    case SET_VIDEO:
      return {
        ...state,
        video: action.payload
      };
    case LIKE_VIDEO:
    case UNLIKE_VIDEO:
      let index = state.videos.findIndex(
        (video) => video.videoId === action.payload.videoId
      );
      state.videos[index] = action.payload;

      if (state.video.videoId === action.payload.videoId) {
       let temp = state.video.comments;
        state.video = action.payload;
        state.video.comments = temp;
      }
      return {
        ...state
      };
    case DELETE_VIDEO:
      index = state.videos.findIndex(
        (video) => video.videoId === action.payload
      );
      state.videos.splice(index, 1);
      return {
        ...state
      };
    case POST_VIDEO:
      return {
        ...state,
        videos: [action.payload, ...state.videos]
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        video: {
          ...state.video,
          comments: [action.payload, ...state.video.comments]
        }
      };
    default:
      return state;
  }
}
