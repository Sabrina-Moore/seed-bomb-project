//footnote divider

import { Box } from '@mui/material';
import colors from './colorPalette';

const styles = {
waveWrapper: {
    position: 'relative',
    marginTop: '-140px', 
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
    lineHeight: 0,
    zIndex: 1,
},
waveSvg: {
    width: '100%',
    display: 'block',
    height: '100px',
},
}


function FootnoteDivider ({ fill, strokeColor = colors.orange, flip = false }) {

    return(

        <Box style={styles.waveWrapper}>
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                style={{
                    ...styles.waveSvg,
                    transform: flip ? 'scaleY(-1)' : 'none',
                }}
            >
                <path
                    fill={fill}
                    d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
                />
                <path
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="3"
                    d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64"
                />
            </svg>
        </Box>
        
    );
}

export default FootnoteDivider;
