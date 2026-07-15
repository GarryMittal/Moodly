import "./home.scss";

import FaceExpression from "../../Expression/components/FaceExpression";
import Player from "../components/Player";
import { useSong } from "../hooks/useSong";

const Home = () => {

    const { handleGetSong } = useSong();

    return (
        <main className="home">

            <div className="hero">

                <h1>Moodly 🎵</h1>

                <p>
                    Discover music that matches your emotions using AI-powered
                    facial expression detection.
                </p>

            </div>

            <div className="content">

                <div className="camera-section">

                    <FaceExpression
                        onClick={(expression) =>
                            handleGetSong({ mood: expression })
                        }
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