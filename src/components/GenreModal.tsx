import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@mui/material';

interface GenreModalProps {
  isOpen: boolean;
  onSelectGenre: (genre: string) => void;
}

const genres = [
  { id: "28", name: "Action", icon: '💥' },
  { id: "35", name: "Comedy", icon: '😄' },
  { id: "18", name: "Drama", icon: '🎭' },
  { id: "27", name: "Horror", icon: '👻' },
  { id: "878", name: "Sci-Fi", icon: '🚀' },
];

export function GenreModal({ isOpen, onSelectGenre }: GenreModalProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  return (
    <Dialog open={isOpen} onClose={() => {}} maxWidth="sm" fullWidth>
      <DialogTitle>Choose a Genre</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {genres.map((genre) => (
            <Grid item xs={6} key={genre.id}>
              <Button
                variant={selectedGenre === genre.id ? "contained" : "outlined"}
                onClick={() => setSelectedGenre(genre.id)}
                fullWidth
                sx={{ height: 100, flexDirection: 'column' }}
              >
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{genre.icon}</span>
                <span>{genre.name}</span>
              </Button>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSelectGenre(selectedGenre)} disabled={!selectedGenre} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

