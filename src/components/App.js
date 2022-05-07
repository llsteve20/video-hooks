import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
   const [slectedVideo, setSelectedVideo] = useState(null);
   const [videos, search] = useVideos('dog');
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

        return(
            <div className="ui container">
                <SearchBar onFormSubmit={search} />
                <div className="ui grid" >
                    <div className="ui row" >
                        <div className="eleven wide column" >
                            <VideoDetail video = {slectedVideo} />
                        </div>
                        <div className="five wide column" >
                            <VideoList 
                                onSelect = {v => setSelectedVideo(v) }
                                videos = {videos} 
                            />
                        </div>
                    </div>
                </div>
               
                
            </div>
        );
}

export default App;