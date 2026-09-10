//fetches from bucket in supabase of images
import { useEffect, useState } from 'react';

import {Box, Typography}  from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import colors from '../components/colorPalette'
import '../index.css'
import WaveDivider from '../components/waveDivider';
import Footnote from '../components/footnote';

import { supabase } from '../../utils/supabase' 

export default function Gallery () {

    //states
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //fetch images from supabae
    useEffect(() => {
    async function fetchImages() {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('id', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setImages(data)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
    }

    fetchImages()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>



    return(
    <>
    <Box style={styles.gallerySection}>
        <Typography style={styles.coverTitle}>
            FROM ASHES TO ACTION
        </Typography>
        <Masonry columns={3} spacing={2}>
            {images.map((img) => {
                const { data: { publicUrl } } = supabase
                .storage
                .from('gallery')
                .getPublicUrl(img.storage_path)
                return (
                <Box key={img.id}>
                    <img 
                    src={publicUrl} 
                    alt={img.alt_text || img.title} 
                    loading="lazy" 
                    style={{ width: '100%', display: 'block', borderRadius: 8 }} 
                    />
                    <Box sx={{ mt: 1 }}>{img.title}</Box>
                </Box>
                )
            })}
        </Masonry>

        <br/>

    </Box>


        <Footnote fill={colors.skyBlue} strokeColor={colors.white}  />

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
gallerySection: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: colors.orange,
    marginBottom: '60px',
    marginTop: '-2px',
    padding: '20px 20px',
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
TextSmall: {
    color: colors.white,
    fontFamily: 'var(--sans)',
    fontSize: '14px',
    paddingTop: '10px',
    paddingBottom: '10px',
}

};
