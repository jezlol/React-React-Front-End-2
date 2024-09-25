import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BookRow from './BookRow';
import './animations.css';  // Create this file for custom animations

function BookList({ books, onEdit, onDelete }) {
  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <TransitionGroup component="tbody">
        {books.map((book) => (
          <CSSTransition key={book.id} timeout={500} classNames="fade">
            <BookRow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </table>
  );
}

export default BookList;
