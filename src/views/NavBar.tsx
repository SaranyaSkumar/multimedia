import React, { useState } from "react";
import {
  Grid,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Icon";
import styles from "../styles/NavBar.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 960px)");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navItems = [
    { id: 1, text: "Home", link: "#" },
    { id: 2, text: "Blog", link: "#" },
    { id: 3, text: "Contact Us", link: "#" },
  ];

  const navItemsDesktop = (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      spacing={12}
      sx={{ marginLeft: "auto" }}
    >
      <Grid item>
        <Link href="#home" sx={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
          Blog
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
          Contact Us
        </Link>
      </Grid>
    </Grid>
  );

  const navItemsMobile = (
    <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id}>
            <Link
              href={item.link}
              sx={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={styles.navbar}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: "20px", color: "white" }}
      >
        <Grid item md={6}>
          <Typography variant="h3" sx={{paddingLeft:6}} className={styles.logo}>VidSplash </Typography>
        </Grid>
        <Grid item md={6}>
          {isMobile ? (
            <IconButton
              sx={{ color: "white" }}
              aria-label="menu"
              onClick={toggleDrawer}
              className={isMobile ? styles.menuButton : styles.hideOnMobile}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            navItemsDesktop
          )}

          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
            {navItemsMobile}
          </Drawer>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
