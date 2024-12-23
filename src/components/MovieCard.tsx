import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

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
        maxWidth: 400,
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: 8,
        },
        background: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
      }}
    >
      <CardMedia
        component="img"
        height="500"
        image={poster}
        alt={title}
        sx={{
          objectFit: "cover",
          filter: "brightness(90%)",
        }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#FFD700",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
