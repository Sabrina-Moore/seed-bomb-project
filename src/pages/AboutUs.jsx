//our team

//should this connect to socials? Make it look more poppy

import { useEffect, useState } from 'react'
import React from 'react';

import {Container, Stack, Box, Grid, Typography, Button}  from '@mui/material';

import colors from '../components/colorPalette'
import '../index.css'
import WaveDivider from '../components/WaveDivider';


const OurTeam = [
    {
        id: 1,
        name: "placeholder", 
        role: "role",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempore in aut ipsum et occaecat placeat pariatur ipsum qui mollitia enim duis consectetur est occaecat id dolore voluptatum provident ut consequat eligendi corrupti qui cum cumque nihil tempore irure autem assumenda nisi eiusmod omnis placeat tempor minus nulla dolor tempor.", 
    }, 
    {
       id: 2,
        name: "placeholder", 
        role: "role",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempore in aut ipsum et occaecat placeat pariatur ipsum qui mollitia enim duis consectetur est occaecat id dolore voluptatum provident ut consequat eligendi corrupti qui cum cumque nihil tempore irure autem assumenda nisi eiusmod omnis placeat tempor minus nulla dolor tempor.", 
    }, 
    {
        id: 3,
        name: "placeholder", 
        role: "role",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempore in aut ipsum et occaecat placeat pariatur ipsum qui mollitia enim duis consectetur est occaecat id dolore voluptatum provident ut consequat eligendi corrupti qui cum cumque nihil tempore irure autem assumenda nisi eiusmod omnis placeat tempor minus nulla dolor tempor.", 
    }, 
    {
        id: 4,
        name: "placeholder", 
        role: "role",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempore in aut ipsum et occaecat placeat pariatur ipsum qui mollitia enim duis consectetur est occaecat id dolore voluptatum provident ut consequat eligendi corrupti qui cum cumque nihil tempore irure autem assumenda nisi eiusmod omnis placeat tempor minus nulla dolor tempor.", 
    }, 

]

const itemsPerRow = 3;

export default function AboutUs () {


    return(
<>
   <Box style={styles.pageSection}>

        <Typography style={styles.coverTitle}>
        Our team
        </Typography>
    
        <Stack direction="column" spacing={1} sx={{alignItems:"center"}}>

            <Box 
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                xs: '1fr', // 1 per row on mobile
                sm: `repeat(${itemsPerRow}, 1fr)`,
                },
                gap: 5,
                maxWidth: '1200px',
                mx: 'auto',
                p: 2,
            }}>

            {OurTeam.map((member, index) => (
            <Box 
            style={styles.teamCards}
            key={member.id || index} 
            sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}
            >
            <Typography style={styles.sectionTitleDark}>{member.name}</Typography>
            {/* image here */}
            <Typography style={styles.SubtitleDark}>{member.role}</Typography>
            <Typography style={styles.TextDark}>{member.description}</Typography>
            </Box>
            ))}
            </Box>    
        </Stack>
    </Box>

    <WaveDivider fill={colors.skyBlue} />
        
    <Box style={styles.footnote}>

    </Box>
</>
);
}


const styles = {
//sections
pageSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.darkOrange,
    marginTop: '-2px',
    padding: '60px 24px',
    textAlign: 'center',
},
teamCards: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.white,
    marginTop: '-2px',
    padding: '60px 24px',
    textAlign: 'center',
},
footnote: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.skyBlue,
    marginTop: '-2px',
    padding: '60px 24px',
    textAlign: 'center',
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

};