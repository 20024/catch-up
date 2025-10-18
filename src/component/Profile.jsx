import React from "react";
import PostCard from "../pages/PostCard";
import NormalHeader from "../component/Headers/NormalHeader";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaLink, 
  FaMapMarkerAlt, 
  FaBirthdayCake, 
  FaHeart 
} from "react-icons/fa";

function Profile({ user = {}, posts = [] }) {
  // Destructure user details with fallbacks
  const {
    avatar = "https://i.pravatar.cc/150?img=32",
    name = "Unnamed User",
    bio = "This user has no bio yet.",
    followers = 0,
    following = 0,
    education = "No education info",
    job = "No job info",
    website = null,
    location = "Unknown",
    dateOfBirth = "Not specified",
    relationship = "Not specified",
    socialLinks = [], // array of { name, url, icon }
  } = user;

  // Filter posts that contain photos
  const photoPosts = posts.filter((p) => p.type === "photo");

  return (
    <section className="min-h-screen bg-gray-50">
      <NormalHeader />

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white shadow rounded-lg p-6">
          <img
            src={avatar}
            alt={name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-gray-600 mt-1">{bio}</p>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 mt-4 text-gray-700">
              <div><span className="font-semibold">{posts.length}</span> Posts</div>
              <div><span className="font-semibold">{followers}</span> Followers</div>
              <div><span className="font-semibold">{following}</span> Following</div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">About the User</h3>
          <div className="flex flex-col gap-3 text-gray-700">
            <div className="flex items-center gap-2"><FaBirthdayCake /> {dateOfBirth}</div>
            <div className="flex items-center gap-2"><FaHeart /> {relationship}</div>
            <div className="flex items-center gap-2"><FaGraduationCap /> {education}</div>
            <div className="flex items-center gap-2"><FaBriefcase /> {job}</div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt /> {location}</div>
            {website && (
              <div className="flex items-center gap-2">
                <FaLink />{" "}
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {website}
                </a>
              </div>
            )}
            {/* Social links */}
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex items-center gap-2 hover:underline"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* User Photos Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Photos</h3>
          {photoPosts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {photoPosts.map((post) => (
                <img
                  key={post.id}
                  src={post.media || post.preview} // make sure posts have media field
                  alt={post.caption || "User photo"}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No posts yet.</p>
          )}
        </div>

        {/* User Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;
