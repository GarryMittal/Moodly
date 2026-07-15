import "./home.scss";

import FaceExpression from "../../Expression/components/FaceExpression";
import Player from "../components/Player";
import { useSong } from "../hooks/useSong";
import { useAuth } from "../../auth/hooks/useAuth";
const Home = () => {
  const { handleGetSong } = useSong();
  const { user, handleLogout } = useAuth();

  return (
    <main className="home">
      <nav className="navbar">
        <h1>Moodly 🎵</h1>

        <div className="nav-right">
          <span>Hello, {user?.username}</span>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="hero">
        <h2>Your Emotion. Your Music.</h2>

        <p>
          AI detects your facial expression and instantly recommends the perfect
          song.
        </p>
      </div>

      <div className="content">
        <div className="camera-section">
          <FaceExpression
            onClick={(expression) => handleGetSong({ mood: expression })}
          />
        </div>

        <div className="player-section">
          <Player />
        </div>
      </div>
    </main>
  );
};

export default Home;
