//need images

import {Stack, Box, Typography, Button}  from '@mui/material';

import colors from '../components/colorPalette'
import '../index.css'

import WaveDivider from '../components/waveDivider';
import FootnoteDivider from '../components/footnoteDivider';
import Footnote from '../components/footnote';
import map from '../assets/map-placeholder.png';


//images
import seedBombLogo from '../assets/logos/seed_bomb_logo.png';
import coverImage1 from '../assets/images/cover_image.jpeg';
import natGeoImage from '../assets/articleThumbnails/article-national-geo.jpeg';

//mission
import rummyImage1 from '../assets/images/Rummy_pose.jpeg';
import seedImage from '../assets/images/Seed.JPG';
import plantImage1 from '../assets/images/new_growth_sprouts.jpeg';
import RummyDanaImage from '../assets/images/Rummy_Dana.png';

//hands on restoration 
import palisadesMap from '../assets/images/palisades_fire_map.jpeg';
import eatonMap from '../assets/images/eaton_fire_map.jpeg';
import groupImage1 from '../assets/images/kids_holding_seed_bombs_steadfast_la.jpg';

//healing
import treeImage from '../assets/images/tree.jpeg';
import groupPlantingImage from '../assets/images/group_planting.jpeg';
import altadenaPoster from '../assets/images/altadena_poster.JPG';

//native seeds
import poppyImage1 from '../assets/images/poppy2.jpg';

//logos
import anawalt from '../assets/logos/anawalt_logo.jpeg';
import losAngelesDept from '../assets/logos/dept_of_los_angeles_logo.png';
import johnson from '../assets/logos/johnson_logo.jpg';
import laStrong from '../assets/logos/la_strong_logo.png';
import malibuCompost from '../assets/logos/malibu_compost_logo.jpg';
import palisadesBeautiful from '../assets/logos/palisades_beautiful_logo.png';
import pcrc from '../assets/logos/pcrc_logo.jpg';
import ppcc from '../assets/logos/ppcc_logo.png';
import teamPalisades from '../assets/logos/team_palisades_logo.png';
import steadfastLA from '../assets/logos/steadfast_la_logo.png';
import yourNeighbor from '../assets/logos/your_neighbor_logo.jpg';

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

const sponsors = [
    {id: 2, name: 'Anawalt', logo: anawalt },
    {id: 3, name: 'Dept of Los Angeles', logo: losAngelesDept },
    {id: 4, name: 'Johnson', logo: johnson },
    { id: 5, name: 'LA Strong', logo: laStrong },
    {id: 6, name: 'Malibu Compost', logo: malibuCompost },
    {id: 7, name: 'Palisades Beautiful', logo: palisadesBeautiful },
    {id: 8, name: 'PCRC', logo: pcrc },
    {id: 9, name: 'PPCC', logo: ppcc },
    {id: 10, name: 'Team Palisades', logo: teamPalisades },
    {id: 11, name: 'Steadfast LA', logo: steadfastLA },
    {id: 12, name: 'Your Neighbor', logo: yourNeighbor },
]


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
        {/* ------------------ */}
        {/* background cover image and title*/}
        <Box style={styles.coverImage} >
            <Typography style={styles.coverTitle}> 
                The Seed Bomb Project
            </Typography>
        </Box>

          {/* swirly wave divider */}
        <WaveDivider fill={colors.orange} strokeColor={colors.white}/>

        {/* ------------------ */}
        {/* mission statement */}
        <Box style={styles.missionSection}>
            <Typography style={styles.missionTitle}>
                Our Mission Is Simple:
            </Typography>
            <Typography style={styles.Subtitle}>
                Bring Back Beauty, Bring Back Nature, Bring Back Hope
            </Typography>
            <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Typography style={styles.Text}>
                    Rummy Goodyear was 14 years old when he lost his home in the LA Wildfires on January 7th, 2025. Seeking a way to channel his grief into something positive for his community and for the entire city, he recruited friends and peers to help make seed bombs, balls of native wildflower seeds, clay, and compost to share and spread in fire-ravaged neighborhoods. 
                </Typography>
                <Typography style={styles.Text}>
                    In its first six months, the Seed Bomb Project has distributed more than 3000 seed bombs to stakeholders from Altadena to Pacific Palisades, healing LA one wildflower at a time.
                </Typography>
            </Box>

            <Typography style={styles.SubtitleDark}>
                Placeholder for video
            </Typography>
           

            {/* Nat Geo Article Action section  */}
            <Box sx={{ maxWidth: '1400px', margin: '0 auto', padding: '40px', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                        <Box 
                        component="img"
                        src={natGeoImage} 
                        alt="National Geographic article thumbnail" 
                        sx={{ width: 'auto', height: '500px', borderRadius: '8px', display: 'block' }}
                    />
                    <Button
                        sx={{
                            ...styles.articleButton,
                            position: 'absolute',
                            bottom: '16px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                        component="a"
                        href="https://www.nationalgeographic.com/environment/article/can-wildflowers-heal-the-toxic-mess-the-LA-fires-left-behind"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read the National Geographic article
                    </Button>
                </Box>
            </Box>

            {/* LA Times article action section */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Stack direction="column" spacing={6} sx={{ width: '400px' }}>
                        <Box sx={{width: "400px"}}>
                            <Typography style={styles.Subtitle}> 
                                "This mother and son are sowing purpose and hope, one wildflower at a time."
                            </Typography>
                        </Box>
                        <Button
                        sx={{
                        ...styles.articleButton,
                        alignSelf: 'center'
                        }}
                        component="a"
                        href="https://www.latimes.com/lifestyle/newsletter/2025-12-01/december-plants-newsletter"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            Read the LA Times article
                        </Button>
                </Stack>
                    <Box 
                    component="img"
                    src={RummyDanaImage} 
                    alt="Rummy and Dana posing for a picture" 
                    sx={{ width: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                    />
            </Box>
    
            {/* continued argument section for mission statement */}
            <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Typography style={styles.Text}>
                    Climate disasters take a toll on the physical and mental health of those who experience them, but they also provide powerful opportunities for growth and change. Our work is hands-on, heart forward, youth-led, and fun, embodying the natural resilience of the native plant varieties we work with. 
                </Typography>
                <Typography style={styles.Text}>
                    Help us turn cleared lots and charred parkways into wildflower meadows. 
                </Typography >
            </Box>

            {/* images */}
            <Box sx={{ width: '100%', boxSizing: 'border-box', padding: '40px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                    <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '64px',
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}>
                    <Box 
                        component="img"
                        src={rummyImage1} 
                        alt="Rummy plants a seed bomb" 
                        sx={{ objectFit: 'cover',width: '100%', height: '300px', borderRadius: '8px' }}
                    />
                        <Box 
                        component="img"
                        src={seedImage} 
                        alt="Water in the dirt reads 'seed'" 
                        sx={{ objectFit: 'cover',width: '100%', height: '300px', borderRadius: '8px' }}
                    />
                        <Box 
                        component="img"
                        src={plantImage1} 
                        alt="New plant growthß" 
                        sx={{ objectFit: 'cover',width: '100%', height: '300px', borderRadius: '8px' }}
                    />
                    </Box>
            </Box>
        </Box>

        <WaveDivider fill={colors.skyBlue} strokeColor={colors.white}/>

        {/* ------------------ */}
        {/* map engine section */}
        <Box style={styles.engineSection}>
            <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Typography style={styles.SubtitleDark}>
                    Track every Seed Bomb planted across Southern California — and add your own pin to the map
                </Typography>
                <Typography style={styles.TextDark}>
                    Every dot below is a seed bomb planted by someone just like you. Explore the map, see how your neighborhood is doing, and add your own pin in seconds.
                </Typography>
                <Typography style={styles.TextDark}>
                    Please plant responsibly only in areas that you have permission to do so.
                </Typography>
            </Box>
            {/* engine Placeholder */}
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

        <WaveDivider fill={colors.green} strokeColor={colors.white}/>
        
        {/* ------------------ */}
        {/* hands on restoration section */}
        <Box style={styles.restorationSection}>
            <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}> 
                <Typography style={styles.sectionTitle}>
                Hands-on Restoration
                </Typography>
                <Typography style={styles.Text}>
                    More than 37,000 acres burned in the Palisades and Eaton Fires, including more than sixteen thousand structures. The Seed Bomb Project engages young people to take an active role in healing their communities. 
                </Typography>
            </Box>
            

            {/* images */}
                <Box sx={{ width: '100%', boxSizing: 'border-box', padding: '40px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                    <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '64px',
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}>
                    <Box 
                        component="img"
                        src={palisadesMap} 
                        alt="A visual map of the Palisades fire area" 
                        sx={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '8px' }}
                    />
                        <Box 
                        component="img"
                        src={groupImage1} 
                        alt="A group of students planting their seed bombs" 
                        sx={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '8px' }}
                    />
                        <Box 
                        component="img"
                        src={eatonMap} 
                        alt= "A visual map of the Eaton fire area" 
                        sx={{ objectFit: 'cover', width: '100%', height: '400px', borderRadius: '8px' }}
                    />
                </Box>
            </Box>
        </Box>

        <WaveDivider fill={colors.orange} strokeColor={colors.white}/>

        {/* ------------------ */}
        {/* healing section */}
        <Box style={styles.healingSection}> 
            <Typography style={styles.coverTitle}> 
                Seed Bombing Isn’t Just Fun — It’s Healing.
            </Typography>
            <Box sx={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '40px', paddingRight: '40px', boxSizing: 'border-box' }}>
                {/* stack for subdivisions */}
                <Stack direction="row" spacing={3} sx={{alignItems:"flex-start"}} >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box 
                            component="img"
                            src={treeImage} 
                            alt="Flowers blooming around a burned tree" 
                            sx={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <Typography style={styles.Subtitle}>
                            Healing the Land
                        </Typography>
                        <Typography style={styles.Text}>
                            Introducing native seeds in the aftermath of a fire improves soil health and stability, supports biodiversity, speeds wildfire recovery, remediates toxicity, and strengthens land resilience to climate disasters.
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box 
                            component="img"
                            src={groupPlantingImage} 
                            alt="Seed Bomb Planting" 
                            sx={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <Typography style={styles.Subtitle}>
                            Healing Ourselves
                        </Typography>
                        <Typography style={styles.Text}>
                            The Seed Bomb project brings back together communities that have been scatted by natural disasters, creating new opportunities for bonding, healing, and growth, all in the service of doing something hands-on and positive for our beloved neighborhoods. 
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1,  minWidth: 0 }}>
                            <Box 
                            component="img"
                            src={altadenaPoster} 
                            alt="Homemade poster on a street post in support of Altadena" 
                            sx={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <Typography style={styles.Subtitle}>
                            Healing LA
                        </Typography>
                        <Typography style={styles.Text}>
                            We seek connection across all wildfire-affected zip codes of Los Angeles, finding affinity, partnership, and common cause with communities throughout the region.
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>

        {/* swirly wave divider restoration (green) -> Native Seeds (blue) */}
        <WaveDivider fill={colors.skyBlue} strokeColor={colors.white} />

        {/* ------------------ */}
        {/* Why native seeds? section */}
        <Box style={styles.nativeSeedsSection}>
            <Typography style={styles.sectionTitle}>
                Why Native Seeds?
            </Typography>
            <Box sx={{ width: '100%', padding: '40px', display: 'flex', justifyContent: 'center' }}>
                <Stack direction='row' spacing={8} alignItems="center">
                    <Box 
                        component="img"
                        src={poppyImage1} 
                        alt="California Poppies on the water" 
                        sx={{ width: 'auto', height: '400px', borderRadius: '8px' }}
                    />
                    <Box sx={{maxWidth: '300px', margin: '0 auto'}}>
                        <Typography style={{...styles.Caption, textAlign: 'left' }}>
                            “These seeds have adapted to thrive in the aftermath of wildfires.
                        </Typography>
                        <Typography style={{...styles.Caption, textAlign: 'left' }}>
                            They actually grow better when challenged. They embody resilience.”
                        </Typography>
                        <Typography style={{...styles.Caption, textAlign: 'center' }}>
                             — Rummy
                        </Typography>
                    </Box>   
                </Stack>
            </Box>
            <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Typography style={styles.Text}>
                    California poppies, sunflowers, yarrow, evening primrose. . . these are the “fire-followers,” amazing plants that thrive in the aftermath of a fire.
                </Typography>
            </Box>
            <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Typography style={styles.Text}>
                    These drought-tolerant plants stabilize and detoxify the soil, create habitat and food for birds and bees, and prevent invasive plants from taking over and presenting new fire hazards. They are iconic and beautiful and they will help prevent future disasters!
                </Typography>
            </Box>
    
            

            <Typography style={styles.SubtitleDark}>
                Placeholder for video
            </Typography>
        </Box>

        <WaveDivider fill={colors.white} strokeColor={colors.orange} />

        {/* ------------------- */}
        {/* Partner with us */}
        <Box style={styles.partnerSection}>
                <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', marginBottom: '40px', padding: '0 40px', boxSizing: 'border-box' }}>
                   <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                        justifyItems: 'center',
                        alignItems: 'center',
                        gap: '50px',
                    }}
                    >
                    {sponsors.map((sponsor) => (
                        <Box
                            key={sponsor.id}
                            component="img"
                            src={sponsor.logo}
                            alt={sponsor.name}
                            sx={{ width: 'auto', height: '80px', maxWidth: '160px', objectFit: 'contain' }}
                        />
                    ))}
                    </Box>
                </Box>
                {/* what does this button do? Link to what? */}
            <Button style={styles.partnerButton}  
                component="a"
                href="https://www.latimes.com/lifestyle/newsletter/2025-12-01/december-plants-newsletter"
                target="_blank"
                rel="noopener noreferrer">
                Partner With Us
            </Button>
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
    backgroundColor: colors.skyBlue,
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
healingSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.orange,
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
    backgroundImage: `url(${coverImage1})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '60px',
    marginBottom: '60px',
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
articleButton: {
    backgroundColor: colors.white,
    color: colors.navyBlue,
    fontWeight: 'bold',
    fontSize: '20px',
    fontStyle: 'italic',
    maxWidth: '500px',
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
donateButton: {
    backgroundColor: colors.white,
    color: colors.navyBlue,
    fontWeight: 'bold',
    fontSize: '20px',
    fontStyle: 'italic',
    minWidth: '300px',
    maxWidth: '300px',
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
    color: colors.navyBlue,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: '30px',
    textTransform: 'none',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '10px',
    paddingBottom: '10px',
    '&:hover': {
        backgroundColor: colors.skyBlue,
        opacity: 0.9,
    },
},
bombButton: {
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
    position: 'relative',
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



