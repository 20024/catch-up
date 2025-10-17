import React, { useState } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      userName: "Shreya Sarkar",
      userAvatar: "https://i.pravatar.cc/150?img=32",
      time: "2 hours ago",
      type: "photo",
      caption: "Beautiful sunset 🌅",
    },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="mt-10">
      <CreatePost onAddPost={handleAddPost} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={handleDeletePost} />
      ))}
    </div>
  );
}

export default Feed;
