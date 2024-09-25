import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import './books.css';

function BooksApp() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Fire and Ice', author: 'Jane' },
    { id: 2, title: 'Water Mark', author: 'Tim23' },
    { id: 3, title: 'France', author: 'GooT' }
  ]);
  
  const [editingBook, setEditingBook] = useState(null);

  // Optimistic Delete
  const deleteBook = (id) => {
    const previousBooks = [...books];  // Backup current state
    setBooks(books.filter(book => book.id !== id));  // Optimistically update UI
    
    // Simulate an API call failure and rollback (you can replace this with real API logic)
    setTimeout(() => {
      if (Math.random() < 0.5) {  // Simulate a random failure
        alert('Failed to delete the book. Rolling back.');
        setBooks(previousBooks);  // Rollback the state on failure
      }
    }, 1000);
  };

  const addBook = (book) => {
    setBooks([...books, { id: books.length + 1, ...book }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null);
  };

  const startEditing = (book) => {
    setEditingBook(book);
  };

  return (
    <div className="books-app">
      <h1>Books</h1>
      {editingBook ? (
        <BookForm book={editingBook} onSave={updateBook} />
      ) : (
        <BookForm onSave={addBook} />
      )}
      <BookList books={books} onDelete={deleteBook} onEdit={startEditing} />
    </div>
  );
}

export default BooksApp;
