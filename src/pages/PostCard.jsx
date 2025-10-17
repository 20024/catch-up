import React, { useState } from "react";
import {
  FaEllipsisH,
  FaBookmark,
  FaTrashAlt,
  FaHeart,
  FaComment,
  FaShareAlt,
} from "react-icons/fa";

function PostCard({ post, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Handle add comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setComments([...comments, comment]);
    setComment("");
  };

  // Handle share
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 Post link copied to clipboard!");
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-3">
          <img
            src={post.userAvatar}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{post.userName}</h4>
            <p className="text-sm text-gray-500">{post.time}</p>
          </div>
        </div>

        {/* 3-dot Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaEllipsisH />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
              <button className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100">
                <FaBookmark className="mr-2 text-gray-600" /> Save Post
              </button>
              <button
                onClick={() => onDelete(post.id)}
                className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
              >
                <FaTrashAlt className="mr-2" /> Delete Post
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Post content */}
      {post.caption && <p className="text-gray-700 mb-3">{post.caption}</p>}

      {post.type === "photo" && (
        <img
          src={post.media}
          alt="Post"
          className="w-full rounded-lg object-cover"
        />
      )}

      {post.type === "video" && (
        <video controls className="w-full rounded-lg" src={post.media}></video>
      )}

      {/* Like, Comment, Share section */}
      <div className="flex justify-between mt-4 text-gray-600">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center space-x-2 ${
            liked ? "text-red-500" : "hover:text-red-400"
          }`}
        >
          <FaHeart />
          <span>{liked ? "Liked" : "Like"}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 hover:text-blue-500"
        >
          <FaComment />
          <span>Comment</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center space-x-2 hover:text-green-500"
        >
          <FaShareAlt />
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 border-t pt-3">
          <form onSubmit={handleAddComment} className="flex items-center">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-grow border rounded-full px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              type="submit"
              className="ml-2 text-sm bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600"
            >
              Post
            </button>
          </form>

          <div className="mt-3 space-y-2">
            {comments.map((cmt, i) => (
              <div
                key={i}
                className="bg-gray-100 text-left px-3 py-2 rounded-lg text-sm text-gray-700"
              >
                <span className="font-semibold">You:</span> {cmt}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCard;
