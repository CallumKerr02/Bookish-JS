CREATE TABLE Author(
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL
);

CREATE TABLE Book(
   id SERIAL PRIMARY KEY,
   name VARCHAR(20) NOT NULL,
	barCode VARCHAR(10) NOT NULL,
	isbn VARCHAR(10) NOT NULL,
	authorId INT,
	FOREIGN KEY(authorId)
	REFERENCES Author(id)
);

CREATE TABLE Checkouts(
   	dueBack SERIAL,
    bookId VARCHAR(10) NOT NULL,
	accountId INT,
	FOREIGN KEY (accountId)
	REFERENCES Account(id)
);
