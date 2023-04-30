import { Box, Button, Grid, Typography } from "@mui/material";
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <div>
     
      <Box className={styles.footer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0e2a10" fill-opacity="1" d="M0,0L40,26.7C80,53,160,107,240,133.3C320,160,400,160,480,144C560,128,640,96,720,101.3C800,107,880,149,960,144C1040,139,1120,85,1200,85.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      
      </Box>
    </div>
  );
}
