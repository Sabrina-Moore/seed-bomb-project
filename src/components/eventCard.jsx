import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function EventCard({
  title,
  description,
  imageUrl,
  imageAlt = 'Event image',
  styles = {},
  maxWidth = 400,
  imageHeight = 180,
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
      {imageUrl && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={imageUrl}
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
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}