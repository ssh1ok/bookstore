# Book Management RESTful API

### https://bookstore-info.onrender.com/api/books

This is a simple RESTful API built with Node.js and Express to manage a collection of books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books.

## Routes

- **Retrieve All Books**
  - `GET /api/books`
  - Returns a list of all books.

- **Retrieve a Specific Book**
  - `GET /api/books/:id`
  - Retrieves details of a specific book by its ID. Returns a 404 error if the book is not found.

- **Add a New Book**
  - `POST /api/books`
  - Adds a new book to the collection. Requires a JSON body with `title`, `author`, and `summary`. Returns the newly created book if successful. Returns a 400 error if the request is invalid.

- **Update a Book**
  - `PUT /api/books/:id`
  - Updates the details of a specific book by its ID. Returns the updated book if successful. Returns a 404 error if the book is not found. Returns a 400 error if the request is invalid.

- **Delete a Book**
  - `DELETE /api/books/:id`
  - Deletes a book by its ID. Returns a 204 status code if successful. Returns a 404 error if the book is not found.

## Side Cases

- When retrieving a specific book:
  - If the book with the provided ID does not exist, a 404 error is returned.

- When adding a new book:
  - The request must include a valid JSON body with `title`, `author`, and `summary`.
  - If any of these fields are missing or empty, a 400 error is returned.

- When updating a book:
  - If the book with the provided ID does not exist, a 404 error is returned.
  - The request must include a valid JSON body with fields to update.
  - If the request is invalid, a 400 error is returned.

- When deleting a book:
  - If the book with the provided ID does not exist, a 404 error is returned.

## Getting Started

1. Clone this repository.

2. Install dependencies using `npm install`.

3. Set up your MongoDB connection by modifying the `config.js` file.

4. Start the API with `node index.js`.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- `dotenv` for managing environment variables

Feel free to use this project as a template for building your own book management API. Don't forget to customize it for your specific requirements.
