//post individual component
import React from "react";
import { postType } from "../types/types";
import Comments from "./Comments.tsx";

interface PostCardsProps {
  post: postType;
}
const PostCards: React.FC<PostCardsProps> = ({ post }) => {
  return (
    <>
      <div className="post-card-main">
        <div className="post-card">
          <div className="post-card-title">{post.title}</div>
          <img src={post.imgurl} alt="post" width={"100%"} />
        </div>
        <Comments postId={post} />
      </div>
    </>
  );
};

export default PostCards;
