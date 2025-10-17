import React, { useState } from "react";
import { FaPhotoVideo, FaTimes } from "react-icons/fa";

function CreatePost({ onAddPost }) {
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(null);
  const [type, setType] = useState(null);
  const [caption, setCaption] = useState("");
  const [success, setSuccess] = useState(false); // success message state

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.startsWith("video") ? "video" : "photo";
    setType(fileType);
    setMedia(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleRemoveMedia = () => {
    setMedia(null);
    setPreview(null);
    setType(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create post object
    const newPost = {
      id: Date.now(),
      userName: "Shreya Sarkar",
      userAvatar: "https://i.pravatar.cc/150?img=32",
      time: "Just now",
      caption,
      media: preview,
      type,
    };

    // Pass post to parent Feed component
    if (onAddPost) onAddPost(newPost);

    // Reset form
    setCaption("");
    setMedia(null);
    setPreview(null);
    setType(null);

    // Show temporary success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // hide after 3 sec
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 max-w-md mx-auto relative">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Create a Post</h3>

      {success && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          Post Successfully ✅
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Caption input */}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-300 outline-none resize-none"
          rows="3"
        />

        {/* Add media section */}
        <div className="mb-4">
          <label
            htmlFor="media-upload"
            className="flex items-center justify-center border-2 border-dashed border-blue-400 rounded-lg p-4 text-blue-600 cursor-pointer hover:bg-blue-50 transition"
          >
            <FaPhotoVideo className="mr-2 text-2xl" />
            <span className="font-medium">
              {preview ? "Change Media" : "Add Photo / Video"}
            </span>
            <input
              id="media-upload"
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* Preview */}
          {preview && (
            <div className="mt-4 relative">
              {type === "photo" ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full rounded-lg shadow-md"
                />
              ) : (
                <video
                  controls
                  src={preview}
                  className="w-full rounded-lg shadow-md"
                />
              )}

              <button
                type="button"
                onClick={handleRemoveMedia}
                className="absolute top-2 right-2 bg-white rounded-full shadow p-2 text-red-500 hover:bg-red-100"
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
