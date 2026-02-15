import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
  Typography,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../context/ThemeContext";
import { GenreModal } from "../components/GenreModal";
import { MovieCard } from "../components/MovieCard";
import { MovieDetailsModal } from "../components/MovieDetailsModal";
import { FloatingParticles } from "../components/FloatingParticles";
import { AnimatedBackground } from "../components/AnimatedBackground";

const API_KEY = "2fc9d276cc0449976e28c9fa1d31a054";
const API_URL = "https://api.themoviedb.org/3";

export const Home: React.FC = () => {
  const [genre, setGenre] = useState<string | null>(null);
  const [movie, setMovie] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toggleTheme, mode } = useTheme();

  const fetchMovie = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          with_genres: genre,
        },
      });
      const movies = response.data.results;
      if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (genre) fetchMovie();
  }, [genre]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 2, sm: 3, md: 4 },
        position: "relative",
        background:
          mode === "dark"
            ? "radial-gradient(ellipse at top, #1a1f3a 0%, #0f1419 50%, #0a0e1a 100%)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #feca57 75%, #ff6b6b 100%)",
        color: mode === "dark" ? "#fff" : "#000",
        overflow: "hidden",
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: mode === "dark"
            ? "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 219, 98, 0.2) 0%, transparent 50%)"
            : "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <AnimatedBackground mode={mode} />
      <FloatingParticles mode={mode} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setGenre(null)}
        sx={{
          position: "absolute",
          top: { xs: 12, sm: 16 },
          left: { xs: 12, sm: 16 },
          background: mode === "dark"
            ? "linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
            : "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
          border: "none",
          borderRadius: "12px",
          px: { xs: 2, sm: 3 },
          py: 1,
          fontWeight: "bold",
          fontSize: { xs: "0.875rem", sm: "1rem" },
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
          },
        }}
      >
        Select genre
      </Button>
      <IconButton
        color="primary"
        onClick={toggleTheme}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          background: mode === "dark"
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          width: 48,
          height: 48,
          transition: "all 0.3s ease",
          "&:hover": {
            background: mode === "dark"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(0, 0, 0, 0.2)",
            transform: "rotate(180deg)",
          }
        }}
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      <Fade in={!genre}>
        <Box>
          <GenreModal isOpen={!genre} onSelectGenre={(g) => setGenre(g)} />
        </Box>
      </Fade>

      {movie && !loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            mt: 4,
            animation: "fadeIn 0.8s ease-in-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <MovieCard
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onClick={() => setIsDetailsOpen(true)}
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              borderRadius: "16px",
              px: 6,
              py: 2,
              fontWeight: "bold",
              fontSize: "1.1rem",
              background: mode === "dark"
                ? "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)"
                : "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
              boxShadow: "0 8px 25px rgba(240, 147, 251, 0.4)",
              transition: "all 0.3s ease",
              textTransform: "none",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                transition: "left 0.5s",
              },
              "&:hover": {
                transform: "translateY(-3px) scale(1.05)",
                boxShadow: "0 12px 35px rgba(240, 147, 251, 0.6)",
                "&::before": {
                  left: "100%",
                },
              },
            }}
            onClick={fetchMovie}
          >
            Show Another Movie
          </Button>
        </Box>
      )}

      {loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <CircularProgress
            color="secondary"
            sx={{
              mt: 4,
              size: 80,
              thickness: 5,
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
            size={80}
            thickness={5}
          />
          <Typography
            variant="h6"
            sx={{
              color: mode === "dark" ? "#fff" : "#000",
              opacity: 0.8,
              animation: "pulse 1.5s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 0.8 },
                "50%": { opacity: 0.4 },
              },
            }}
          >
            Finding the perfect movie...
          </Typography>
        </Box>
      )}

      {movie && (
        <MovieDetailsModal
          isOpen={isDetailsOpen}
          movie={{
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            description: movie.overview,
            genre: genre || "",
            rating: movie.vote_average,
          }}
          onClose={() => setIsDetailsOpen(false)}
        />
      )}
    </Container>
  );
};
