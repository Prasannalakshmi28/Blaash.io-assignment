// src/App.js
import React, { useState, useEffect } from 'react';
import { getAllPlaylists, getFeeds } from './api';
import './App.css';

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [feedVideos, setFeedVideos] = useState([]);

  useEffect(() => {
    // Fetch all playlists on load
    const fetchPlaylists = async () => {
      const data = await getAllPlaylists();
      setPlaylists(data?.Playlists || []);
    };
    fetchPlaylists();
  }, []);

  const handlePlaylistClick = async (playlistId) => {
    const feeds = await getFeeds();
    setSelectedPlaylist(playlistId);
    setFeedVideos(feeds?.Feeds || []);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h3>Playlists</h3>
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id} onClick={() => handlePlaylistClick(playlist.id)}>
              <img src={playlist.thumbnailUrl} alt={playlist.name} />
              <p>{playlist.name}</p>
              <span>{playlist.videoCount} Videos</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="content">
        {selectedPlaylist ? (
          <div>
            <h3>Playlist Videos</h3>
            <ul>
              {feedVideos.map((video) => (
                <li key={video.id}>
                  <img src={video.thumbnailUrl} alt={video.title} />
                  <p>{video.title}</p>
                  <span>Duration: {video.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Select a playlist to view videos.</p>
        )}
      </div>
    </div>
  );
};

export default App;
