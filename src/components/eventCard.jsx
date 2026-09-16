
import colors from './colorPalette';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


function DescriptionWithLink({ description, linkText, link }) {
    if (!linkText || !link) {
        return <>{description}</>;
    }

    const index = description.indexOf(linkText);

    
    if (index === -1) {
        return <>{description}</>;
    }

    const before = description.slice(0, index);
    const after = description.slice(index + linkText.length);

    return (
        <>
            {before}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: colors.orange,
                  textDecoration: 'underline' }}
            >
                {linkText}
            </a>
            {after}
        </>
    );
}

 

export default function EventCard({
  title,
  description,
  image,
  imageAlt = 'Event image',
  link,
  linkText,
  styles = {},
  maxWidth = 400,
  imageHeight = 300,
  onClick,
}) {
  
  return (
    <Card
      variant="outlined"
      onClick={onClick}
      sx={{
        maxWidth,
        width: '100%',
        borderRadius: 3,
        borderColor: '#ccc',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        },
      }}
    >
      {/* Event Image */}
      {image && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt={imageAlt || title}
        />
      )}

      {/* Text Container */}
      <CardContent sx={{ p: 2.5 }}>
        <Typography
          style={styles.SubtitleDark}
          variant="h6"
          component="h3"
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          {title}
        </Typography>

        <Typography
          style={styles.TextDark}
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          <DescriptionWithLink description={description} linkText={linkText} link={link} />
        </Typography>
      </CardContent>
    </Card>
  );
}