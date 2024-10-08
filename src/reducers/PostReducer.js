import { actions } from "../actions/index.js";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case actions.post.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case actions.post.DATA_FETCHED: {
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
        posts: action.data, // actions.data
      };
    }

    case actions.post.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error, //actions.error
      };
    }
    // Handling data create
    case actions.post.DATA_CREATED: {
      return {
        ...state,
        loading: false,
        // error: action.error,
        posts: [...state.posts, action.data], // actions.data
      };
    }
    // Handling data edit
    case actions.post.DATA_EDITED: {
      const updatedPosts = state.posts.map((post) =>
        post.id === action.data.id ? { ...post, ...action.data } : post
      );
      return {
        ...state,
        posts: updatedPosts,
      };
    }

    // Handling post deletion
    case actions.post.POST_DELETED: {
      const filteredPosts = state.posts.filter((post) => post.id !== action.id);
      return {
        ...state,
        posts: filteredPosts,
      };
    }

    // // Handling post liked
    // case actions.post.POST_LIKED: {
    //   const updatedPosts = state.posts.map((post) =>
    //     post.id === action.id ? { ...post, likes: post.likes + 1 } : post
    //   );
    //   return {
    //     ...state,
    //     posts: updatedPosts,
    //   };
    // }

    // // Handling post commented
    // case actions.post.POST_COMMENTED: {
    //   const updatedPosts = state.posts.map((post) =>
    //     post.id === action.id
    //       ? { ...post, comments: [...post.comments, action.comment] }
    //       : post
    //   );
    //   return {
    //     ...state,
    //     posts: updatedPosts,
    //   };
    // }

    default: {
      return state;
    }
  }
};

export { initialState, postReducer };
