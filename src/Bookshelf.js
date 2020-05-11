import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  render() {
    const { books, shelf, changeShelf } = this.props;
	const onShelf = books.filter(book => book.shelf === shelf.value);
      return (
        <ol className="books-grid">
		{onShelf.map((book, index) => (
            <Book
			key = {index}
			book = {book}
			books={books}
			changeShelf={ changeShelf }
            />
        ))}
	    </ol>
	  )
  }
}
export default Bookshelf;