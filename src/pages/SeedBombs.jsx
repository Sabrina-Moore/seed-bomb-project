import {Stack, Box, Typography}  from '@mui/material';

import colors from '../components/colorPalette'
import '../index.css'
import WaveDivider from '../components/WaveDivider';

export default function SeedBombs() {


    return(
    <>
        <Box>
            {/* top page content section */}
            {/* rows */}
            <Stack direction="row">

            {/* top row */}
                <Box style={styles.ingredientSection}>
                    {/* left item */}
                    <Stack direction="column" spacing={1} sx={{alignItems:"center"}}>
                        <Typography style={styles.sectionTitleOrange}>
                            How do you make a seed bomb?
                        </Typography>
                        <Typography style={styles.TextDark}>
                            Mix together: 
                        </Typography>
                        <Typography style={styles.TextDark}>
                        1 Cup native wildflower seeds
                        </Typography>
                        <Typography style={styles.TextDark}>
                        3 Cups clay powder
                        </Typography>
                        <Typography style={styles.TextDark}>
                        5 Cups compost
                        </Typography>
                        <Typography style={styles.TextDark}>
                        Water (how much?)
                        </Typography>
                        <Typography style={styles.TextDark}>
                        Mix and form little balls.
                        </Typography>
                        <Typography style={styles.TextDark}>
                        Dry them and plant it. 
                        </Typography>
                    </Stack>
                </Box>

                    {/* right item */}
                <Box style={styles.nativeSeedsSection}>
                    <Typography style={styles.sectionTitleOrange}>
                        Why do we use native seeds?
                    </Typography>
                    <Typography style={styles.TextDark}>
                        California poppies, evening primrose, California buckwheat, yarrow, and sunflowers are naturally drought tolerant and  thrive in a post-fire environment, healing the soil by extracting toxins and fixing nutrients. 
                    </Typography>
                    {/* images */}
                </Box>
        </Stack>

               

        <WaveDivider fill={colors.orange} />
        {/* 2nd row */}
        <Stack direction="row">

            {/* left item */}
            <Box style={styles.plantingSection}>
                {/* ingredients list */}
                <Stack direction="column" spacing={1} sx={{alignItems:"center"}}>
                    <Typography style={styles.sectionTitle}>
                        How do you plan a seed bomb?
                    </Typography>
                    <Typography style={styles.Text}>
                        1. Crush your seed bomb in your hand.
                    </Typography>
                    <Typography style={styles.Text}>
                        2. Scatter the seeds.
                    </Typography>
                    <Typography style={styles.Text}>
                        3. Water the area, or time your planting for rain. 
                    </Typography>
                    <Typography style={styles.Text}>
                        4. Wait for blooms. 
                    </Typography>
                    {/* images/gif */}
                </Stack>
            </Box>
            {/* right item */}

             <Box style={styles.whatWeDoSection}>
                    <Typography style={styles.sectionTitle}>
                        What do we do with them?
                    </Typography>
                    <Typography style={styles.Text}>
                        We give seed bombs to people impacted by wildfires so they can transform their cleared lots into vibrant pollinator meadows. We don’t use them in wild spaces or on private property without permission.
                    </Typography>    
                </Box>
        </Stack>
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
ingredientSection: {
    boxSizing: 'border-box',
    marginBottom: '60px',
    width: '100%',
    backgroundColor: colors.white,
    padding: '60px',
    textAlign: 'center',
},
whatWeDoSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.orange,
    paddingBottom: '100px',
    textAlign: 'center',
},
nativeSeedsSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.white,
    padding: '60px',
    textAlign: 'center',
},
plantingSection: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: colors.orange,
    paddingBottom: '100px',
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