import React from 'react';

function BookRow({ book, onEdit, onDelete }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <button className="action-btn edit-btn" onClick={() => onEdit(book)}>Edit</button>
        <button className="action-btn delete-btn" onClick={() => onDelete(book.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default BookRow;
