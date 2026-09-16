import { useEffect, useState } from 'react'
import React from 'react';


import {Container, Box, Typography, Button}  from '@mui/material';

import FootnoteDivider from '../components/footnoteDivider';
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

    {/* -------------- */}
            {/* footnote */}
        <FootnoteDivider fill={colors.skyBlue} strokeColor={colors.orange} />

        <Footnote/>
    </>

    );
}