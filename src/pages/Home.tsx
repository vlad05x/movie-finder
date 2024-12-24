import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../context/ThemeContext";
import { GenreModal } from "../components/GenreModal";
import { MovieCard } from "../components/MovieCard";
import { MovieDetailsModal } from "../components/MovieDetailsModal";

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
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        position: "relative",
        background:
          mode === "dark"
            ? "linear-gradient(to right, #141E30, #243B55)"
            : "linear-gradient(to right, #d3d3d3, #d3d3d3)",
        color: mode === "dark" ? "#fff" : "#000",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => setGenre(null)}
        sx={{ position: "absolute", top: 16, left: 16 }}
      >
        Select genre
      </Button>
      <IconButton
        color="primary"
        onClick={toggleTheme}
        sx={{ position: "absolute", top: 16, right: 16 }}
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
            gap: 2,
            mt: 4,
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
              borderRadius: 8,
              px: 4,
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            onClick={fetchMovie}
          >
            Show Another Movie
          </Button>
        </Box>
      )}

      {loading && (
        <CircularProgress
          color="secondary"
          sx={{ mt: 4 }}
          size={60}
          thickness={4}
        />
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
