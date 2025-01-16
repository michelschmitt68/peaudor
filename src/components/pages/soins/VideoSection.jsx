import React, { useState } from "react";
import ReactPlayer from "react-player";
import { InteractiveSection, InteractiveTitle, Separator } from "./SharedStyles";
import styled from "styled-components";


const VideoSection = ({ title, videoUrls = [] }) => {
    const [showVideos, setShowVideos] = useState(true);

    return (
        <InteractiveSection>
            <InteractiveTitle onClick={() => setShowVideos(!showVideos)}>
                {title}
            </InteractiveTitle>
            {showVideos && (
                <>
                    {videoUrls.length > 0 ? (
                        videoUrls.map((url, index) => (
                            <ResponsiveVideoContainer key={index}>
                                <ReactPlayer
                                    url={url}
                                    controls
                                    width="100%"
                                    height="auto"
                                    muted
                                />
                            </ResponsiveVideoContainer>
                        ))
                    ) : (
                        <p>Aucune vidéo disponible.</p>
                    )}
                </>
            )}
            <Separator />
        </InteractiveSection>
    );
};

export default VideoSection;

const ResponsiveVideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 1rem;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 40px 0;
  }
`;

