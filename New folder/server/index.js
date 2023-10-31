const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const connect = require('../db');
connect();

const Book = require('../server/models')

// API routes

//info of all books
app.get('/api/books', async (req, res) => {
    const result = await Book.find();
    res.send(result);
  });


 // info of desired book
  app.get('/api/books/:id', async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        res.status(200).send(book);
    }catch(err){
        res.status(404).json("Entry Not Found");
    }
  });


//add
  app.post('/api/books', async (req, res) => {
      try {
    const { title, author, summary } = req.body;
    const newBook = new Book({ title, author, summary });

    if(!title || !author || !summary ){
        res.status(400).send("Invalid Request");
      }
      console.log(Book.title);
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

//update
  app.put('/api/books/:_id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params._id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

//delete
app.delete('/api/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndRemove(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  
//url error
    const notFound = (req,res) =>{
        res.status(404).json("page not found");
      }
      app.use(notFound);


app.listen(8080, () => {
    console.log("server is running")
});