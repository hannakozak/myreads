import React, { Component } from 'react';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import { Route, Link } from 'react-router-dom';

class BooksApp extends Component {
  state = {
    books: [],
    result: [],
    error: false
  }
  makeQuery = (event) => {
	const query = event.target.value;
    if (query) {
      BooksAPI.search(query).then(books => {
        books.length > 0
          ? this.setState({ result: books, error: false })
          : this.setState({ result: [], error: true });
      });
    }
  }
  bookshelves = [
    { value: 'currentlyReading', name: 'Currently Reading' },
    { value: 'wantToRead', name: 'Want to Read' },
    { value: 'read', name: 'Have Read' },
  ];
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      book.shelf = shelf;
      this.setState((prevstate) => ({
        books: prevstate.books.filter((b) => {
          return (b.id !== book.id)
        }).concat([book])
      }))
    })
  }
     render() {
	   const { books } = this.state;
         return (
           <div className="app">
             <Route path="/search"
               render={() => (
                <SearchBooks books={ books } changeShelf= { this.changeShelf } query={ this.query } result={ this.state.result } error={ this.state.error } makeQuery={ this.makeQuery }/>
               )}
             />
             <Route exact path="/"
               render={() => (
                 <div className="list-books">
                   <div className="list-books-title">
                     <h1>MyReads</h1>
                   </div>
                     <ListBooks books={ books } bookshelves = { this.bookshelves } changeShelf={ this.changeShelf }/>
                   <div className="open-search">
                     <Link to="/search"><button>Add a Book</button></Link>
                   </div>
                 </div>
               )}
             />
           </div>
         )
     }
}

export default BooksApp;
