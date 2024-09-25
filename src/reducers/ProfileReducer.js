import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    // Start fetching data
    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
        error: null, // reset error on new fetch
      };
    }

    // Data fetched successfully
    case actions.profile.DATA_FETCHED: {
      if (!action.data) {
        return {
          ...state,
          loading: false,
          error: "Data not provided",
        };
      }
      return {
        ...state,
        loading: false,
        user: action.data.user || null,
        posts: action.data.posts || [],
      };
    }

    // Fetch error handling
    case actions.profile.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    // User data edited
    case actions.profile.USER_DATA_EDITED: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.data, // merge edited fields with existing user data
        },
      };
    }

    // Profile image updated
    case actions.profile.IMAGE_UPDATED: {
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.data.avatar, // update user's image field
        },
      };
    }

    // Default case
    default:
      return state; // ensure the state is returned
  }
};

export { initialState, profileReducer };
