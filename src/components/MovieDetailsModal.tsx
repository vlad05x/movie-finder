import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Rating } from '@mui/material';

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
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="lg"
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
        fontSize: '2rem',
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center',
        pb: 2
      }}>
        {movie.title}
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={3}
          sx={{
            animation: 'fadeIn 0.5s ease-in-out',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Box
            component="img"
            src={movie.poster}
            alt={movie.title}
            sx={{
              width: { xs: '100%', md: '40%' },
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          />
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: '#fff',
                opacity: 0.9,
              }}
            >
              {movie.description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Genre:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#667eea',
                  fontWeight: 'medium',
                  px: 2,
                  py: 0.5,
                  borderRadius: '8px',
                  background: 'rgba(102, 126, 234, 0.2)',
                }}
              >
                {movie.genre}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Rating:
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Rating
                  value={movie.rating / 2}
                  precision={0.5}
                  readOnly
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: '#ffd700',
                    },
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ffd700',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                  }}
                >
                  {movie.rating.toFixed(1)}/10
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3, justifyContent: 'center' }}>
        <Button
          onClick={onClose}
          size="large"
          sx={{
            borderRadius: '12px',
            px: 6,
            py: 2,
            fontWeight: 'bold',
            fontSize: '1.1rem',
            background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
            color: '#fff',
            boxShadow: '0 8px 25px rgba(240, 147, 251, 0.4)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 35px rgba(240, 147, 251, 0.6)',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

