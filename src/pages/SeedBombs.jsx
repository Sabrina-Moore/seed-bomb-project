//need images

import {Stack, Box, Typography}  from '@mui/material';

import colors from '../components/colorPalette'
import '../index.css'
import FootnoteDivider from '../components/footnoteDivider';
import Footnote from '../components/footnote';

//images
import starImage from '../assets/images/star_image.png';

export default function SeedBombs() {


    return(
    <>
        <Box sx={{ overflowX: "hidden", position: 'relative', }}>
            {/* top row*/}
            <Stack  direction={{ xs: "column", md: "row" }}
            sx={{ backgroundColor: colors.white }}>
                {/* left */}
                <Box sx={styles.ingredientSection}>
                    {/* left item */}
                    <Stack direction="column" spacing={1} sx={{alignItems:"center"}}>
                         <Typography sx={styles.sectionTitleOrange}>
                                How do you make a seed bomb?
                            </Typography>
                            {/* explicit width to make uniform sizing */}
                       <Box sx={{ width: "100%", maxWidth: 320 }}>
                            <Typography sx={styles.TextDark}>
                                Mix together: 
                            </Typography>
                            <Typography sx={styles.TextDark}>
                            1 Cup native wildflower seeds
                            </Typography>
                            <Typography sx={styles.TextDark}>
                            3 Cups clay powder
                            </Typography>
                            <Typography sx={styles.TextDark}>
                            5 Cups compost
                            </Typography>
                            <Typography sx={styles.TextDark}>
                            Water (how much?)
                            </Typography>
                            <Typography sx={styles.TextDark}>
                            Mix and form little balls.
                            </Typography>
                            <Typography sx={styles.TextDark}>
                            Dry them and plant them. 
                            </Typography>
                       </Box>
                    </Stack>
                </Box>

             {/* right item */}
                <Box sx={styles.nativeSeedsSection}>
                    <Typography sx={styles.sectionTitleOrange}>
                        Why do we use native seeds?
                    </Typography>
                    <Typography sx={styles.TextDark}>
                        California poppies, evening primrose, California buckwheat, yarrow, and sunflowers are naturally drought tolerant and thrive in a post-fire environment, healing the soil by extracting toxins and fixing nutrients. 
                    </Typography>
                    <Box 
                        component="img"
                        src={starImage} 
                        alt="Image shows flowers blooming around a burned tree" 
                        sx={{ width: '100%', maxHeight: '200px', objectFit: 'contain', borderRadius: '8px' }}
                    />
                </Box>
            </Stack>

            {/* bottom row */}
            <Stack direction={{ xs: "column", md: "row" }}sx={{ backgroundColor: colors.white, pb: { xs: "60px", md: "140px" } }}>
                {/* left item */}
                <Box sx={styles.plantingSection}>
                    <Stack direction="column" spacing={1} sx={{alignItems:"center"}}>
                        <Typography sx={styles.sectionTitleOrange}>
                        How do you plant a seed bomb?
                        </Typography>
                       <Box sx={{ width: "100%", maxWidth: 320 }}>
                            <Typography sx={styles.TextDark}>
                            1. Crush your seed bomb in your hand.
                            </Typography>
                            <Typography sx={styles.TextDark}>
                                2. Scatter the seeds.
                            </Typography>
                            <Typography sx={styles.TextDark}>
                                3. Water the area, or time your planting for rain. 
                            </Typography>
                            <Typography sx={styles.TextDark}>
                                4. Wait for blooms. 
                            </Typography>
                            <Typography sx={styles.SubtitleDark}>
                                Placeholder video
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                {/* right item */}
                <Box sx={styles.whatWeDoSection}>
                        <Typography sx={styles.sectionTitleOrange}>
                            What do we do with them?
                        </Typography>
                        <Typography sx={styles.TextDark}>
                            We give seed bombs to people impacted by wildfires so they can transform their cleared lots into vibrant pollinator meadows. We don’t use them in wild spaces or on private property without permission.
                        </Typography>    
                 </Box>


                 <Box sx={{marginBottom: "40px"}}>
                    {/* blank section to create spacing before footnote */}
                 </Box>
                 
            
            </Stack>
            
            {/* footnote */}
            <FootnoteDivider fill={colors.skyBlue} strokeColor={colors.orange} />

         </Box> 
    {/* -------------- */}
    <Footnote/>
    </>
    );
}


const styles = {
//sections
background: {
    backgroundColor: colors.white,
},
ingredientSection: {
    boxSizing: "border-box",
    width: "100%",
    padding: { xs: "24px 16px", md: "40px" },
    textAlign: 'left',
},
whatWeDoSection: {
    boxSizing: "border-box",
    width: "100%",
    padding: { xs: "24px 16px", md: "40px" },
    textAlign: 'left',
},
nativeSeedsSection: {
    boxSizing: "border-box",
    width: "100%",
    padding: { xs: "24px 16px", md: "40px" },
    textAlign: 'center',
},
plantingSection: {
    boxSizing: "border-box",
    width: "100%",
    padding: { xs: "24px 16px", md: "40px" },
    textAlign: 'left',
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
    fontSize: { xs: '24px', md: '30px' },
    paddingTop: '10px',
    paddingBottom: '10px',
},  
Subtitle: {
    color: colors.white,
    fontFamily: 'var(--sans)', 
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: { xs: '20px', md: '25px' }, 
    paddingTop: '10px',
    paddingBottom: '10px',
},
SubtitleDark: {
    color: colors.navyBlue,
    fontFamily: 'var(--sans)', 
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: { xs: '20px', md: '25px' }, 
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
    fontSize: { xs: '16px', md: '18px' }, 
    paddingTop: '10px',
    paddingBottom: '10px',
},
TextOrange: {
    color: colors.darkOrange,
    fontFamily: 'var(--sans)',
    fontSize: { xs: '16px', md: '18px' }, 
    paddingTop: '10px',
    paddingBottom: '10px',
},
TextGreen: {
    color: colors.green,
    fontFamily: 'var(--sans)',
    fontSize: { xs: '16px', md: '18px' }, 
    paddingTop: '10px',
    paddingBottom: '10px',
},
TextDark: {
    color: colors.navyBlue,
    fontFamily: 'var(--sans)',
    fontSize: { xs: '16px', md: '18px' }, 
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