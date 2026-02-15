import React from 'react';
import { Box, Typography } from '@mui/material';

interface FloatingParticlesProps {
  mode: 'light' | 'dark';
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({ mode }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            background: mode === 'dark' 
              ? `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`
              : `rgba(102, 126, 234, ${Math.random() * 0.3 + 0.1})`,
            borderRadius: '50%',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: Math.random() * 5 + 's',
            '@keyframes float': {
              '0%': {
                transform: 'translateY(0) translateX(0)',
                opacity: 0,
              },
              '10%': {
                opacity: 1,
              },
              '90%': {
                opacity: 1,
              },
              '100%': {
                transform: `translateY(-100vh) translateX(${Math.random() * 100 - 50}px)`,
                opacity: 0,
              },
            },
          }}
        />
      ))}
    </Box>
  );
};
