import React, { useEffect, useReducer } from "react";
// import RegistrationForm from "../components/prac/RegistrationForm";
// import Header from "../components/common/Header";
// import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { initialState, postReducer } from "../reducers/PostReducer";
import useAxios from "../hooks/useAxios";
import PostList from "../posts/PostList";
import { actions } from "../actions";

const HomePage = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );
        console.log(response.data);
        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        console.error(e);
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    };
    fetchPost();
  }, [api]);

  if (state?.loading) {
    return <h1>We are Working...!!</h1>;
  }

  if (state?.error) {
    return <h1>Error occurs in {state?.error.message}</h1>;
  }

  return (
    <div>
      <PostList posts={state?.posts} />
    </div>
  );
};

export default HomePage;
