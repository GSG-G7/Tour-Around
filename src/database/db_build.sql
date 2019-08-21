BEGIN;
DROP TABLE IF EXISTS users,places CASCADE;
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(20) NOT NULL,
    email  VARCHAR UNIQUE,
    phone  INT UNIQUE
);

CREATE TABLE places (
    place_id SERIAL PRIMARY KEY,
    place_name VARCHAR(30) NOT NULL,
    location VARCHAR(30) NOT NULL,
    service TEXT NOT NULL,
    delivery BOOLEAN,
    image VARCHAR,
    user_id INTEGER REFERENCES users(user_id)
);
COMMIT;