import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

interface MovieDetailsModalProps {
  isOpen: boolean;
  movie: {
    title: string;
    poster: string;
    description: string;
    genre: string;
    rating: number;
  };
  onClose: () => void;
}

export function MovieDetailsModal({ isOpen, movie, onClose }: MovieDetailsModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{movie.title}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
          <Box component="img" src={movie.poster} alt={movie.title} sx={{ width: { xs: '100%', md: '33%' }, height: 'auto', borderRadius: 1 }} />
          <Box flex={1}>
            <Typography variant="body1" paragraph>
              {movie.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Genre: {movie.genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating: ⭐ {movie.rating.toFixed(1)}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
}

