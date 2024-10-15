"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/movies"); // API 경로에 맞게 수정해주세요
        setMovies(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Movie List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h2>{movie.title}</h2>
            <p>
              <strong>Plot:</strong> {movie.plot}
            </p>
            <p>
              <strong>Genres:</strong> {movie.genres.join(", ")}
            </p>
            <p>
              <strong>Rating:</strong> {movie.imdb.rating} ({movie.imdb.votes}{" "}
              votes)
            </p>
            <p>
              <strong>Released:</strong>{" "}
              {new Date(movie.released).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
