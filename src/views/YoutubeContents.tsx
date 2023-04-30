import React from "react";
import { Grid, Typography,Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import VideoCard from "./VideoCard";
import videoData from "../data/videos.json";
import styles from "../styles/Services.module.css";

const YoutubeContents = () => {
  const StyledTypography = styled(Typography)({
    fontFamily: "'Merienda', cursive",
    // add more styles as needed
  });

  return (
    <div className={styles.services}>
    <Box sx={{ m: 7 }}>
      <StyledTypography variant="h4" gutterBottom>
        👉🏻Services
      </StyledTypography>
      <StyledTypography variant="body1" gutterBottom>
        Explore Our Engaging Video Gallery 🌟
      </StyledTypography>
    </Box>
    <Grid>
        <Grid container justifyContent="center" spacing={3}>
          {videoData.map((video) => (
            <Grid item key={video.id} xs={12} md={4}>
              <VideoCard
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
                spacing={5}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default YoutubeContents;
