import React, { useState, useEffect } from 'react';

function BookForm({ book, onSave }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      onSave({ id: book ? book.id : Date.now(), title, author });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">{book ? 'Update' : 'Add'} Book</button>
    </form>
  );
}

export default BookForm;
