import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostActions from "./PostActions";

const PostCard = ({ post }) => {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody poster={post?.image} content={post?.content} />
      <PostActions />
      <PostComments />
    </article>
  );
};

export default PostCard;
