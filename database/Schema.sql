
DROP DATABASE IF EXISTS drink_ratings;

CREATE DATABASE drink_ratings;

\c drink_ratings;

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  drinkname Varchar,
  rating int
  )


