import React, { useRef } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  spacing?: number;
}

const VideoCard = ({
  title,
  description,
  thumbnail,
  videoUrl,
  spacing = 0,
}: VideoCardProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleMouseEnter = () => {
    if (iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = `${src}&autoplay=1`;
    }
  };

  const handleMouseLeave = () => {
    if (iframeRef.current) {
      const src = iframeRef.current.src.replace("&autoplay=1", "");
      iframeRef.current.src = src;
    }
  };

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoUrl}?enablejsapi=1`;

  return (
    <Card sx={{ maxWidth: 460, margin: `${spacing}px` }}>
      <CardActionArea
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="iframe"
          ref={iframeRef}
          height="250"
          src={youtubeEmbedUrl}
          title={title}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">*</Typography>
          {/* <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            {description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
