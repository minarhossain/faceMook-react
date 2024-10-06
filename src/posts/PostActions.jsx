import React, { useState } from "react";
import like from "../assets/icons/like.svg";
import comment from "../assets/icons/comment.svg";
import share from "../assets/icons/share.svg";
import useAxios from "../hooks/useAxios";
import likeFillIcon from "../assets/icons/like-filled.svg";
import { useAuth } from "../hooks/useAuth";

const PostActions = ({ post, commentCount }) => {
  const { auth } = useAuth();
  const [liked, setLiked] = useState(post?.likes?.includes(auth?.user?.id));

  const { api } = useAxios();

  const handleLike = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
      );

      if (response.status === 200) {
        setLiked(true);
      }
    } catch (error) {
      console.error(error);
      setLiked(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      <button
        onClick={handleLike}
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
      >
        <img src={liked ? likeFillIcon : like} alt="Like" />
        {!liked && <span>Like</span>}
      </button>

      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={comment} alt="Comment" />
        <span>Comment({commentCount ?? 0})</span>
      </button>

      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={share} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostActions;
