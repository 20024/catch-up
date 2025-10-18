import React, { useState } from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import NormalHeader from "../component/Headers/NormalHeader";
import LeftSidebar from "../component/Sidebar/LeftSidebar";
import RightSidebar from "../component/Sidebar/RightSidebar";
import MobileRightside from "../component/Sidebar/MobileRightside";
import FooterNav from "../component/FooterNav";

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
    {
      id: 2,
      userName: "Aarav Mehta",
      userAvatar: "https://i.pravatar.cc/150?img=12",
      time: "1 hour ago",
      type: "video",
      caption: "My travel vlog 🚀",
    },
    {
      id: 3,
      userName: "Isha Sharma",
      userAvatar: "https://i.pravatar.cc/150?img=15",
      time: "30 mins ago",
      type: "photo",
      caption: "Delicious food 🍕",
    },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <NormalHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-7xl mx-auto p-4">
        {/* Left Sidebar */}
        <div className="hidden md:block md:col-span-1">
          <LeftSidebar />
        </div>

        {/* Feed (main content) */}
        <div className="col-span-1 md:col-span-2 mt-1">
          <CreatePost onAddPost={handleAddPost} />
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDeletePost} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <RightSidebar />
        </div>

        {/* Mobile Right Side */}
        <div className="block lg:hidden">
          <MobileRightside />
        </div>
      </div>

      {/* Mobile Footer Navigation */}
      <FooterNav />
    </section>
  );
}

export default Feed;
