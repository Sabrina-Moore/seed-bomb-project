import { Box } from '@mui/material';
import colors from './colorPalette';

const styles = {
waveWrapper: {
   position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-1px',     
    lineHeight: 0,
    pointerEvents: 'none',
},
waveSvg: {
    width: '100%',
    display: 'block',
    height: '100px',
},
}

function WaveDivider({ fill, strokeColor = colors.orange, flip = false }) {
    return (
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

export default WaveDivider;