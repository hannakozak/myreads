import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBooks extends Component {
  render() {
    const { books, changeShelf, query, result, error, makeQuery, clearSearch  } = this.props;
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/" onClick={ clearSearch }>
              Close
            </Link>
             <div className="search-books-input-wrapper">
               <input
                 type="text"
                 placeholder="Search by title or author"
                 value={ query }
                 onChange={ makeQuery }
				 default={ result }
               />
           </div>
        </div>
        <div className="search-books-results">
          {result.length > 0 && (
            <div>
              <h3>Search returned { result.length } books </h3>
                <ol className="books-grid">
                  {result.map(book => (
                    <Book
                      book={ book }
                      books={ books }
					  shelf={book.shelf ? book.shelf : 'none'}
                      changeShelf={changeShelf}
                    />
                   ))}
                </ol>
            </div>
          )}
          {error && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;