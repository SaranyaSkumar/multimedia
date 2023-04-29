import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import VideoCard from "./VideoCard";
import videoData from "../data/videos.json";

const Services = () => {
  const StyledCarousel = styled(Carousel)({
    marginTop: "20px",
    marginBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  });
  const StyledTypography = styled(Typography)({
    fontFamily: "'Merienda', cursive",
    // add more styles as needed
  });
  

  // Split the videoData into chunks of 3
  const videoChunks: Array<Array<any>> = videoData.reduce(
    (resultArray: Array<Array<any>>, item: any, index: number) => {
      const chunkIndex: number = Math.floor(index / 3);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );

  return (
    <div style={{ width: "80%", margin: "5rem auto", textAlign: "center" }}>
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={3}>
          <StyledTypography variant="h4" gutterBottom>
            🎥 Our Services
          </StyledTypography>
        </Grid>
        <Grid item xs={12} md={9} sx={{ textAlign: "center" }}>
          <StyledCarousel
            navButtonsProps={{
              style: {
                backgroundColor: "transparent",
                color: "#333",
                borderRadius: 0,
                padding: "20px",
                margin: "0",
                top: "50%",
                transform: "translateY(-50%)",
              },
            }}
            PrevIcon={<ChevronLeft fontSize="large" />}
            NextIcon={<ChevronRight fontSize="large" />}
            animation="slide"
            indicatorIconButtonProps={{
              style: {
                backgroundColor: "#333",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                margin: "0 4px",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                backgroundColor: "#f50057",
              },
            }}
          >
            {/* Map over the chunks of 3 videos to create carousel slides */}
            {videoChunks.map((videoChunk, index) => (
              <Grid container justifyContent="center" key={index}>
                {videoChunk.map((video) => (
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
            ))}
          </StyledCarousel>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
