import { useRef } from "react";
import { useProfile } from "../hooks/useProfile";
import useAxios from "../hooks/useAxios";
import editIcon from "../assets/icons/edit.svg";
import { actions } from "../actions";

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploadRef = useRef();

  const handleImageUpload = () => {
    fileUploadRef.current.click();
  };

  const updateImageDisplay = async (e) => {
    const file = e.target.files[0];
    if (!file) return; // if no file selected, do nothing

    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: { avatar: response.data.avatar },
        });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-h-[180px] max-w-[180px] rounded-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt={state?.user?.firstName}
      />

      <form>
        <button
          type="button"
          onClick={handleImageUpload}
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
          <img src={editIcon} alt="Edit" />
        </button>
        <input
          type="file"
          ref={fileUploadRef}
          hidden
          onChange={updateImageDisplay}
        />
      </form>
    </div>
  );
};

export default ProfileImage;
