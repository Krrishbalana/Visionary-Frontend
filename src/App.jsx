import { Routes, Route } from "react-router-dom";
import "./App.css";

// Auth
import Login from "./pages/Login";
import Register from "./pages/Register";

// Channel Pages
import ChannelPlaylistPage from "./pages/ChannelPlaylistPage";
import ChannelPlaylistVideosPage from "./pages/ChannelPlaylistVideosPage";
import ChannelVideoListPage from "./pages/ChannelVideoListPage";
import ChannelTweetPage from "./pages/ChannelTweetPage";
import ChannelSubscribedPage from "./pages/ChannelSubscribedPage";
import VideoListingPage from "./pages/VideoListingPage"

// Upload
import UploadVideoForm from "./pages/UploadVideoFrom";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Channel */}
      
      <Route path="/" element={<VideoListingPage/>}/>
      <Route path="/channel/playlists" element={<ChannelPlaylistPage />} />
      <Route path="/channel/playlists/content" element={<ChannelPlaylistVideosPage />} />
      <Route path="/channel/videos" element={<ChannelVideoListPage />} />
      <Route path="/channel/videos/upload" element={<UploadVideoForm />} />
      <Route path="/channel/tweets" element={<ChannelTweetPage />} />
      <Route path="/channel/subscribed" element={<ChannelSubscribedPage />} />
    </Routes>
  );
}

export default App;
