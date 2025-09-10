CREATE USER valcann_user with encrypted password '1234';
CREATE DATABASE valcann_db;
GRANT ALL PRIVILEGES ON DATABASE valcann_db TO valcann_user;