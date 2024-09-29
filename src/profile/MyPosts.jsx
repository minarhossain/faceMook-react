import React from "react";
import { useProfile } from "../hooks/useProfile";
import PostList from "../posts/PostList";

const MyPosts = () => {
  const { state, dispatch } = useProfile();
  const posts = state?.posts;
  return (
    <div>
      <h1 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default MyPosts;
