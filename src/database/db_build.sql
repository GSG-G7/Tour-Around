BEGIN;
DROP TABLE IF EXISTS users,places CASCADE;
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    email  VARCHAR UNIQUE,
    phone  INT UNIQUE
);
INSERT INTO users(name,email,phone) VALUES ('Sajeda','sajeda@gmail.com',0599789523);

CREATE TABLE places (
    place_id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    location VARCHAR(30) NOT NULL,
    service TEXT NOT NULL,
    delivery BOOLEAN,
    image VARCHAR,
    user_id INTEGER REFERENCES users(user_id)
);
INSERT INTO places(name,location,service,delivery,image,user_id) VALUES ('take-break','gaza','food',true,'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',2);


COMMIT;