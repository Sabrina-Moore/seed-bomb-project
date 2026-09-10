//user input - what's the best backend? supabase?
//contact form

import { useEffect, useState } from 'react'
import React from 'react';

import {Stack, Box, Typography, Button, TextField, FormControl, FormGroup, FormLabel, FormControlLabel, InputLabel, Select, MenuItem, Alert, Checkbox}  from '@mui/material';
import { supabase } from '../../utils/supabase'

import colors from '../components/colorPalette'
import '../index.css'
import Footnote from '../components/footnote';


const INTEREST_OPTIONS = ['Seed Bomb Making', 'Seed Bomb Distribution', 'Community Events', 'Sponsorship', 'In-Kind Donated Goods', 'In-Kind Donated Services', 'In-Kind Donated Space']


export default function GetInvolved () {

//form information to supabase


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        zone: '',
        interests: [],
    })
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    function handleChange(e) {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


    function handleInterestToggle(option) {
        setFormData((prev) => {
            const already = prev.interests.includes(option)
            return {
                ...prev,
                interests: already
                    ? prev.interests.filter((i) => i !== option)
                    : [...prev.interests, option],
            }
        })
    }


    async function handleSubmit(e) {
        e.preventDefault()
        setSubmitting(true)
        setError(null)

        try {
            const { error } = await supabase
                .from('mailing_list')
                .insert([{
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    zone: formData.zone,
                    interests: formData.interests,
                }])

            if (error) {
                setError(error.message)
            } else {
                setSubmitted(true)
                setFormData({ firstName: '', lastName: '', email: '' , zone: '', interests: [],})
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setSubmitting(false)
        }
    }

  



    return(
    <>
    <Box style={styles.pageSection}>
        <Box sx={{ width: '600px', margin: '0 auto' }}>
            <Typography style={styles.missionTitle}>
            “What you do makes a difference, and you have to decide what kind of difference you want to make.”
        </Typography>
        <Typography style={styles.missionTitle}>
            ― Jane Goodall
        </Typography>
        </Box>
        <Typography style={styles.sectionTitleDark}>
            Become a seed bomber
        </Typography>

        {/* image */}

        {/* text form */}
        <Box
        component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 500, margin: '0 auto' }}>
            <Stack direction="row" spacing={2} sx={{ padding: '20px 0' }}>
                <TextField 
                    name="firstName"
                    label="First"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    fullWidth
                    >
                    First
                </TextField>
                <TextField
                    name="lastName"
                    label="Last"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    fullWidth
                    >
                    Last
                </TextField>
                </Stack>

            <Stack direction="column" spacing={2}>
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                    >
                        Email
                    </TextField>
                      <FormControl fullwidth required sx={{ marginBottom: '20px'}}>
                        <Typography
                            component="label"
                            htmlFor="zone-select"
                            style={{ ...styles.TextDark, display: 'block', textAlign: 'left', paddingTop: 0, paddingBottom: '4px', fontSize: '18px' }}
                        >
                            Which wildfire zone are you near?
                        </Typography>
                        <Select
                            labelId="zone-select"
                            name="zone"
                            value={formData.heardFrom}
                            onChange={handleChange}
                            sx={{
                                '& .MuiSelect-select': { color: colors.navyBlue, fontFamily: 'var(--sans)' },
                            }}
                        >
                            <MenuItem value="malibu">Malibu</MenuItem>
                            <MenuItem value="palisades">Palisades</MenuItem>
                            <MenuItem value="altadena">Altadena</MenuItem>
                            <MenuItem value="sanGabrielValley">San Gabriel Valley</MenuItem>
                            <MenuItem value="sanFernandoValley">San Fernando Valley</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
                        <FormLabel component="legend"
                        style={{ ...styles.TextDark, display: 'block', textAlign: 'left', paddingTop: 0, paddingBottom: '4px', fontSize: '18px' }}> How do you want to engage?</FormLabel>
                        <FormGroup>
                            {INTEREST_OPTIONS.map((option) => (
                                <FormControlLabel
                                    key={option}
                                    control={
                                        <Checkbox
                                            checked={formData.interests.includes(option)}
                                            onChange={() => handleInterestToggle(option)}
                                        />
                                    }
                                    label={option}
                                    sx={{ '& .MuiFormControlLabel-label': { color: colors.navyBlue, fontFamily: 'var(--sans)' } }}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>

            </Stack>

             {error && (
                <Alert severity="error" sx={{ marginTop: '20px' }}>
                    {error}
                </Alert>
            )}
            {submitted && (
                <Alert severity="success" sx={{ marginTop: '20px' }}>
                    Thanks for signing up!
                </Alert>
            )}

            <Button
                type="submit"
                variant="contained"
                disabled={submitting}
                sx={{ marginTop: '20px' }}
            >
                {submitting ? 'Submitting...' : 'Sign up'}
            </Button>
        </Box>
    </Box>


    <Footnote fill={colors.skyBlue} strokeColor={colors.orange}  />
    <Box style={styles.footnote}>
        <Typography style={styles.TextSmall}>
            The Seed Bomb Project is fiscally sponsored by Creative Visions, a 501c3 nonprofit organization that supports creative activists, those that use the arts and media to ignite social change.
        </Typography>
    </Box>
    </>

    );
}





const styles = {
//sections
pageSection: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: '60px',
    marginTop: '-2px',
    paddingBottom: '80px',
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
    color: colors.orange,
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