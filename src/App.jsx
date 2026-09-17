//navigation bar across screens
import { useState } from 'react'

import {Container, Box, Button, Menu, MenuItem, useMediaQuery}  from '@mui/material';
import { AppBar, Toolbar, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';


import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import SeedBombs from './pages/SeedBombs';
import Events from './pages/Events';
import GetInvolved from './pages/GetInvolved';
import Press from './pages/Press';
import Donate from './pages/Donate';

import colors from './components/colorPalette'
import'./index.css'
import SeedBombLogo from './assets/logos/seed_bomb_logo.png';

function App() {

  const [currentPage, setCurrentPage] = useState("home"); //state for what page is the current page (defaults to home)


  const [anchorEl, setAnchorEl] = useState(null); //anchor for about us dropdown menu to control open and close
  const dropdownOpen = Boolean(anchorEl); //makes the previous anchor true or false


    // hambugrger menu
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null); //anchors hamburger menu to iconButton
  const mobileMenuOpen = Boolean(mobileAnchorEl);

    const theme = useTheme(); //hook that does styling
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); //triggers a render if the screen window size hits a certain threshold 


  const navLinks = [
    { key: "events", label: "Events" },
    { key: "gallery", label: "Gallery" },
    { key: "press", label: "Press" },
    { key: "involved", label: "Get Involved" },
  ];

  const dropDownLinks = [
    { key: "seedbombs", label: "What are Seed Bombs?" },
    { key: "about", label: "Our Team" },
  ];

  const isDropdownActive = dropDownLinks.some((link) => link.key === currentPage);


  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownSelect = (page) => {
    setCurrentPage(page);
    setAnchorEl(null);
  };

    const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMobileSelect = (page) => {
    setCurrentPage(page);
    setMobileAnchorEl(null);
  };

  return (
    <>
         <AppBar position="static" elevation={0} sx={{ ...styles.appBar, zIndex: 10, position: 'relative' }}>
      <Toolbar style={styles.toolbar}>
        <Container maxWidth="xl" sx={styles.toolbarInner}>

           {/* logo */}
          <Box sx={styles.logo} onClick={() => setCurrentPage("home")}>
            <Box
              component="img"
              src={SeedBombLogo}
              sx={{ width: 'auto', height: isMobile ? '80px' : '125px', borderRadius: '8%', display: 'block' }}
              />
          </Box>

          {isMobile ? (
            <>
              {/* mobile - hamburger and dropdown */}
              <IconButton onClick={handleMobileMenuOpen} sx={{ color: colors.white }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileAnchorEl}
                open={mobileMenuOpen}
                onClose={handleMobileMenuClose}
                slotProps={{
                  paper: {
                    sx: {
                      backgroundColor: colors.skyBlue,
                      borderRadius: '12px',
                    },
                  },
                }}
              >
                <MenuItem
                  selected={currentPage === "home"}
                  onClick={() => handleMobileSelect("home")}
                >
                  Home
                </MenuItem>
                {dropDownLinks.map((link) => (
                  <MenuItem
                    key={link.key}
                    selected={currentPage === link.key}
                    onClick={() => handleMobileSelect(link.key)}
                  >
                    {link.label}
                  </MenuItem>
                ))}
                {navLinks.map((link) => (
                  <MenuItem
                    key={link.key}
                    selected={currentPage === link.key}
                    onClick={() => handleMobileSelect(link.key)}
                  >
                    {link.label}
                  </MenuItem>
                ))}
                <MenuItem
                  component="a"
                  href="https://creative-visions.networkforgood.com/projects/260063-the-seed-bomb-project-healing-la-one-wildflower-at-a-time"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileMenuClose}
                >
                  Donate Now
                </MenuItem>
                <MenuItem
                  component="a"
                  href="https://www.instagram.com/theseedbombproject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileMenuClose}
                >
                  Instagram
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              {/* desktop: full link row */}
              <Stack direction="row" spacing={3}
              sx={{...styles.linkStack, alignItems: 'center',
              }}>
                  <Button onClick={() => setCurrentPage("home")}
                    sx={{
                      ...styles.navLinkButton,
                      textDecoration: currentPage === "home" ? "underline" : "none",
                    }}
                  >
                    Home
                  </Button>

                  <Button
                    onClick={handleDropdownOpen}
                    sx={{
                      ...styles.navLinkButton,
                      textDecoration: isDropdownActive ? "underline" : "none",
                    }}
                  >
                    About Us
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={dropdownOpen}
                    onClose={handleDropdownClose}
                    slotProps={{
                    paper: {
                      sx: {
                        backgroundColor: colors.skyBlue,
                        borderRadius: '12px',
                      },
                    },
                    }}
                  >
                    {dropDownLinks.map((link) => (
                      <MenuItem
                        key={link.key}
                        selected={currentPage === link.key}
                        onClick={() => handleDropdownSelect(link.key)}
                      >
                        {link.label}
                      </MenuItem>
                    ))}
                  </Menu>

                {navLinks.map((link) => (
                    <Button
                      key={link.key}
                      onClick={() => setCurrentPage(link.key)}
                      sx={{
                        ...styles.navLinkButton,
                        textDecoration: currentPage === link.key ? "underline" : "none",
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}

                <IconButton
                    component="a"
                    href="https://www.instagram.com/theseedbombproject/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    sx={{ color: colors.white }}
                >
                    <InstagramIcon />
                </IconButton>

                <Button
                sx={styles.donateButton}
                component="a"
                href="https://creative-visions.networkforgood.com/projects/260063-the-seed-bomb-project-healing-la-one-wildflower-at-a-time"
                target="_blank"
                rel="noopener noreferrer">
                    Donate Now
                  </Button>
              </Stack>
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>

    {/* render page content */}
            
    {currentPage === "home" && <Home />}
    {currentPage === "about" && <AboutUs />}
    {currentPage === "seedbombs" && <SeedBombs />}
    {currentPage === "events" && <Events />}
    {currentPage === "gallery" && <Gallery />}
    {currentPage === "press" && <Press />}
    {currentPage === "involved" && <GetInvolved />}
    {currentPage === "donate" && <Donate />}


    </>
  )
}

const styles = {
  // navigation bar
  appBar: {
    backgroundColor: colors.skyBlue,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
    toolbarInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 3,
  },
  logo: {
    fontWeight: 'bold',
    color: colors.white,
    cursor: 'pointer',
  },
 linkStack: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
// navigation buttons
  navLinkButton: {
    color: colors.white,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textTransform: 'none',
    textUnderlineOffset: '4px',
    minWidth: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  },
  donateButton: {
     backgroundColor: colors.orange,
    color: colors.white,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: '30px',
    minWidth: '150px',
    maxWidth: '150px',
    textTransform: 'none',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '10px',
    paddingBottom: '10px',
    '&:hover': {
      backgroundColor: colors.orange,
      opacity: 0.9,
    },
  },
};
export default App
