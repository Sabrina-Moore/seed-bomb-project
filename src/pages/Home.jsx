import React from 'react';
import { useEffect, useState } from 'react'

import {Container, Box, Typography, Button, Stack}  from '@mui/material';

import colors from '../components/colorPalette'
import '../index.css'

import WaveDivider from '../components/WaveDivider';
import map from '../assets/map-placeholder.png';


//remove once engine is made
const placeholderPins = [
    { id: 1, top: '22%', left: '35%', label: 'Pacific Palisades' },
    { id: 2, top: '30%', left: '48%', label: 'Altadena' },
    { id: 3, top: '45%', left: '40%', label: 'Downtown LA' },
    { id: 4, top: '55%', left: '30%', label: 'Culver City' },
    { id: 5, top: '38%', left: '60%', label: 'Pasadena' },
    { id: 6, top: '65%', left: '52%', label: 'Long Beach' },
    { id: 7, top: '18%', left: '55%', label: 'Glendale' },
    { id: 8, top: '60%', left: '68%', label: 'Anaheim' },
];


export default function Home () {
    
    //remove once engine is made
    function MapEnginePlaceholder() {
    
        return (
        <Box style={styles.mapPlaceholder}>
            <Typography style={styles.mapPlaceholderLabel}>
                [ Map Engine Placeholder — Southern California ]
            </Typography>

            {placeholderPins.map((pin) => (
                <Box
                    key={pin.id}
                    style={{
                        ...styles.mapPin,
                        top: pin.top,
                        left: pin.left,
                    }}
                    title={pin.label}
                >
                    <Box style={styles.mapPinDot} />
                </Box>
            ))}

            <Box style={styles.mapLegend}>
                <Box style={styles.mapLegendDot} />
                <Typography style={styles.mapLegendText}>
                    Seed bomb planted
                </Typography>
            </Box>
        </Box>
    );
    }




    return(
    <>
        <Box style={styles.coverImage}>
            {/* image background */}
            <Typography style={styles.coverTitle}> 
                The Seed Bomb Project
            </Typography>
        </Box>

          {/* swirly wave divider */}
        <WaveDivider fill={colors.orange} />

            {/* page content section */}

            {/* mission statement */}
            <Box style={styles.missionSection}>
                <Typography style={styles.missionTitle}>
                    Our Mission Is Simple:
                </Typography>
                <Typography style={styles.Subtitle}>
                    Bring Back Beauty, Bring Back Nature, Bring Back Hope
                </Typography>

                <Typography style={styles.Text}>
                    Rummy Goodyear was 14 years old when he lost his home in the LA Wildfires on January 7th, 2025. Seeking a way to channel his grief into something positive for his community and for the entire city, he recruited friends and peers to help make seed bombs, balls of native wildflower seeds, clay, and compost to share and spread in fire-ravaged neighborhoods. In its first six months, the Seed Bomb Project has distributed more than 3000 seed bombs to stakeholders from Altadena to Pacific Palisades, healing LA one wildflower at a time.
                </Typography>

                <Typography style={styles.Text}>
                    Climate disasters take a toll on the physical and mental health of those who experience them, but they also provide powerful opportunities for growth and change. Our work is hands-on, heart forward, youth-led, and fun, embodying the natural resilience of the native plant varieties we work with. 
                </Typography>
                <Typography style={styles.Text}>
                    Help us turned cleared lots and charred parkways into wildflower meadows. 
                </Typography >
            </Box>

             <WaveDivider fill={colors.orange} />

            <Box style={styles.engineSection}>
                <Typography style={styles.Subtitle}>
                    Track every Seed Bomb planted across Southern California — and add your own pin to the map.
                </Typography>

                <Typography style={styles.TextDark}>
                    Every dot below is a seed bomb planted by someone just like you. Explore the map, see how your neighborhood is doing, and add your own pin in seconds.
                </Typography>
            {/* engine */}

                <MapEnginePlaceholder />

                <Button variant="contained" sx={styles.bombButton}>
                    Plant your Seed Bomb
                </Button>

                {/* data analytics - make this more dynamic */}
            <Stack direction="row" spacing={4} sx={{justifyContent: "center"}} style={styles.statsRow}>
                <Box>
                    <Typography style={styles.statNumber}>3,140</Typography>
                    <Typography style={styles.statLabel}>Seed Bombs Planted</Typography>
                </Box>
                <Box>
                    <Typography style={styles.statNumber}>62</Typography>
                    <Typography style={styles.statLabel}>Neighborhoods Reached</Typography>
                </Box>
                <Box>
                    <Typography style={styles.statNumber}>800+</Typography>
                    <Typography style={styles.statLabel}>Volunteers Involved</Typography>
                </Box>
            </Stack>

            </Box>


          {/* swirly wave divider engine (orange) -> restoration (green) */}
            <WaveDivider fill={colors.green} />

            {/* hands on restoration */}
            <Box style={styles.restorationSection}>
                <Typography style={styles.sectionTitle}>
                    Hands-on Restoration
                </Typography>
                <Typography style={styles.Text}>
                    More than 37,000 acres burned in the Palisades and Eaton Fires, including more than sixteen thousand structures. The Seed Bomb Project engages young people to take an active role in healing their communities. 
                </Typography>
                
                {/* add images - make bigger */}
                <Stack direction="row" spacing={3} sx={{alignItems:"center"}} >
                    <Box>
                        <Typography style={styles.Subtitle}>
                            Healing the Land
                        </Typography>
                        <Typography style={styles.Text}>
                            Introducing native seeds in the aftermath of a fire improves soil health and stability, supports biodiversity, speeds wildfire recovery, remediates toxicity, and strengthens land resilience to climate disasters.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography style={styles.Subtitle}>
                            Healing Ourselves
                        </Typography>
                        <Typography style={styles.Text}>
                            The Seed Bomb project brings back together communities that have been scatted by natural disasters, creating new opportunities for bonding, healing, and growth, all in the service of doing something hands-on and positive for our beloved neighborhoods. 
                        </Typography>
                    </Box>
                    <Box>
                        <Typography style={styles.Subtitle}>
                            Healing LA
                        </Typography>
                        <Typography style={styles.Text}>
                            We seek connection across all wildfire-affected zip codes of Los Angeles, finding affinity, partnership, and common cause with communities throughout the region.
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            {/* swirly wave divider restoration (green) -> Native Seeds (blue) */}
            <WaveDivider fill={colors.skyBlue} />

            {/* Why native seeds? */}
            <Box style={styles.nativeSeedsSection}>
                <Typography style={styles.sectionTitle}>
                    Why Native Seeds?
                </Typography>
                <Typography style={styles.Caption}>
                    “These seeds have adapted to thrive in the aftermath of wildfires.They actually grow better when challenged. They embody resilience.”— Rummy
                </Typography>
                <Typography style={styles.Text}>
                    California poppies, sunflowers, yarrow, evening primrose. . . these are the “fire-followers,” amazing plants that thrive in the aftermath of a fire. These drought-tolerant plants stabilize and detoxify the soil, create habitat and food for birds and bees, and prevent invasive plants from taking over and presenting new fire hazards. They are iconic and beautiful and they will help prevent future disasters!
                </Typography>
            </Box>


            {/* native seeds (sky blue) -> follow us (white page bg) */}
            <WaveDivider fill={colors.bg || '#fff'} />

            {/* Healing statement follow us */}
             <Box style={styles.followUsSection}>
                {/* images */}
            </Box>

            {/* Partner with us */}
            <Box style={styles.partnerSection}>
                {/* images */}
                
                <Button sx={styles.partnerButton}>
                    Partner With Us
                </Button>
            </Box>

             {/* footnote */}
    <WaveDivider fill={colors.skyBlue} />

    <Box style={styles.footnote}>

    </Box>

    </>

    );
}


const styles = {
//sections
missionSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.orange,
    paddingBottom: '100px', //text space
    textAlign: 'center',
},
engineSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.orange,
    paddingBottom: '100px', //text space
    textAlign: 'center',
},
restorationSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px', //color
    backgroundColor: colors.green,
    paddingBottom: '100px', //text space
    textAlign: 'center',
},
nativeSeedsSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.skyBlue,
    paddingBottom: '100px',
    textAlign: 'center',
},
followUsSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.white,
    paddingBottom: '100px', //text space
    textAlign: 'center',
},
partnerSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.white,
    paddingBottom: '100px', //text space
    textAlign: 'center',
},
footnote: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.skyBlue,
    paddingBottom: '100px', //text space
    textAlign: 'center',
},

//images
coverImage: {
    position: 'relative',
    minHeight: '500px',
    backgroundImage: 'url(/hero-image.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '60px',
},
engineImage: {
    position: 'relative',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '60px',
},
mapImg: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    height: 'auto',          
    borderRadius: '12px',     
},

//buttons
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
partnerButton: {
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
BombButton: {
    backgroundColor: colors.green,
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
        backgroundColor: colors.green,
        opacity: 0.9,
    },
},

//font
coverTitle: {
    color: colors.white,
    fontFamily: 'var(--heading)', 
    fontWeight: 900,
    fontStyle: 'italic',
    fontSize: '50px',
    textAlign: 'center',
    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
},
missionTitle: {
    color: colors.white,
    fontFamily: 'var(--heading)', 
    fontStyle: 'italic',
    fontWeight: 900,
    fontSize: '40px',
    paddingTop: '10px',
    paddingBottom: '10px',
},
sectionTitle: {
    color: colors.white,
    fontFamily: 'var(--sans)', 
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: '30px',
    paddingTop: '10px',
    paddingBottom: '10px',
},  
sectionTitleDark: {
    color: colors.navyBlue,
    fontFamily: 'var(--sans)', 
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: '30px',
    paddingTop: '10px',
    paddingBottom: '10px',
},  
sectionTitleOrange: {
    color: colors.darkOrange,
    fontFamily: 'var(--sans)', 
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: '30px',
    paddingTop: '10px',
    paddingBottom: '10px',
},  
Subtitle: {
    color: colors.white,
    fontFamily: 'var(--sans)', 
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: '25px',
    paddingTop: '10px',
    paddingBottom: '10px',
},
SubtitleDark: {
    color: colors.navyBlue,
    fontFamily: 'var(--sans)', 
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: '25px',
    paddingTop: '10px',
    paddingBottom: '10px',
},
Caption: {
    color: colors.white,
    fontFamily: 'var(--sans)', 
    fontStyle: 'italic',
    fontSize: '20px',
    paddingTop: '10px',
},
Text: {
    color: colors.white,
    fontFamily: 'var(--sans)', 
    fontSize: '18px',
    paddingTop: '10px',
    paddingBottom: '10px',
},
TextOrange: {
    color: colors.darkOrange,
    fontFamily: 'var(--sans)',
    fontSize: '18px',
    paddingTop: '10px',
    paddingBottom: '10px',
},
TextGreen: {
    color: colors.green,
    fontFamily: 'var(--sans)',
    fontSize: '18px',
    paddingTop: '10px',
    paddingBottom: '10px',
},
TextDark: {
    color: colors.navyBlue,
    fontFamily: 'var(--sans)',
    fontSize: '18px',
    paddingTop: '10px',
    paddingBottom: '10px',
},


//map engine
mapPlaceholder: {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    height: '420px',
    margin: '32px auto',
    backgroundColor: colors.white,
    border: `3px dashed ${colors.white}`,
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
},
mapPlaceholderLabel: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#c7c7c7',
    fontFamily: 'var(--sans)',
    fontWeight: 700,
    fontSize: '18px',
    textAlign: 'center',
    pointerEvents: 'none',
},
mapPin: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
},
mapPinDot: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: colors.orange,
    border: `2px solid ${colors.white}`,
    boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
},
mapLegend: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: '6px 12px',
    borderRadius: '20px',
},
mapLegendDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: colors.orange,
},
mapLegendText: {
    fontFamily: 'var(--sans)',
    fontSize: '13px',
    color: '#333',
},

//stats and analytics
statsRow: {
    marginTop: '24px',
    marginBottom: '32px',
},
statNumber: {
    color: colors.white,
    fontFamily: 'var(--heading)',
    fontWeight: 900,
    fontSize: '36px',
},
statLabel: {
    color: colors.white,
    fontFamily: 'var(--sans)',
    fontSize: '14px',
},




};



