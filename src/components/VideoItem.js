import './VideoItem.css';
import React from "react";

const VideoItem = ({video, onSelect}) => {
    return (
        <div className="item video-item" onClick={() => onSelect(video) } >
            <img 
                className="ui image" 
                alt= {video.snippet.title} 
                src = {video.snippet.thumbnails.medium.url} 
            />
            <div className="content" >
                <div className="header" >{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;