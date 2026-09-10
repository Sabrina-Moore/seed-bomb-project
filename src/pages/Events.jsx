import React from 'react';
import colors from '../components/colorPalette'
import '../index.css'
import WaveDivider from '../components/WaveDivider';
import EventCard from '../components/eventCard';

import {Box, Typography, Stack, Grid, Card, CardContent}  from '@mui/material';


const pastEvents = [
  {
    id: 1,
    title: ' Yee Haw Day',
    description: 'We had a booth at  Palisades Elementary Charter School’s annual Yee Haw Day. 70% of Pali Elementary students lost their homes along with their school. We had so much fun making seed bombs—591 of them!—with this amazing community.',
  },
  {
    id: 2,
    title: 'TREEAMS' ,
    description: 'We gave away seed bombs at the launch of TREEAMS, the late, great Jane Goodall’s program to plant 5,000 native trees in Los Angeles County.',
  },
  {
    id: 3,
    title: 'Steadfast LA',
    description: 'We planted hundreds of seed bombs with Steadfast LA along Sunset Boulevard in Pacific Palisades. Highlights included introducing Rick Caruso to seed bombing, and watering with help from Station 69.',
  },
  {
    id: 4,
    title: 'Aveson School Fall Festival',
    description: 'We gave out seed bombs to our Altadena neighbors affected by the Eaton Fire at the Aveson School of Leaders Fall Festival, deepening connections with another joyful and resilient LA community!',
  },
  {
    id: 5,
    title: 'Your Next Door Neighbor',
    description: 'We gave away seed bombs to fire-affected families at Home for the Holidays, an immersive winter wonderland experience created by our friends at Your Next Door Neighbor. We will also be running a seed bomb making workshop.',


  },
  {
    id: 6,
    title: 'Community Gathering in Pacific Palisades',
    description: 'On December 6, 2026, neighbors and friends gathered at our lot in the Alphabet Streets in Pacific Palisades to connect, share our stories, and pick up seed bombs to plant in their lots.',
  }
];




export default function Events () {


    return(
    <>
        <Box style={styles.eventsSection}>
            <Typography style={styles.coverTitle}>
                Bring the Seed Bomb Project to Your School
            </Typography>

            <Typography style={styles.sectionTitleDark}>
                Past Events
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
            {pastEvents.map((event) => (
                <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                imageUrl={event.imageUrl}
                styles={styles}
                />
            ))}
            </Box>
        </Box>
        
        <WaveDivider fill={colors.white} />

        <Box style={styles.schoolEventsSection}>
            <Typography style={styles.sectionTitleDark}>
                Host a Seed Bomb Workshop for your community
            </Typography>

        </Box>




        <WaveDivider fill={colors.skyBlue} />

        <Box style={styles.footnote}>
            Social Media Links here
        </Box>
    
    
    </>

    );
}




const styles = {
//sections
eventsSection: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: colors.green,
    padding: '60px',
    marginBottom: '60px',
    textAlign: 'center',
},
schoolEventsSection:{
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: colors.white,
    padding: '40px',
    marginBottom: '60px',
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
