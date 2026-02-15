import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Typography, Box } from '@mui/material';

interface GenreModalProps {
  isOpen: boolean;
  onSelectGenre: (genre: string) => void;
}

const genres = [
  { id: "28", name: "Action", icon: '💥', color: '#ff6b6b' },
  { id: "35", name: "Comedy", icon: '😄', color: '#4ecdc4' },
  { id: "18", name: "Drama", icon: '🎭', color: '#45b7d1' },
  { id: "27", name: "Horror", icon: '👻', color: '#f06292' },
  { id: "878", name: "Sci-Fi", icon: '🚀', color: '#ba68c8' },
];

export function GenreModal({ isOpen, onSelectGenre }: GenreModalProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  return (
    <Dialog
      open={isOpen}
      onClose={() => { }}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.95) 0%, rgba(15, 20, 25, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        }
      }}
    >
      <DialogTitle sx={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        pb: 2
      }}>
        Choose Your Adventure
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {genres.map((genre) => (
            <Grid item xs={12} sm={6} md={4} key={genre.id}>
              <Button
                variant={selectedGenre === genre.id ? "contained" : "outlined"}
                onClick={() => setSelectedGenre(genre.id)}
                fullWidth
                sx={{
                  height: 140,
                  flexDirection: 'column',
                  borderRadius: '16px',
                  border: selectedGenre === genre.id ? `2px solid ${genre.color}` : '2px solid rgba(255, 255, 255, 0.2)',
                  background: selectedGenre === genre.id
                    ? `linear-gradient(135deg, ${genre.color}22 0%, ${genre.color}44 100%)`
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.02)',
                    background: selectedGenre === genre.id
                      ? `linear-gradient(135deg, ${genre.color}33 0%, ${genre.color}55 100%)`
                      : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: `0 10px 30px ${genre.color}40`,
                    border: `2px solid ${genre.color}`,
                  },
                }}
              >
                <Box sx={{ fontSize: '3rem', mb: 1, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                  {genre.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: selectedGenre === genre.id ? genre.color : '#fff',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  {genre.name}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 3, justifyContent: 'center' }}>
        <Button
          onClick={() => onSelectGenre(selectedGenre)}
          disabled={!selectedGenre}
          size="large"
          sx={{
            borderRadius: '12px',
            px: 6,
            py: 2,
            fontWeight: 'bold',
            fontSize: '1.1rem',
            background: selectedGenre
              ? `linear-gradient(45deg, #667eea 0%, #764ba2 100%)`
              : 'rgba(255, 255, 255, 0.1)',
            color: selectedGenre ? '#fff' : 'rgba(255, 255, 255, 0.5)',
            boxShadow: selectedGenre ? '0 8px 25px rgba(102, 126, 234, 0.4)' : 'none',
            transition: 'all 0.3s ease',
            '&:hover': selectedGenre ? {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 35px rgba(102, 126, 234, 0.6)',
            } : {},
          }}
        >
          Start Discovery
        </Button>
      </DialogActions>
    </Dialog>
  );
}

