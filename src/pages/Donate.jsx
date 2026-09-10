import { useEffect, useState } from 'react'
import React from 'react';


import {Container, Box, Typography, Button}  from '@mui/material';

import Footnote from '../components/footnote';


//links to donation site

export default function Donate() {


    return(
    <>
    <Container>
        <Box>
            <Typography>
                Test
            </Typography>
        </Box>
    </Container>

    <Footnote fill={colors.skyBlue} />

    <Box style={styles.footnote}>
        <Typography style={styles.TextSmall}>
            The Seed Bomb Project is fiscally sponsored by Creative Visions, a 501c3 nonprofit organization that supports creative activists, those that use the arts and media to ignite social change.
        </Typography>
    </Box>
    </>

    );
}