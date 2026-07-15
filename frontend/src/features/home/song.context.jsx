import {createContext,useState} from 'react';

export const SongContext = createContext();

export const SongContextProvider = ({children})=>{

    const [song,setSong] = useState({
        "url": "https://ik.imagekit.io/m6kmcsvh3/project/moodly/songs/Coldplay_-_Yellow__mp3.pm__J0kxm7GQ3.mp3",
        "title": "Coldplay_-_Yellow_(mp3.pm).mp3",
        "mood": "Neutral",
    })

    const [loading,setLoading] = useState(false);

    return(
        <SongContext.Provider value = {{loading,setLoading,song,setSong}}>
            {children}
        </SongContext.Provider>

    )
}