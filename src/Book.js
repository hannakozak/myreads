import React, { Component } from 'react';
import BookshelfChanger from './BookshelfChanger';

class Book extends Component {
  render() {
     const { books, book, changeShelf } = this.props;
	 const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail
      : 'icons/book-placeholder.svg' ;
     const title = book.title ? book.title : 'No title available';

	   return (
        <li>
          <div className="book">
            <div className="book-top">
             <div className="book-cover"
               style={{
                 width: 128,
                 height: 193,
                 backgroundImage: `url(${coverImg})`
               }}
              />
               <BookshelfChanger books={ books } book={ book } changeShelf={ changeShelf} />
            </div>
            <div className="book-title">{ title }</div>
              { book.authors &&
               book.authors.map((author, index) => (
                <div className="book-authors">{ author }</div>
              ))}
          </div>
        </li>
      );
};
}
export default Book;