import { useEffect, useState } from 'react'
import React from 'react';

import {Container, Box, Typography, Button, Menu, MenuItem}  from '@mui/material';

import { AppBar, Toolbar, Stack } from '@mui/material';


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

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const [anchorEl, setAnchorEl] = useState(null);
  const dropdownOpen = Boolean(anchorEl);


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

  return (
    <>
     <AppBar position="static">
      <Toolbar style={styles.toolbar}>
        <Container maxWidth="xl" sx={styles.toolbarInner}> 
          {/* logo */}
           {/* logo */}
          <Box sx={styles.logo} onClick={() => setCurrentPage("home")}>
            Placeholder Logo
          </Box>
            {/* pages */}
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

              {/* drop down button */}
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

            <Button sx={styles.donateButton} onClick={() => setCurrentPage("donate")}>
                Donate Now
              </Button>
          </Stack>
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
    boxshadow: 'none',
    padding: '8px',
  },
  toolbar: {
    backgroundColor: colors.skyBlue,
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
