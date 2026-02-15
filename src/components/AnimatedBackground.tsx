import React from 'react';
import { Box, Typography } from '@mui/material';

interface AnimatedBackgroundProps {
  mode: 'light' | 'dark';
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ mode }) => {
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
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: mode === 'dark'
            ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(240, 147, 251, 0.2) 0%, transparent 70%)',
          top: '-150px',
          right: '-150px',
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': {
              transform: 'scale(1)',
              opacity: 0.5,
            },
            '50%': {
              transform: 'scale(1.2)',
              opacity: 0.8,
            },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: mode === 'dark'
            ? 'radial-gradient(circle, rgba(240, 147, 251, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
          bottom: '-200px',
          left: '-200px',
          animation: 'pulse 10s ease-in-out infinite reverse',
          '@keyframes pulse': {
            '0%, 100%': {
              transform: 'scale(1)',
              opacity: 0.4,
            },
            '50%': {
              transform: 'scale(1.3)',
              opacity: 0.7,
            },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: mode === 'dark'
            ? 'radial-gradient(circle, rgba(255, 219, 98, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'float 15s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': {
              transform: 'translate(-50%, -50%) scale(1)',
              opacity: 0.3,
            },
            '33%': {
              transform: 'translate(-50%, -60%) scale(1.1)',
              opacity: 0.5,
            },
            '66%': {
              transform: 'translate(-40%, -50%) scale(0.9)',
              opacity: 0.4,
            },
          },
        }}
      />
    </Box>
  );
};
