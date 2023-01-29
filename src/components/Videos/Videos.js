import React from "react";
import "./videos.css";

function Videos() {
  let video = [];
  return (
    <div>
      <div className="video_container">
        {video.map((e, i) => (
          <div className="video_content">
            <div className="video_content_inner">
              <iframe
                className="video_img"
                src={e.source}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video_content_title">{e.title}</div>
              {/* <div className="video_content_text">{e.content}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
