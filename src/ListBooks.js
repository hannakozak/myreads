import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  render() {
    const { books, bookshelves, changeShelf} = this.props;
  return (
    <div className="list-books-content">
      {bookshelves.map((shelf, index) => {
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{ shelf.name }</h2>
              <div className="bookshelf-books">
                    <Bookshelf
					   shelf={ shelf }
                       books={ books }
					   changeShelf={ changeShelf }
                    />
			  </div>
		  </div>
        )
	  })}
	</div>
	)
  }
}
            
export default ListBooks;
