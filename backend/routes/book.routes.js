const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// 🔸 Listar todos os livros
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    let books;

    if (search) {
      books = await Book.find({
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { author: { $regex: search, $options: 'i' } },
        ],
      });
    } else {
      books = await Book.find();
    }

    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
});

// 🔸 Adicionar livro
router.post('/', async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;
    const newBook = new Book({ title, author, year, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao adicionar livro' });
  }
});

// 🔸 Atualizar livro
router.put('/:id', async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year, genre },
      { new: true }
    );
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar livro' });
  }
});

// 🔸 Excluir livro
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Livro excluído com sucesso' });
  } catch (err) {
    res.status(400).json({ error: 'Erro ao excluir livro' });
  }
});

module.exports = router;
