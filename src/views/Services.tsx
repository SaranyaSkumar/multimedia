import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Services.module.css";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const StyledTypography = styled(Typography)({
  fontFamily: "'Merienda', cursive",
  // add more styles as needed
});

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowWidth;
};

const Services = () => {
  const [videos, setVideos] = useState([]);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    // Fetch the videos from the assets folder
    function fetchVideos() {
      const videosArray: any = [];
      // Assuming you have an array of video file names in your public/assets folder
      const videoFiles = [
        "1.mp4",
        "2.mp4",
        "3.mp4",
        "4.mp4",
        "5.mp4",
        "6.mp4",
        "7.mp4",
      ];

      videoFiles.forEach((videoFile) => {
        videosArray.push(`/assets/${videoFile}`);
      });

      setVideos(videosArray);
    }

    fetchVideos();
  }, []);

  const groupVideos = (videos: any, itemsPerGroup: number) => {
    const groupedVideos = [];
    for (let i = 0; i < videos.length; i += itemsPerGroup) {
      groupedVideos.push(videos.slice(i, i + itemsPerGroup));
    }
    return groupedVideos;
  };

  let itemsPerGroup = 3;
  if (typeof window !== "undefined" && window?.innerWidth <= 768) {
    itemsPerGroup = 2;
  }
  if (typeof window !== "undefined" && window?.innerWidth <= 480) {
    itemsPerGroup = 1;
  }
  const groupedVideos = groupVideos(videos, itemsPerGroup);

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
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={false}
        onClickItem={(itemIndex) => {
          // Add the logic to handle the click event on each video
        }}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className={styles.arrowPrev}
            >
              {"<"}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className={styles.arrowNext}
            >
              {">"}
            </button>
          )
        }
      >
        {groupedVideos.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.slide}>
            {group.map((video: any, index: any) => (
              <div key={index} className={styles.videoContainer}>
                <video
                  src={video}
                  className={`${styles.video} ${styles.carouselVideo}`}
                  onMouseOver={(e: React.MouseEvent<HTMLVideoElement>) =>
                    e.currentTarget.play()
                  }
                  onMouseOut={(e: React.MouseEvent<HTMLVideoElement>) =>
                    e.currentTarget.pause()
                  }
                  onClick={(e: React.MouseEvent<HTMLVideoElement>) =>
                    e.currentTarget.pause()
                  }
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Services;
