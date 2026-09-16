
import {Box, Stack, Typography}  from '@mui/material';

import colors from '../components/colorPalette'
import '../index.css'
import WaveDivider from '../components/waveDivider';
import FootnoteDivider from '../components/footnoteDivider';
import Footnote from '../components/footnote';
import EventCard from '../components/eventCard';
//import poppyImage from '../assets/poppy-header.jpg';

//iamges
import backgroundImage from '../assets/images/poppy1.jpg';
import workshopImage1 from '../assets/images/girl_making_seed_bombs.JPG';
import workshopImage2 from '../assets/images/Rummy_presentation.jpeg';
import treeamsImage from '../assets/images/smiling_girl_from_st_marks.jpeg';
import yeehawImage from '../assets/images/pink_hat_girl_making_seed_bomb.JPG';
import steadfastImage from '../assets/images/Rummy_Rick_at_SteadfastLA_HR.jpeg';
import avesonImage from '../assets/images/family_at_workshop.jpg';
import yourNeighborImage from '../assets/images/your_neighbor_poster.png';

const pastEvents = [
  {
    id: 1,
    image: yeehawImage,
    title: ' Yee Haw Day',
    description: 'We had a booth at the Palisades Elementary Charter School’s annual Yee Haw Day. 70% of Pali Elementary students lost their homes along with their school. We had so much fun making seed bombs—591 of them!—with this amazing community.',
    link: 'https://www.yeehawpali.com/',
    linkText: 'Yee Haw Day',
},
  {
    id: 2,
    image: treeamsImage,
    title: 'TREEAMS' ,
    description: 'We gave away seed bombs at the launch of TREEAMS, the late, great Jane Goodall’s program to plant 5,000 native trees in Los Angeles County.',
    link: 'https://www.treeams.org/',
    linkText: 'TREEAMS',
},
  {
    id: 3,
    image: steadfastImage,
    title: 'Steadfast LA',
    description: 'We planted hundreds of seed bombs with Steadfast LA along Sunset Boulevard in Pacific Palisades. Highlights included introducing Rick Caruso to seed bombing, and watering with help from Station 69.',
    link: 'https://www.steadfastla.com/',
    linkText: 'Steadfast LA',
},
  {
    id: 4,
    image: avesonImage,
    title: 'Aveson School Fall Festival',
    description: 'We gave out seed bombs to our Altadena neighbors affected by the Eaton Fire at the Aveson School of Leaders Fall Festival, deepening connections with another joyful and resilient LA community!',
    link: 'https://www.aveson.org/aveson-school-of-leaders',
    linkText: 'the Aveson School of Leaders',
},
    {
    id: 5,
    image: '',
    title: 'Community Gathering in Pacific Palisades',
    description: 'On December 6, 2025, neighbors and friends gathered at our lot in the Alphabet Streets in Pacific Palisades to connect, share our stories, and pick up seed bombs to plant in their lots.',
    link: '',
    linkText: 'Pacific Palisades'
},
  {
    id: 6,
    image: yourNeighborImage,
    title: 'Your Next Door Neighbor',
    description: 'We gave away seed bombs to fire-affected families at Home for the Holidays, an immersive winter wonderland experience created by our friends at Your Next Door Neighbor. We will also be running a seed bomb making workshop.',
    link: '',
    linkText: '',
  },
];




export default function Events () {

    return(
    <>
        <Box style={styles.coverImage}>
             <Typography style={styles.coverTitle}>
                Bring the Seed Bomb Project to Your School
            </Typography>
        </Box>

        <WaveDivider fill={colors.green} strokeColor={colors.white}/>

        <Box style={styles.eventsSection}>
             {/* images */}
                <Box sx={{ width: '100%', boxSizing: 'border-box', padding: { xs: '20px', md: '40px' }, display: 'flex', justifyContent: 'center' }}>
                    <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr',
                            md: 'repeat(3, 1fr)',
                        },
                         gap: { xs: '30px', md: '64px' },
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}>
                    <Box 
                        component="img"
                        src={workshopImage1} 
                        alt="A visual map of the Palisades fire area" 
                        sx={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '8px' }}
                    />
                    <Typography style={styles.SubtitleDark}>
                        Placeholder for Video
                    </Typography>
                    <Box 
                        component="img"
                        src={workshopImage2} 
                        alt="A visual map of the Palisades fire area" 
                        sx={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '8px' }}
                    />
                </Box>
            </Box>

            <Typography style={styles.sectionTitleDark}>
                Past Events
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3, paddingBottom: '40px' }}>
            {pastEvents.map((event) => (
                <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                description={event.description}
                link={event.link}
                linkText={event.linkText}
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

            <Typography sx={{...styles.SubtitleDark, paddingBottom: '40px'}}>
                Placeholder timelapse video
            </Typography>

            <Typography sx={{...styles.TextDark, paddingBottom: '60px'}}>
                More info here about what it's like hosting an event.
            </Typography>

        </Box>




        {/* -------------- */}
            {/* footnote */}
        <FootnoteDivider fill={colors.skyBlue} strokeColor={colors.orange} />

        <Footnote/>
    
    
    </>

    );
}




const styles = {
//sections
coverSection: {
    width: '100%',
    minHeight: '400px', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
},
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

//background image
coverImage: {
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '60px',
    marginBottom: '60px',
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
TextSmall: {
    color: colors.white,
    fontFamily: 'var(--sans)',
    fontSize: '14px',
    paddingTop: '10px',
    paddingBottom: '10px',
}

};
