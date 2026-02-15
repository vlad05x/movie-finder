import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

interface MovieCardProps {
  title: string;
  poster: string;
  onClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, poster, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        maxWidth: { xs: 350, sm: 400, md: 450 },
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        background: "rgba(0, 0, 0, 0.9)",
        color: "#fff",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(45deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        },
        "&:hover": {
          transform: { xs: "translateY(-10px) scale(1.01)", md: "translateY(-15px) scale(1.02)" },
          boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)",
          "&::before": {
            opacity: 1,
          },
          "& .MuiCardMedia-root": {
            transform: "scale(1.05)",
            filter: "brightness(110%)",
          },
          "& .movie-title": {
            transform: "translateY(-5px)",
          },
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height={450}
          image={poster}
          alt={title}
          sx={{
            objectFit: "cover",
            filter: "brightness(95%)",
            transition: "all 0.4s ease",
            height: { xs: 450, sm: 500, md: 600 },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%)",
            padding: { xs: "16px 12px 12px", sm: "20px 16px 16px" },
          }}
        >
          <Typography
            className="movie-title"
            variant="h5"
            component="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
              lineHeight: 1.2,
              transition: "transform 0.3s ease",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
