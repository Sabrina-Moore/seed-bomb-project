
//add button navigation to thumbnails
//clean up design

import {Container, Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Grid}  from '@mui/material';

import colors from '../components/colorPalette'
import '../index.css'
import WaveDivider from '../components/waveDivider';
import Footnote from '../components/footnote';

import image1 from '../assets/article-palisades-news.jpeg';
import image2 from '../assets/article-crossroads-news.jpeg';
import image3 from '../assets/article-la-times.jpeg';
import image4 from '../assets/article-palisadian-post.jpeg';
import image5 from '../assets/article-nbc.jpeg';
import image6 from '../assets/article-westside-current.jpeg';
import image7 from '../assets/article-circling-news.jpeg';
import image8 from '../assets/article-national-geo.jpeg';


//array of just works written by the Nonprofit
const DanaAuthor = [
     {
        id: 1,
        link: 'https://www.nationalgeographic.com/environment/article/can-wildflowers-heal-the-toxic-mess-the-LA-fires-left-behind',
        newspaper: 'National Geographic',
        title: 'Can wildflowers heal the toxic mess the L.A. fires left behind?',
        date: '05-07-2026',
        thumbnail: image8,
    },
]

//array of all press
const Articles = [
        {
        id: 1,
        link: 'https://palisadesnews.com/palisades-students-display-banners-of-hope-to-heal-community/',
        newspaper: 'Palisades News',
        title: 'Palisades Students Display ‘Banners of Hope’ to Heal Community',
        date: '6-6-2025',
        thumbnail: image1,
    },
        {
        id: 2,
        link: 'https://www.xrds.org/news?pk=1574550',
        newspaper: 'Crossroads News',
        title: 'Middle School Student Leads Service Project to Beautify Palisades',
        date: '6-11-2025',
        thumbnail: image2,
    },
        {
        id: 3,
        link: 'https://www.latimes.com/lifestyle/newsletter/2025-12-01/december-plants-newsletter',
        newspaper: 'Los Angeles Times',
        title: 'This mother and son are sowing purpose and hope, one wildflower at a time',
        date: '',
        thumbnail: image3,
    },
        {
        id: 4,
        link: 'https://palipost.com/planting-seeds/',
        newspaper: 'Palisadian-Post',
        title: 'Planting Seeds',
        date: '11-13-2025',
        thumbnail: image4,
    },
        {
        id: 5,
        link: 'https://www.nbclosangeles.com/news/california-wildfires/grants-approved-for-palisades-fire-rebuilding/3798085/',
        newspaper: 'NBC4 Los Angeles',
        title: '$104,000 in new grants approved for Palisades Fire rebuilding',
        date: '10-29-2025',
        thumbnail: image5,
    },
        {
        id: 6,
        link: 'https://www.westsidecurrent.com/pacific_palisades/flower-meadows-to-emerge-across-burn-zones-this-spring-thanks-to-seed-bomb-project/article_3ab8ab82-0913-49e7-aa24-4afa5bd02683.html',
        newspaper: 'Westside Current',
        title: 'Flower Meadows To Emerge Across Burn Zones this Spring Thanks to Seed Bomb Project',
        date: '01-09-2026',
        thumbnail: image6,
    },
        {
        id: 7,
        link: 'https://www.circlingthenews.com/one-boys-effort-to-bring-beauty-back-to-the-palisades/',
        newspaper: 'Circling The News',
        title: 'One Boy’s Effort to Bring Beauty Back to the Palisades',
        date: '01-15-2026',
        thumbnail: image7,
    },
]

export default function Press() {


    //sort by date

    return(
    <>
    <Box style={styles.pageSection}>

        <Typography style={styles.TextDark}>
            Read Dana's article in the National Geographic
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        {DanaAuthor.map((article) => (
            <Card
                key={article.id}
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 345,
                }}>
                <Box
                    sx={{
                        width: '100%',
                        maxHeight: 200,
                        aspectRatio: '16 / 9',
                        backgroundColor: 'grey.100',
                        overflow: 'hidden',
                    }}>
                    <CardMedia
                        component="img"
                        image={article.thumbnail || '/images/placeholder.jpg'}
                        alt={article.title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}/>
                </Box>
                <CardContent>
                    <Typography style={styles.SubtitleDark}>
                        {article.title}
                    </Typography>
                    {article.date && (
                        <Typography style={styles.textDark}>
                            {article.date}
                        </Typography>
                    )}
                </CardContent>
            </Card>
            ))}
        </Box>

                <br/>

        <Typography style={styles.TextDark}>
            Read about us in the news
        </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1100, margin: '0 auto', paddingBottom: '60px'}}>
                {Articles.map((article) => (
                    // 1 per row on phones, 2 per row on tablets, 3 per row on desktop
                    <Grid item xs={12} sm={6} md={4} key={article.id}>
                        <Card
                key={article.id}
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 345,
                }}>
                <Box
                    sx={{
                        width: '100%',
                        maxHeight: 200,
                        aspectRatio: '16 / 9',
                        backgroundColor: 'grey.100',
                        overflow: 'hidden',
                    }}>
                    <CardMedia
                        component="img"
                        image={article.thumbnail || '/images/placeholder.jpg'}
                        alt={article.title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}/>
                </Box>
                <CardContent>
                    <Typography style={styles.SubtitleDark}>
                        {article.title}
                    </Typography>
                    {article.date && (
                        <Typography style={styles.textDark}>
                            {article.date}
                        </Typography>
                    )}
                </CardContent>
            </Card>
                    </Grid>
                ))}
            </Grid>
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
pageSection: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: colors.skyBlue,
    marginBottom: '60px',
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
coverTitleDark: {
    color: colors.green,
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
    fontSize: '20px',
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
