
//add button navigation to thumbnails
//clean up design

import {Container, Box, Typography, Button, Card, CardActionArea, CardMedia, CardContent, CardActions, Grid}  from '@mui/material';

import colors from '../components/colorPalette'
import '../index.css'
import WaveDivider from '../components/waveDivider';
import FootnoteDivider from '../components/footnoteDivider';
import Footnote from '../components/footnote';

import image1 from '../assets/articleThumbnails/article-palisades-news.jpeg';
import image2 from '../assets/articleThumbnails/article-crossroads-news.jpeg';
import image3 from '../assets/articleThumbnails/article-la-times.jpeg';
import image4 from '../assets/articleThumbnails/article-palisadian-post.jpeg';
import image5 from '../assets/articleThumbnails/article-nbc.jpeg';
import image6 from '../assets/articleThumbnails/article-westside-current.jpeg';
import image7 from '../assets/articleThumbnails/article-circling-news.jpeg';
import image8 from '../assets/articleThumbnails/article-national-geo.jpeg';

import logo1 from '../assets/logos/circling_the_news_thumbnail.png';
import logo2 from '../assets/logos/nbc_thumbnail.png';
import logo3 from '../assets/logos/nat_geo_logo.png';
import logo4 from '../assets/logos/la_times_thumbnail.png';
import logo5 from '../assets/logos/westside_current_logo.png';


//array of just works written by the Nonprofit
const DanaAuthor = [
     {
        id: 1,
        link: 'https://www.nationalgeographic.com/environment/article/can-wildflowers-heal-the-toxic-mess-the-LA-fires-left-behind',
        newspaper: 'National Geographic',
        title: 'Can wildflowers heal the toxic mess the L.A. fires left behind?',
        date: '05-07-2026',
        thumbnail: image8,
        logo: logo3, 
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
        logo: "", 
    },
        {
        id: 2,
        link: 'https://www.xrds.org/news?pk=1574550',
        newspaper: 'Crossroads News',
        title: 'Middle School Student Leads Service Project to Beautify Palisades',
        date: '6-11-2025',
        thumbnail: image2,
        logo: "", 
    },
        {
        id: 3,
        link: 'https://www.latimes.com/lifestyle/newsletter/2025-12-01/december-plants-newsletter',
        newspaper: 'Los Angeles Times',
        title: 'This mother and son are sowing purpose and hope, one wildflower at a time',
        date: '12-1-2025',
        thumbnail: image3,
        logo: logo4, 
    },
        {
        id: 4,
        link: 'https://palipost.com/planting-seeds/',
        newspaper: 'Palisadian-Post',
        title: 'Planting Seeds',
        date: '11-13-2025',
        thumbnail: image4,
        logo: "", 
    },
        {
        id: 5,
        link: 'https://www.nbclosangeles.com/news/california-wildfires/grants-approved-for-palisades-fire-rebuilding/3798085/',
        newspaper: 'NBC4 Los Angeles',
        title: '$104,000 in new grants approved for Palisades Fire rebuilding',
        date: '10-29-2025',
        thumbnail: image5,
        logo: logo2, 
    },
        {
        id: 6,
        link: 'https://www.westsidecurrent.com/pacific_palisades/flower-meadows-to-emerge-across-burn-zones-this-spring-thanks-to-seed-bomb-project/article_3ab8ab82-0913-49e7-aa24-4afa5bd02683.html',
        newspaper: 'Westside Current',
        title: 'Flower Meadows To Emerge Across Burn Zones this Spring Thanks to Seed Bomb Project',
        date: '01-09-2026',
        thumbnail: image6,
        logo: logo5, 
    },
        {
        id: 7,
        link: 'https://www.circlingthenews.com/one-boys-effort-to-bring-beauty-back-to-the-palisades/',
        newspaper: 'Circling The News',
        title: 'One Boy’s Effort to Bring Beauty Back to the Palisades',
        date: '01-15-2026',
        thumbnail: image7,
        logo: logo1, 
    },
]

export default function Press() {

    //helper function to write time
    function parseArticleDate(dateStr) {
    if (!dateStr) return new Date(0);
    const [month, day, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
    }

    //sort by date
      const sortedArticles = [...Articles].sort(
        (a, b) => parseArticleDate(b.date) - parseArticleDate(a.date)
    );



    return(
    <>
    <Box style={styles.pageSection}>

        <Typography sx={{...styles.SubtitleDark, margin: '20px'}}>
            Read Dana's article in the National Geographic
        </Typography>

        <Box sx={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '60px', display: 'flex', justifyContent: 'center' }}>
                    {DanaAuthor.map((article) => (
                    <Card
                        key={`${article.newspaper}-${article.id}`}
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '400px',
                            width: '100%',
                            border: '1px solid black',
                        }}
                    >
                    <CardActionArea
                    component="a"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                    >
                    <Box
                    sx={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        backgroundColor: 'grey.100',
                        overflow: 'hidden',
                        flexShrink: 0,
                    }}
                    >
                        <CardMedia
                        component="img"
                        image={article.thumbnail || '/images/placeholder.jpg'}
                        alt={article.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>

                    <CardContent sx={{ px: 2, py: 1, '&:last-child': { pb: 1 } }}>
                        <Typography style={styles.SubtitleDark} sx={{ lineHeight: 1.3, mb: 0.5 }}>
                            {article.title}
                        </Typography>
                        {article.date && (
                            <Typography style={styles.textDark} sx={{ opacity: 0.7 }}>
                                {article.date}
                            </Typography>
                        )}
                    </CardContent>
                    </CardActionArea>
                </Card>
                ))}
        </Box>

        <Typography sx={{...styles.SubtitleDark, margin: '20px'}}>
            Read about us in the news
        </Typography>

        <Box sx={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '60px' }}>
            <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                justifyItems: 'center',
                rowGap: 4,
                columnGap: 2,
            }}
            >
                {sortedArticles.map((article) => (
                <Card
                    key={`${article.newspaper}-${article.id}`}
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '400px',
                        width: '100%',
                        border: '1px solid black',
                    }}
                >
                    <CardActionArea
                    component="a"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                    >
                    <Box
                    sx={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        backgroundColor: 'grey.100',
                        overflow: 'hidden',
                        flexShrink: 0,
                    }}
                    >
                        <CardMedia
                        component="img"
                        image={article.thumbnail || '/images/placeholder.jpg'}
                        alt={article.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>

                    <CardContent sx={{ px: 2, py: 1, '&:last-child': { pb: 1 } }}>
                        <Typography style={styles.SubtitleDark} sx={{ lineHeight: 1.3, mb: 0.5 }}>
                            {article.title}
                        </Typography>
                        {article.date && (
                            <Typography style={styles.textDark} sx={{ opacity: 0.7 }}>
                                {article.date}
                            </Typography>
                        )}
                    </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            </Box>
        </Box>
    </Box>

        {/* -------------- */}
            {/* footnote */}
        <FootnoteDivider fill={colors.skyBlue} strokeColor={colors.orange} />

        <Footnote/>

        

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
},
TextSmall: {
    color: colors.white,
    fontFamily: 'var(--sans)',
    fontSize: '14px',
    paddingTop: '10px',
    paddingBottom: '10px',
}

};
