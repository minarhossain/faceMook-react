import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { actions } from "../actions";
import { useProfile } from "../hooks/useProfile";
import ProfileInfo from "../profile/ProfileInfo";
import MyPosts from "../profile/MyPosts";

const ProfilePage = () => {
  const { state, dispatch } = useProfile();
  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        console.log(response.data);

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response?.data,
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: err.message,
        });
      }
    };
    fetchProfile();
  }, [api, auth?.user?.id, dispatch]);

  if (state?.loading) {
    return <div>Loading Data...</div>;
  }
  return (
    <>
      <ProfileInfo />
      <MyPosts />
    </>
  );
};

export default ProfilePage;
