//footnote for bottom of each page

import { Box, Typography } from '@mui/material';
import colors from './colorPalette';
import creativeVisions from '../assets/logos/creative_visions_logo.png';



export default function Footnote () {

    return (
         <Box style={styles.footnote}>
            <Typography style={styles.TextSmall}>
                The Seed Bomb Project is fiscally sponsored by Creative Visions, a 501c3 nonprofit organization that supports creative activists, those that use the arts and media to ignite social change.
            </Typography>
            <Box 
                component="img"
                src={creativeVisions} 
                alt="Creative Visions Logo" 
                sx={{ width: 200, height: 'auto', marginTop: '10px', borderRadius: '8px' }}
            />
        </Box>
    );
}


const styles = {
footnote: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: colors.skyBlue,
    padding: '20px 24px',
    textAlign: 'center',
},
TextSmall: {
    color: colors.white,
    fontFamily: 'var(--sans)',
    fontSize: '14px',
    paddingTop: '10px',
    paddingBottom: '10px',
}

};

